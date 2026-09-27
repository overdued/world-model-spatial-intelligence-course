# Lab 3 · Tiny RSSM

**中文** | [English](README_EN.md)

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab03_tiny_rssm/notebook.ipynb)

## Goal

在 CPU 上几分钟内从零实现并训练一个最小 RSSM（deterministic `h_t` + stochastic `z_t`），让它在随机 Moving-Ball 世界里做 prior-only 的 multi-step imagination。

## You Will Learn

- RSSM 的四组件：GRU 确定性路径、prior / posterior 对角高斯、decoder；
- reparameterization trick 与两个高斯之间的闭式 KL（全部手写，无黑盒）；
- ELBO 训练目标：reconstruction + β·KL，以及 β 的 trade-off；
- 为什么 deterministic-only 模型在随机未来上退化为模糊平均（有对照实验）；
- 为什么训练用 posterior、imagination 用 prior。

## Concept

真实世界（哪怕一个加了随机扰动的小球）是随机的：同一历史 + 同一动作序列可以对应多个合理未来。点估计模型对像素损失的最优解是条件均值——一张模糊重影。RSSM 把状态拆成"记忆"（GRU hidden state）与"不确定性"（采样的 latent），用 posterior 在训练时看观测、用 KL 把知识蒸馏给 prior，使模型在想象时（无观测可看）也能产出清晰而多样的未来。

## Architecture

```
           训练 (teacher-forced)                      想象 (open-loop)
                                                      
 x_t ──▶ Encoder ──▶ posterior q(z_t|h_t,x_t)          h_k ──▶ prior p(z_k|h_k)
                     │  z_t = μ_q + σ_q·ε                      z_k = μ_p + σ_p·ε
 h_t = GRU([z_{t-1},a_{t-1}], h_{t-1})  ◀── 共享 ──▶  h_{k+1} = GRU([z_k,a_k], h_k)
 prior p(z_t|h_t) ◀── h_t                                │
 KL(q‖p) 蒸馏 prior                                       ▼
 (h_t, z_t) ──▶ Decoder ──▶ x̂_t                    Decoder ──▶ x̂_k
 Loss = Σ BCE(x̂_t, x_t) + β·KL(q‖p)               （全程不看真实帧）
```

## Run

**Local**

```bash
pip install -r requirements.txt
jupyter nbconvert --execute --to notebook --inplace labs/lab03_tiny_rssm/notebook.ipynb
# 或直接打开 notebook 逐格运行（工作目录需为 labs/lab03_tiny_rssm/）
```

**Colab**: 点上方徽章，首格自动检测环境并补装依赖。

## Experiment

Notebook 内置对照实验：与 RSSM 结构完全相同的 deterministic-only baseline（`stochastic=False`，z 取均值、KL 换 MSE），在相同 burn-in + 动作序列上做 15 步 open-loop imagination，并排对比并量化 sharpness 与跨样本 diversity。

## Expected Results

- 训练收敛：recon-BCE（对像素求和）从 ~1000 降到 ~70–90，KL 稳定在 ~15–20 nats（CPU 全程约 3–7 分钟，视机器负载）。
- Posterior 重建清晰；prior 的 one-step 预测大体正确但略模糊。
- Imagination rollout：15 帧内球保持清晰、运动合理，但不必逐像素等于真值（环境随机）。
- 3 次独立想象给出 3 条不同轨迹（diversity > 0）；RSSM 预测的位置 spread 随 horizon 增长（step 1 ≈ 2.4 px → step 15 ≈ 8.3 px），deterministic baseline 恒为 0。
- Baseline 对比：deterministic 只能输出单一"平均轨迹"（清晰、自信，但 step 15 位置误差 ~31 px）；RSSM 单次采样误差相近，但 **best-of-8 降到 ~22 px**——真值落在它给出的分布里。把 8 个 dream 在像素空间平均，则退化为模糊重影（条件均值可视化）。
- 产物：`assets/imagination_grid.png`、`assets/imagination_rollout.gif`、`assets/multi_dreams.png`、`assets/rssm_vs_deterministic.png`。

## Exercises

1. **Latent dimension**：`Z_DIM=4 / 32`，观察 KL、重建与想象质量的变化。
2. **KL weight β**：`beta=0.0`（prior 掉队、想象崩溃）与 `beta=10.0`（posterior collapse、重建变糊）两种失败模式。
3. **Sequence length / noise level**：`SEQ_LEN=4 vs 18`；`NOISE_STD=0` 时 stochastic latent 还有优势吗？

每个练习在 notebook 中都有 hint。

## Advanced Extension

- 把 `z_t` 换成离散 categorical + straight-through 梯度（DreamerV2 的做法，[arXiv:2010.02193](https://arxiv.org/abs/2010.02193)）；
- 加 reward head，在 imagination 里做 CEM 规划 → Lab 4；
- 参考 [dreamerv3-torch](https://github.com/NM512/dreamerv3-torch) 的 RSSM 实现（约 200 行）对比工程技巧（free bits、KL balancing、symlog）。

## Related Modules

- [Scientist 06 · RSSM](/docs/scientist/06-rssm)
- [Scientist 05 · Latent Dynamics](/docs/scientist/05-latent-dynamics)

## Related Papers

- Hafner et al. (2019), *Learning Latent Dynamics for Planning from Pixels* (PlaNet / RSSM). https://arxiv.org/abs/1811.04551
- Hafner et al. (2020), *Dream to Control: Learning Behaviors by Latent Imagination* (Dreamer). https://arxiv.org/abs/1912.01603
- Hafner et al. (2021), *Mastering Atari with Discrete World Models* (DreamerV2). https://arxiv.org/abs/2010.02193

## Common Problems

- **重建全黑/全灰**：检查 decoder 输出是否当 logits 用（训练时不加 sigmoid），以及 `pos_weight` 是否生效。
- **KL → 0 且重建差**：posterior collapse。先检查 BCE 是否误用了对像素的 `mean`（真正 ELBO 应对像素求和，否则 KL 量纲碾压重建项）；再考虑降低 β 或加 free bits。
- **Imagination 第一步就崩**：检查 burn-in 的动作索引——`a_fut` 应从 `a_{BURN-1}` 开始。
- **想象轨迹瞬间跑出画面**：训练步数不够或学习率过大；本任务 600 步、lr=3e-3 是已验证的配置。
