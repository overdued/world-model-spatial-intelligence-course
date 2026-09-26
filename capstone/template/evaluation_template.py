"""Capstone 评估脚手架（evaluation template）—— World Models & Spatial Intelligence 课程。

仅依赖 Python 标准库与 numpy。用法概述
=============================

本脚本假设你的项目对外暴露两个接口（不需要继承任何基类，duck-typing 即可）：

1. **env factory**：一个可调用对象 `env_factory(seed=None) -> env`，返回的环境需实现：

   - ``env.reset() -> obs``
       重置环境，返回初始观测（numpy array 或可 ``np.asarray`` 的对象）。
   - ``env.step(action) -> (obs, reward, done, info)``
       执行动作，返回下一观测、标量奖励、episode 结束标志、信息字典。
       若 ``info["success"]`` 存在（bool），将用于统计 success rate；
       否则 success rate 显示为 NaN（不影响其他指标）。

   Gymnasium 风格环境只需包一层薄适配器即可满足该接口。

2. **policy**：可调用对象 ``policy(obs) -> action``。

3. **model（可选）**：用于预测误差评估，需实现：

   - ``model.predict_one(obs, action) -> predicted_next_obs``
       单步预测（必须）。
   - ``model.imagine(obs, actions) -> array of predicted obs, shape (H, ...)``
       多步 open-loop 预测（可选；缺省时由本脚本通过循环调用
       ``predict_one`` 自动生成）。

接入步骤
========

1. 写好你的 env factory / policy / model 适配器（通常各 10 行以内）。
2. 调用 ``run_full_evaluation`` 传入 ID 与 OOD 两组 env factory，
   打印对比表并取回结果字典写入报告。
3. 报告模板（report_template.md）中的 "ID vs OOD 对比" 表格可直接
   使用本脚本输出的数字。

运行演示
========

直接执行本文件::

    python3 evaluation_template.py

将用一个玩具 1D 世界（粒子向目标点运动）+ 随机策略 + 恒等预测模型
自测，演示输出格式。
"""

from dataclasses import dataclass, field
from typing import Any, Callable, Dict, List, Optional, Sequence

import numpy as np


# ---------------------------------------------------------------------------
# 数据结构
# ---------------------------------------------------------------------------

@dataclass
class EpisodeResult:
    """单条 episode 的结果。"""

    total_return: float
    length: int
    success: Optional[bool]  # None 表示环境未提供 success 信息
    observations: List[np.ndarray] = field(default_factory=list)
    actions: List[np.ndarray] = field(default_factory=list)


@dataclass
class PolicyMetrics:
    """策略在若干 episode 上的聚合指标。"""

    success_rate: float       # 环境未提供 success 时为 NaN
    mean_return: float
    std_return: float
    mean_length: float
    n_episodes: int


@dataclass
class PredictionMetrics:
    """模型预测误差指标（MSE，按观测向量逐元素取平均）。"""

    one_step_error: float                     # 单步预测 MSE
    multi_step_errors: List[float]            # 每个 horizon step 的 open-loop MSE
    mean_multi_step_error: float              # multi-step MSE 的均值


# ---------------------------------------------------------------------------
# Rollout 与策略评估
# ---------------------------------------------------------------------------

def rollout_episode(
    env,
    policy: Callable[[Any], Any],
    max_steps: int = 200,
) -> EpisodeResult:
    """在 ``env`` 中用 ``policy`` 跑一条 episode，收集轨迹。

    参数
    ----
    env : 满足接口的环境实例（见模块 docstring）。
    policy : ``policy(obs) -> action``。
    max_steps : episode 最大步数（防止不终止的环境死循环）。
    """
    obs = env.reset()
    observations = [np.asarray(obs, dtype=np.float64)]
    actions: List[np.ndarray] = []
    total_return = 0.0
    success: Optional[bool] = None
    done = False
    steps = 0

    while not done and steps < max_steps:
        action = policy(obs)
        obs, reward, done, info = env.step(action)
        total_return += float(reward)
        steps += 1
        actions.append(np.asarray(action, dtype=np.float64))
        observations.append(np.asarray(obs, dtype=np.float64))
        if isinstance(info, dict) and "success" in info:
            success = bool(info["success"])

    return EpisodeResult(
        total_return=total_return,
        length=steps,
        success=success,
        observations=observations,
        actions=actions,
    )


def evaluate_policy(
    env_factory: Callable[..., Any],
    policy: Callable[[Any], Any],
    n_episodes: int = 20,
    max_steps: int = 200,
    seed: int = 0,
    collect_episodes: bool = False,
) -> PolicyMetrics:
    """用多个 episode 评估策略的 success rate / return / 长度。

    每个 episode 用 ``env_factory(seed=seed + i)`` 创建新环境实例，
    以保证评估可复现且 episode 间相互独立。
    """
    episodes: List[EpisodeResult] = []
    for i in range(n_episodes):
        env = env_factory(seed=seed + i)
        episodes.append(rollout_episode(env, policy, max_steps=max_steps))

    successes = [e.success for e in episodes if e.success is not None]
    success_rate = float(np.mean(successes)) if successes else float("nan")
    returns = np.array([e.total_return for e in episodes], dtype=np.float64)
    lengths = np.array([e.length for e in episodes], dtype=np.float64)

    metrics = PolicyMetrics(
        success_rate=success_rate,
        mean_return=float(returns.mean()),
        std_return=float(returns.std()),
        mean_length=float(lengths.mean()),
        n_episodes=n_episodes,
    )
    if collect_episodes:
        # 供预测误差评估复用轨迹，避免重复 rollout。
        metrics.episodes = episodes  # type: ignore[attr-defined]
    return metrics


# ---------------------------------------------------------------------------
# 预测误差评估
# ---------------------------------------------------------------------------

def _imagine(model, obs: np.ndarray, actions: Sequence[np.ndarray]) -> List[np.ndarray]:
    """生成 open-loop 多步预测；model 未实现 imagine 时循环调用 predict_one。"""
    if hasattr(model, "imagine"):
        return [np.asarray(o, dtype=np.float64) for o in model.imagine(obs, actions)]
    preds = []
    current = obs
    for a in actions:
        current = np.asarray(model.predict_one(current, a), dtype=np.float64)
        preds.append(current)
    return preds


def evaluate_prediction(
    env_factory: Callable[..., Any],
    policy: Callable[[Any], Any],
    model,
    n_episodes: int = 10,
    max_steps: int = 200,
    horizon: int = 10,
    seed: int = 10_000,
) -> PredictionMetrics:
    """评估模型的 one-step 与 multi-step（open-loop）预测误差。

    one-step 误差：沿真实轨迹逐步比较 ``model.predict_one(obs_t, a_t)``
    与真实 ``obs_{t+1}`` 的 MSE。

    multi-step 误差：在每条轨迹中均匀取若干起点，从该点出发做长度
    ``horizon`` 的 open-loop 预测，逐步与真实后续观测比较，报告每个
    horizon step 的平均 MSE——用于刻画误差随预测深度如何累积。
    """
    one_step_errors: List[float] = []
    multi_step_errors: List[List[float]] = []

    for i in range(n_episodes):
        env = env_factory(seed=seed + i)
        ep = rollout_episode(env, policy, max_steps=max_steps)
        obs_seq, act_seq = ep.observations, ep.actions
        if ep.length < 2:
            continue

        # --- one-step ---
        for t in range(ep.length):
            pred = np.asarray(model.predict_one(obs_seq[t], act_seq[t]), dtype=np.float64)
            one_step_errors.append(float(np.mean((pred - obs_seq[t + 1]) ** 2)))

        # --- multi-step ---
        h = min(horizon, ep.length)
        start = int(rng_uniform(i, ep.length - h)) if ep.length - h > 0 else 0
        preds = _imagine(model, obs_seq[start], act_seq[start:start + h])
        step_errors = [
            float(np.mean((preds[k] - obs_seq[start + k + 1]) ** 2)) for k in range(h)
        ]
        multi_step_errors.append(step_errors)

    if multi_step_errors:
        max_h = max(len(e) for e in multi_step_errors)
        per_step = [
            float(np.mean([e[k] for e in multi_step_errors if len(e) > k]))
            for k in range(max_h)
        ]
    else:
        per_step = []

    return PredictionMetrics(
        one_step_error=float(np.mean(one_step_errors)) if one_step_errors else float("nan"),
        multi_step_errors=per_step,
        mean_multi_step_error=float(np.mean(per_step)) if per_step else float("nan"),
    )


def rng_uniform(i: int, upper: int) -> float:
    """确定性的伪随机起点选择（避免依赖全局 RNG 状态）。"""
    return (np.sin(i * 12.9898) * 43758.5453) % 1.0 * upper


# ---------------------------------------------------------------------------
# ID vs OOD 对比
# ---------------------------------------------------------------------------

def format_metrics_row(name: str, policy_m: PolicyMetrics, pred_m: Optional[PredictionMetrics]) -> str:
    """把一组指标格式化为表格行。"""
    one_step = f"{pred_m.one_step_error:.4f}" if pred_m else "-"
    multi = f"{pred_m.mean_multi_step_error:.4f}" if pred_m else "-"
    return (
        f"| {name:<8} | {policy_m.success_rate:>12.3f} | "
        f"{policy_m.mean_return:>9.2f} +/- {policy_m.std_return:<7.2f} | "
        f"{one_step:>17} | {multi:>19} |"
    )


def print_comparison_table(results: Dict[str, Dict[str, Any]]) -> None:
    """打印 ID vs OOD 对比表（Markdown 格式，可直接粘贴进报告）。"""
    header = (
        "| Setting  | Success Rate | Mean Return (mean +/- std) | "
        "1-step Pred. Error | Multi-step Pred. Err. |"
    )
    sep = "|" + "----------|" * 5
    print(header)
    print(sep)
    for name, r in results.items():
        print(format_metrics_row(name, r["policy"], r.get("prediction")))


def run_full_evaluation(
    id_env_factory: Callable[..., Any],
    ood_env_factory: Optional[Callable[..., Any]],
    policy: Callable[[Any], Any],
    model=None,
    n_episodes: int = 20,
    max_steps: int = 200,
    horizon: int = 10,
    seed: int = 0,
) -> Dict[str, Dict[str, Any]]:
    """一站式评估入口：对 ID（以及可选的 OOD）设置分别评估并打印对比表。

    返回 ``{"ID": {"policy": PolicyMetrics, "prediction": PredictionMetrics|None}, ...}``，
    数字可直接写入报告模板的 "ID vs OOD 对比" 表。

    OOD 设置由你定义：把动力学参数、噪声水平、场景布局等改掉后的另一个
    env factory 传入 ``ood_env_factory`` 即可。评估协议（episode 数、
    种子偏移、horizon）两侧完全一致，保证对比公平。
    """
    settings: Dict[str, Callable[..., Any]] = {"ID": id_env_factory}
    if ood_env_factory is not None:
        settings["OOD"] = ood_env_factory

    results: Dict[str, Dict[str, Any]] = {}
    for offset, (name, factory) in enumerate(settings.items()):
        results[name] = {
            "policy": evaluate_policy(
                factory, policy, n_episodes=n_episodes, max_steps=max_steps,
                seed=seed + offset * 1000,
            )
        }
        if model is not None:
            results[name]["prediction"] = evaluate_prediction(
                factory, policy, model,
                n_episodes=max(2, n_episodes // 2), max_steps=max_steps,
                horizon=horizon, seed=seed + offset * 1000 + 500,
            )

    print_comparison_table(results)
    return results


# ---------------------------------------------------------------------------
# 玩具自测：1D 粒子世界 + 随机策略 + 恒等模型
# ---------------------------------------------------------------------------

class ToyWorld:
    """1D 世界：粒子受一维力作用向目标点运动，到达容差范围内即 success。

    ``friction`` 是动力学参数——OOD 演示中改变它即构成分布偏移。
    """

    def __init__(self, seed=None, friction: float = 0.9, noise: float = 0.01):
        self._rng = np.random.default_rng(seed)
        self._friction = friction
        self._noise = noise
        self.pos = 0.0
        self.vel = 0.0
        self.target = 1.0
        self._steps = 0

    def reset(self):
        self.pos = float(self._rng.uniform(-0.2, 0.2))
        self.vel = 0.0
        self._steps = 0
        return self._obs()

    def _obs(self):
        return np.array([self.pos + self._rng.normal(0, self._noise), self.vel])

    def step(self, action):
        force = float(np.clip(np.asarray(action).ravel()[0], -1.0, 1.0))
        self.vel = self._friction * self.vel + 0.1 * force
        self.pos += self.vel
        self._steps += 1
        success = abs(self.pos - self.target) < 0.05
        done = success or self._steps >= 100
        reward = -abs(self.pos - self.target)
        return self._obs(), reward, done, {"success": success}


class IdentityModel:
    """恒等预测模型：预测下一观测等于当前观测（故意很差，演示指标非零）。"""

    def predict_one(self, obs, action):
        return np.asarray(obs, dtype=np.float64)


def _demo() -> None:
    rng = np.random.default_rng(42)

    def random_policy(obs):
        return rng.uniform(-1.0, 1.0, size=(1,))

    id_factory = lambda seed=None: ToyWorld(seed=seed, friction=0.9)
    ood_factory = lambda seed=None: ToyWorld(seed=seed, friction=0.5)  # 动力学偏移

    print("Capstone 评估脚手架自测（玩具 1D 世界 + 随机策略 + 恒等模型）\n")
    results = run_full_evaluation(
        id_env_factory=id_factory,
        ood_env_factory=ood_factory,
        policy=random_policy,
        model=IdentityModel(),
        n_episodes=20,
        max_steps=100,
        horizon=10,
    )
    print("\nMulti-step 预测误差随 horizon 变化（ID 设置）:")
    for k, err in enumerate(results["ID"]["prediction"].multi_step_errors, start=1):
        print(f"  step {k:>2}: MSE = {err:.4f}")
    print("\n自测通过：以上即你的项目接入后应输出的格式。")


if __name__ == "__main__":
    _demo()
