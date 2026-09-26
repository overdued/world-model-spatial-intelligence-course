# World Models & Spatial Intelligence

**From Representation to Prediction, Planning and Physical Intelligence**

一门开源课程：从世界表征（Representation）到预测（Prediction）、规划（Planning）与物理智能（Physical Intelligence）。

> 📖 **课程网站（主入口）**：https://overdued.github.io/world-model-spatial-intelligence-course/
>
> 本仓库是课程的内容源。学习请从网站开始，不需要理解仓库目录结构。

![Overview](website/static/img/world-model-overview.svg)

## 这是什么

"World Model" 正在成为连接表示学习、生成模型、强化学习与机器人学的核心概念；"Spatial Intelligence" 是它落地物理世界的关键能力。但目前没有任何一门公开课完整覆盖这条链路。本课程把全球 11 门顶尖高校课程（UPenn、Stanford、CMU、MIT、ETH/UZH、UCSD、Berkeley、Cornell、TUM、Columbia、Harvard）的公开材料重新组织为**两条可立即开始的学习路线**，配交互式 roadmap、统一模块模板和可运行的 Colab 实验。

## Roadmap

```
Observation → World State → Representation → Dynamics → Prediction → Planning → Action
```

交互式完整路线图（节点可点击进模块）：[课程网站 Roadmap](https://overdued.github.io/world-model-spatial-intelligence-course/roadmap)

## Learning Tracks

| Track | 路线 | 适合 |
|---|---|---|
| 🧩 **Foundations** | 数学 / PyTorch / CV / RL 地基，按需回查 | 所有人 |
| 🧑‍🔬 **World Model Scientist** | POMDP → SSM → RSSM → Dreamer → Planning → Video WM → Evaluation | 想造世界模型的研究者 |
| 👷 **Spatial & Embodied Engineer** | Geometry → Depth/Point Cloud → NeRF/3DGS → SLAM/VIO → Navigation → VLA | 想造空间智能系统的工程师 |

每个模块统一模板：Why this matters → Visual Intuition → Core Idea → Key Concepts → Core Equations → University Lecture（溯源到具体大学 lecture）→ Papers（Must Read / Recommended / Optional）→ Hands-on → Check Your Understanding → Takeaway → Next Module。

## Labs

| Lab | 内容 | Colab |
|---|---|---|
| Lab 0 | Build a Tiny World（state/observation/action/transition/reward + rollout 动画） | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab00_tiny_world/notebook.ipynb) |
| Lab 1 | Kalman Filter（从零实现 predict/update + 不确定性可视化 + 噪声实验） | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab01_kalman_filter/notebook.ipynb) |
| Lab 2 | Latent Dynamics（PyTorch：image→encoder→dynamics→decoder，rollout 与误差累积） | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab02_latent_dynamics/notebook.ipynb) |

Lab 3–10（RSSM / MPC / NeRF·3DGS / 4D / Video WM / Robot Navigation / WM+Policy / OOD 评估）开发中，设计见 [`synthesis/proposed_course_v0_1.md`](synthesis/proposed_course_v0_1.md)。

## University Sources

课程模块中每个知识点都溯源到大学 lecture。完整调研（11 门课程的索引、对比、公开度、链接状态）：

- [COURSE_INDEX.md](COURSE_INDEX.md) · [COURSE_COMPARISON.md](COURSE_COMPARISON.md) · [MATERIAL_STATUS.md](MATERIAL_STATUS.md) · [LICENSES.md](LICENSES.md)
- 逐课资料：`courses/<course_id>/`（UPenn CIS 6280、Stanford CS231A、CMU 16-825、MIT VNAV、ETH/UZH VAMR、UCSD、Berkeley、Cornell、TUM、Columbia、Harvard）
- 课程体系与主题分析：`synthesis/`

> 受版权/许可限制，课程 PDF 不上传本仓库，仅保留本地研究副本；原始官方链接逐条记录在 `courses/<course_id>/links.md`。

## Repository Structure

```
├── website/      ← Docusaurus 课程网站（主入口，GitHub Pages 自动部署）
├── labs/         ← 可运行实验（Colab 兼容）
├── courses/      ← 研究档案：11 门大学课程资料索引与本地材料
├── synthesis/    ← 研究档案：课程体系分析与课程设计 V0.1
├── metadata/     ← 研究档案：courses.json / courses.csv（脚本自动生成）
└── scripts/      ← 下载 / 链接检查 / 元数据 / 索引维护脚本
```

## Citation

```bibtex
@misc{wmsi-course,
  title  = {World Models \& Spatial Intelligence: An Open Course},
  author = {overdued},
  year   = {2026},
  url    = {https://github.com/overdued/world-model-spatial-intelligence-course}
}
```

## License

- 课程内容（website/docs、synthesis）：**CC BY 4.0**
- 代码（labs、scripts、website/src）：**MIT**
- 第三方大学课程材料：版权归原作者/高校所有（见 [LICENSES.md](LICENSES.md)），本仓库仅索引链接、不再分发

## Acknowledgements

所有被收录课程的教师与助教团队；模板灵感来自 [mlabonne/llm-course](https://github.com/mlabonne/llm-course)（Apache-2.0）。
