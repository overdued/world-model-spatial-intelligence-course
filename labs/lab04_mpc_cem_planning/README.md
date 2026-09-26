# Lab 4 · MPC / CEM Planning

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab04_mpc_cem_planning/notebook.ipynb)

## Goal

在 Lab 0 的 Moving-Ball World 上,用 world model 做**决策**:手写两个无梯度规划器 —— Random Shooting **MPC** 与 **CEM**,并对比 perfect model(解析动力学)与 learned model(notebook 内一分钟训出的 MLP)对 planning 性能的影响。全程 CPU,数分钟跑完。

## You Will Learn

- Model Predictive Control 的 receding-horizon 决策循环:sample → rollout → rank → act → replan;
- Random Shooting 与 CEM(elite 选择 + 高斯分布迭代更新)的完整实现,无梯度、模型无需可微;
- 如何训练一个 `Δs` residual 形式的 dynamics model 并接入 planner(换模型不改规划器);
- 定量刻画 **model error → planning failure**:回报差距、predicted-vs-actual 轨迹分离、horizon 剪刀差。

## Concept

World model 让试错发生在"想象"中:在当前状态采样 N 条长度为 H 的候选动作序列,用 model 批量 rollout 得到 predicted return,执行最优序列的第一个动作,下一步用真实状态重新规划。规划器本身不学习任何东西 —— 全部智能来自 model 的精度。

## Architecture

```
                 ┌─────────────────────────── replan every step ───────────────────────────┐
                 │                                                                          │
 current state ──┼─► sample N candidate action sequences (uniform / Gaussian for CEM)      │
   s_t, goal     │        │                                                                │
                 │        ▼                                                                │
                 │   world model rollout:  ŝ_{k+1} = f(ŝ_k, a_k)   (perfect or learned)    │
                 │        │                                                                │
                 │        ▼                                                                │
                 │   rank by Σ predicted reward   [CEM: elites → update μ, σ → iterate]    │
                 │        │                                                                │
                 │        ▼                                                                │
                 └────  execute a*_t in the REAL environment  ──►  observe s_{t+1} ────────┘
```

## Run

**Local**

```bash
pip install -r requirements.txt
jupyter nbconvert --execute --to notebook --inplace notebook.ipynb
```

**Colab**

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab04_mpc_cem_planning/notebook.ipynb)

## Experiment

1. **四 agent 对比**(8 个相同初始条件 × 60 步):Random vs MPC(perfect)vs MPC(learned)vs CEM(learned)—— 回报表 + reward 曲线 + 轨迹对比图;
2. **Open-loop vs Closed-loop**:t=0 规划 40 步后闭眼执行到底,对比 perfect / learned / corrupted(friction 故意写错)三种模型在 open-loop 与 closed-loop 下的"实际 vs 模型承诺"最终距离 —— 直接展示 "model error → planning failure" 与 receding-horizon 的校正作用;
3. **Planning horizon 扫描**:`H ∈ {1, 2, 4, 8, 16, 32}`(N 固定 200),perfect 与 learned model 各扫一遍,观察 horizon 与采样预算的 trade-off。

## Expected Results

- MPC (perfect model) 显著优于 Random(回报约 -5.7 vs -29),8/8 episode 在 ~13 步内到达目标;
- MPC (learned model) 在 closed-loop 下几乎追平 perfect —— model error 被 replanning 校正;
- CEM (learned) 与 MPC (learned) 相当或略好(同样的模型,更好的优化器);
- Open-loop 检查:learned model 的 position error 从 1 步的 ~5e-4 累积到 40 步的 ~0.9;
- Open vs closed:perfect+open 的 actual = promised;corrupted+open 实际 ~0.31 却承诺 ~0.15(失败);同一个 corrupted model 改 closed-loop 后立刻回落到 ~0.01,与 perfect 持平;
- Horizon 扫描:短 H 已足够;H 增大时两种 model 都因固定采样预算被稀释而缓慢退化,learned 并未额外崩盘(closed-loop 保护)。

## Exercises

- ✏️ **改 horizon**:notebook Section 8 已给出扫描;试着把 `H_PLAN` 改到 32 以上,learned model 会发生什么?
- ✏️ **改候选数**:把 `N_SAMPLES` 从 256 降到 32(Exercise 1),哪个 agent 退化最严重?
- ✏️ **噪声模型**:在 `learned_step` 输出上加高斯噪声(Exercise 2),观察 model uncertainty 对 planning 的侵蚀 —— 这正是 PETS 用 probabilistic ensemble 要解决的问题。

## Advanced Extension

- **MPPI**(Model Predictive Path Integral):把 CEM 的 elite-mean 更新换成 reward 加权的 soft-max 更新 `μ ← Σ wᵢ aᵢ, wᵢ ∝ exp(λ·Rᵢ)`,采样效率更高;
- **Latent-space planning**:状态换成 Lab 3 RSSM 的 latent `z_t`,reward 也由 learned reward head 预测,本 Lab 的 CEM 一行不改即可在 latent 中规划 —— 这基本就是 **PlaNet**;
- 再加 learned value function(对 H 步之后的回报做 bootstrap)与 policy prior(指导采样分布),就走到了 **TD-MPC / Dreamer**。

## Related Modules

- [/docs/scientist/09-planning-with-world-models](/docs/scientist/09-planning-with-world-models)

## Related Papers

- Hansen et al. (2022), *Temporal Difference Learning for Model Predictive Control* (TD-MPC). https://arxiv.org/abs/2203.04955
- Chua et al. (2018), *Deep Reinforcement Learning in a Handful of Trials using Probabilistic Dynamics Models* (PETS). https://arxiv.org/abs/1805.12114
- Hafner et al. (2019), *Learning Latent Dynamics for Planning from Pixels* (PlaNet / RSSM + CEM). https://arxiv.org/abs/1811.04551
- Williams et al. (2017), *Information Theoretic MPC for Model-Based Reinforcement Learning* (MPPI). https://arxiv.org/abs/1707.02342

## Common Problems

- **CEM 收敛后动作抖成一片**:`elite_frac` 太大或 `init_std` 太大,分布没收缩;把 `n_iter` 提到 5–6 或减小 `init_std`。
- **MPC (learned) 比 Random 还差**:检查训练数据是否覆盖了足够的状态区域;先看 Section 5.1 的 open-loop 误差,模型本身不准时 planning 无从谈起。
- **小球在目标附近反复冲过头**:这是模型误差 + 短视的典型症状,增大 `N_SAMPLES` 或换 CEM 通常能缓解。
- **Colab 上慢**:本 Lab 纯 CPU 即可;若用 GPU runtime 反而可能因小 batch 频繁拷贝而更慢,建议保持 CPU。
