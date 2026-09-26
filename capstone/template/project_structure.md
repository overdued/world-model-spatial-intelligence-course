# Capstone 项目结构与 Lab 组件复用指南

> 本文给出推荐的目录结构、各层接口约定，以及课程 Lab 组件的复用映射。
> 结构是建议而非强制——但**接口约定**（env factory / policy / model）是
> `evaluation_template.py` 能直接接入你项目的前提，建议遵守。

---

## 1. 推荐目录结构

```
my_capstone/
├── README.md                 # 一键复现说明：依赖、种子、运行命令
├── env/                      # 环境层：自定义环境或现成环境的适配器
│   ├── __init__.py
│   └── my_env.py             # 实现 reset() / step() 接口
├── models/                   # 模型层：state / transition / memory
│   ├── __init__.py
│   ├── encoder.py            # observation → latent state（如适用）
│   ├── transition.py         # p(s_{t+1} | s_t, a_t)
│   └── memory.py             # 状态累积与更新（RNN 隐状态 / 持久地图）
├── planning/                 # 决策层：planner 或 policy
│   ├── __init__.py
│   ├── mpc.py                # MPC/CEM（可直接复用 Lab 4）
│   └── policy.py             # 学到的策略（如复用 Lab 9）
├── evaluation/               # 评估层：指标、OOD 设置、可视化
│   ├── __init__.py
│   ├── run_evaluation.py     # 调用 evaluation_template.py 的入口
│   ├── ood_variants.py       # OOD 环境变体工厂
│   └── plots.py              # 曲线、rollout 可视化
├── report/                   # 报告与图表
│   ├── report.md             # 按 report_template.md 填写
│   └── figures/              # architecture diagram、curves、rollouts
└── notebooks/                # 探索性实验（可选）
```

---

## 2. 各层接口约定

### 2.1 环境层（env factory）

评估脚手架要求一个 **env factory**（而非单个 env 实例），以保证 episode 独立且可复现：

```python
def my_env_factory(seed=None):
    return MyEnv(seed=seed, **my_config)

# env 需实现：
obs = env.reset()                        # -> np.ndarray
obs, reward, done, info = env.step(a)    # info["success"] 可选但强烈建议
```

- Lab 0 的 Moving-Ball World 本身就是一个合规模板，可照其结构写自定义环境。
- Gymnasium 环境：写约 10 行适配器把 `reset(seed=...)` / `step` 的返回值对齐即可。

### 2.2 模型层（model）

```python
class MyWorldModel:
    def predict_one(self, obs, action):      # 必须：单步预测
        ...
    def imagine(self, obs, actions):          # 可选：open-loop 多步预测
        ...
```

- 若你的模型工作在 latent space，让 `predict_one` 返回 **解码后的观测预测**
  （或返回 latent 并同步修改评估脚本的误差计算），保证误差在明确定义的空间中度量。
- RSSM 类模型：`predict_one` 内部走 prior（不带后验校正）路径。

### 2.3 决策层（policy）

```python
def my_policy(obs):
    # 内部可以任意复杂：CEM 规划、RSSM imagination、查询占据地图……
    return action
```

- 规划器做成 policy 的闭包：`policy = make_mpc_policy(model, horizon=12, n_candidates=512)`。
- **OOD 评估与 baseline 对比时，保持 policy 接口不变**，只换 env factory——这是公平对比的关键。

### 2.4 评估层

- 直接 `from evaluation_template import run_full_evaluation`（把模板文件复制进你的项目），
  传入 ID / OOD 两个 env factory、policy、model。
- OOD 变体集中放在 `evaluation/ood_variants.py`：改动力学参数、观测噪声、场景布局各算一个变体，
  每个变体都是一行 `lambda seed=None: MyEnv(seed=seed, friction=0.5)` 式的工厂。

---

## 3. Lab 组件复用映射

| Lab | 可直接 import / 复制的组件 | 用在哪一层 |
|-----|---------------------------|-----------|
| Lab 0 · Tiny World | Moving-Ball 环境、rollout 动画工具、Gym 风格接口模板 | env / 可视化 |
| Lab 1 · Kalman Filter | KF predict/update 实现、不确定带可视化 | models/memory（显式状态估计） |
| Lab 2 · Latent Dynamics | encoder → z → dynamics → decoder 骨架、one-step/open-loop rollout 代码 | models（整体） |
| Lab 3 · Tiny RSSM | deterministic h_t + stochastic z_t、prior/posterior、imagination rollout | models/transition + memory |
| Lab 4 · MPC / CEM | CEM 优化器、MPC 控制回路、规划 horizon 分析 | planning |
| Lab 5 · NeRF / Gaussian | 场景表示、渲染查询接口 | models（Spatial 方向的世界状态） |
| Lab 6 · Dynamic 4D | 动态场景表示、时序更新规则 | models/memory（Dynamic 3D 方向） |
| Lab 7 · Video Prediction | 视频预测训练管线、per-step 误差评估 | models / evaluation |
| Lab 8 · Navigation | 导航环境、地图构建、导航任务评估 | env / evaluation |
| Lab 9 · WM Policy | imagination 中的 actor-critic、model-based vs model-free 对比代码 | planning / evaluation（baseline） |
| Lab 10 · OOD 评估 | OOD 变体构造、漂移检测、ID vs OOD 协议 | evaluation |

**复用规范**：

1. 复制代码时在文件头部注明来源（如 `# adapted from labs/lab04_mpc_cem_planning/cem.py`）；
   报告中"实现"一节区分复用与自写部分——rubric 不惩罚复用，惩罚的是**不注明**。
2. 复用的组件要读懂接口再改：常见错误是 Lab 代码的观测维度/动作范围与你的环境不匹配，
   静默 broadcast 出错误结果。
3. Lab 10 的评估协议是**必备依赖**（课程设计文档明确要求），OOD 变体的构造方式优先与其保持一致。

---

## 4. 最小闭环检查清单

在 Checkpoint 里程碑前，确认以下每一步都能跑通：

- [ ] `env_factory(seed=0)` 能创建环境，`reset` / `step` 接口合规；
- [ ] 一个 baseline policy（哪怕随机策略）能完成 rollout；
- [ ] `model.predict_one` 接口存在（哪怕先返回恒等预测占位）；
- [ ] `run_full_evaluation` 能对你的项目输出完整的 ID vs OOD 表；
- [ ] 每次运行的随机种子固定，结果可复现。

做到以上五点，你的 Checkpoint 就已通过"环境 + 基线跑通"的标准，
之后的全部工作是把每个占位组件换成真组件。
