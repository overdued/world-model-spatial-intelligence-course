# Capstone Report: Build Your Own World Model

> 本模板按课程的"统一设计十问"组织，请逐节填空。报告总长 4–8 页（不含 References）。
> 删除所有 `> 提示：` 行后再提交。

---

## 标题页

- **题目**：
- **作者 / 团队**：
- **选题方向**：Navigation / Robot Manipulation / Video Prediction / Dynamic 3D / Game Environment / Spatial Memory / 其他（____）
- **日期**：
- **代码仓库 / Colab 链接**：
- **复现说明**：环境依赖、随机种子、一键运行命令

## Abstract

> 提示：150–250 字。包含：应用领域、四要素的一句话版本、核心方法、主要定量结果（含 OOD）、最主要的失效模式。

（在此填写）

---

## 1. What is the observation?

> 提示：智能体看到什么？给出维度、模态（图像/状态向量/深度…）、噪声特性、观测频率。如果是部分可观测（POMDP），显式说明。

（在此填写）

## 2. What is the latent/world state?

> 提示：模型的内部状态是什么？显式（位置、占据栅格、高斯场）还是隐式（潜向量）？维度是多少？为什么这样选（而不是另一种）？

（在此填写）

## 3. What is the action?

> 提示：动作空间的维度、离散/连续、物理语义、执行频率。

（在此填写）

## 4. What is the transition model?

> 提示：写出显式形式，例如 $p_\theta(s_{t+1} \mid s_t, a_t)$ 的参数化（GRU + Gaussian head / 确定性 MLP / 渲染管线更新规则…），以及训练目标（负对数似然 / MSE / 渲染损失…）。

（在此填写）

## 5. How is memory maintained?

> 提示：状态如何随时间累积与更新？（KF 的均值+协方差？RNN 隐状态？持久地图的占据更新？）什么被保留、什么被遗忘？

（在此填写）

## 6. How is the future predicted?

> 提示：one-step 还是 multi-step？open-loop rollout 如何生成？预测的 horizon 是多少、依据是什么？

（在此填写）

## 7. How is planning/policy performed?

> 提示：MPC/CEM、actor-critic in imagination、显式几何规划（如 A* on occupancy map），还是混合？给出关键超参数（horizon、候选数、迭代次数等）。

（在此填写）

## 8. How is the model evaluated?

> 提示：指标定义（success rate、mean return、prediction error、PSNR/ATE…）、测试分布、随机种子数、置信区间。与哪些 baseline 对比？

（在此填写）

## 9. What happens under OOD?

> 提示：定义你的 OOD 设置（新动力学参数 / 新场景 / 新干扰 / 传感器漂移），给出 ID vs OOD 定量对比表（可用 evaluation_template.py 生成），分析退化幅度与原因。

（在此填写）

## 10. What are the failure cases?

> 提示：至少三个具体失效案例。每个案例：现象（附图/轨迹）、触发条件、根因分析、可能的修复方向。

（在此填写）

---

## System Architecture

> 提示：插入一张系统框图，必须包含 observation → state → transition → prediction → planning/policy → action 的完整回路，并标注各模块的接口（维度、数据类型）。图必须与代码实现一致。

[在此插入 architecture diagram]

## Experiments

### 实验设置

| 项目 | 设置 |
|------|------|
| 环境 / 数据 | |
| 训练预算（步数 / 时长 / 硬件） | |
| 随机种子数 | |
| Baseline | |

### 主要结果

| 方法 | Success Rate ↑ | Mean Return ↑ | 1-step Pred. Error ↓ | H-step Pred. Error ↓ | 其他指标 |
|------|----------------|---------------|----------------------|----------------------|----------|
| 随机策略 | | | — | — | |
| Baseline（____） | | | | | |
| **本文系统** | | | | | |

### ID vs OOD 对比

| 指标 | ID (mean ± std) | OOD (mean ± std) | 退化幅度 |
|------|-----------------|-------------------|----------|
| Success Rate | | | |
| Mean Return | | | |
| 1-step Pred. Error | | | |
| H-step Pred. Error | | | |

> 提示：附训练/评估曲线图与至少一条 multi-step prediction rollout 的可视化（与 ground truth 对比）。

[在此插入 training/evaluation curves]

[在此插入 prediction rollout 可视化]

## OOD & Failure Analysis

> 提示：综合第 9、10 问，这里放完整分析：OOD 退化的定量模式、failure cases 的共性（是否集中于某类状态/动作/观测）、这些结果如何界定系统的安全运行域。

（在此填写）

## Limitations

> 提示：诚实列出系统边界——算力限制导致的简化、评估协议的盲区、未覆盖的场景类型、与理想系统的差距。

（在此填写）

## References

> 提示：列出 3–5 篇以上与本项目直接相关的论文/资源，以及复用的课程 Lab 组件（如 "Lab 4 的 CEM 实现"）。

1.
2.
3.
