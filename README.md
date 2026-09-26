# World Models & Spatial Intelligence Course

**From Representation to Prediction, Planning and Physical Intelligence**

一个系统化的 **World Models + Spatial Intelligence + Embodied AI** 本地知识库，以及未来开源课程的基础仓库。灵感与模板参考 [mlabonne/llm-course](https://github.com/mlabonne/llm-course)。

> 本仓库目前处于 **资料库 + 课程设计 V0.1** 阶段：收录全球 11 门顶尖高校相关课程的索引、元数据与公开材料（本地），并完成我们自己的课程设计草案 [`synthesis/proposed_course_v0_1.md`](synthesis/proposed_course_v0_1.md)。

## Motivation

"World Model" 正在成为连接表示学习、生成模型、强化学习与机器人学的核心概念；而 "Spatial Intelligence" 是它落地物理世界的关键能力。但目前没有任何一门公开课完整覆盖这条链路——它们分散在 CV、robotics、ML 各系的课程里。本项目做两件事：

1. **收集与整理**：系统化归档全球高校公开的相关课程资料（syllabus、slides、assignments、labs、code），统一元数据与链接索引；
2. **设计与再造**：在这些课程的基础上设计我们自己的开源课程 *World Models & Spatial Intelligence*。

## What is a World Model?

世界模型是智能体对环境内部状态的**可预测表征**：给定当前状态（或观测历史）与动作，预测未来状态/观测与回报。它涵盖 latent state 表示（RSSM、JEPA）、动力学预测（SSM、video prediction）、以及用模型做规划与决策（MPC、Dreamer、TD-MPC）。

## What is Spatial Intelligence?

空间智能是感知、表示、推理并作用于 3D/4D 物理世界的能力：从多视图几何、深度、点云、NeRF/3DGS 重建，到 SLAM/VIO 的空间记忆与定位，再到导航、操作与人-空间交互。它是 world model 的"空间骨架"。

## Course Roadmap

```
Part 0  Prerequisites
   │
Part I  Representing the World  ── 观测/状态/潜变量/几何/NeRF/3DGS
   │
Part II Predicting the World    ── 动力学/RSSM/Dreamer/扩散/视频世界模型/4D
   │
Part III Acting in the World    ── MPC/CEM/MPPI/潜空间规划/MBRL/VLA
   │
Part IV Spatial Intelligence    ── SLAM/VIO/空间记忆/动态场景/Affordance/导航操作
   │
Part V  Agents                  ── LLM as World Model/推理/长期记忆
   │
Part VI Reliability             ── OOD/不确定性/漂移/鲁棒性/评估
   │
Capstone: Build Your Own World Model
```

## Three Learning Tracks

| Track | 目标 | 受众 |
|---|---|---|
| 🧩 **World Model Fundamentals** | 按需回查的地基：数学、PyTorch、CV、RL | 所有学习者 |
| 🧑‍🔬 **World Model Scientist** | 造模型：表征 → 动力学 → 生成 → 评估 | 研究者 |
| 👷 **Spatial & Embodied Engineer** | 造系统：3D 感知 → SLAM → 规划 → 机器人部署 | 工程师 |

（分轨设计借鉴 llm-course 的 Fundamentals / Scientist / Engineer 结构。）

## Curriculum

完整课程树（Part 0–VI 全部小节、知识点与参考来源）见 [`synthesis/proposed_course_v0_1.md`](synthesis/proposed_course_v0_1.md)。

## Hands-on Labs

11 个实验 + 1 个 Capstone，全部带 Objective / Framework / Dataset / GPU 需求 / Expected Output / 参考课程与论文：

- Lab 0 Build Your Own Environment
- Lab 1 Kalman Filter / State Space Model
- Lab 2 Learn a Latent Dynamics Model
- Lab 3 Build a Tiny RSSM World Model
- Lab 4 MPC / CEM Planning
- Lab 5 NeRF / Gaussian Splatting World Representation
- Lab 6 Dynamic 3D / 4D World Representation
- Lab 7 Video World Model
- Lab 8 World Model for Robot Navigation
- Lab 9 World Model + Policy
- Lab 10 OOD / Memory / Drift Evaluation
- **Capstone: Build Your Own World Model**

详细设计见 [`synthesis/proposed_course_v0_1.md`](synthesis/proposed_course_v0_1.md)。

## University Courses We Reference

| 学校 | 课程 | 主要贡献 | 公开程度 |
|---|---|---|---|
| UPenn | [CIS 6280: World Models](https://jiataogu.me/cis6280-world-models/) | 首门 World Models 专题课；Representation/Prediction/Interaction 三主线蓝本 | High（slides/讲义公开，作业需登录） |
| Stanford | [CS231A](https://web.stanford.edu/class/cs231a/) | 3D 几何感知与重建基础；notes+作业全公开 | Very High |
| CMU | [16-825 Learning for 3D Vision](https://learning3d.github.io/) | Learning-based 3D 主线；6 个 GitHub 公开作业是实训标杆 | Very High |
| MIT | [16.485 VNAV](https://vnav.mit.edu/) | VIO/SLAM/流形优化数学地基 + 真实无人机 labs（CC BY-NC-SA） | Very High |
| ETH/UZH | [VAMR](https://rpg.ifi.uzh.ch/teaching.html) | 多视图几何手写实现；11 次公开习题组装成 VO 系统 | Very High |
| UCSD | [ML Meets Geometry](https://haosulab.github.io/ml-meets-geometry-WI22/) | 几何+学习的 3D 理解；part-based/affordance 视角 | Low（作业在 Piazza） |
| Berkeley | [CS294-173 Learning for 3D Vision](https://sites.google.com/berkeley.edu/cs294-173/) | seminar 制神经 3D 表征/渲染/生成 | Medium |
| Cornell | [CS6672 3D Vision](https://www.cs.cornell.edu/courses/cs6672/2024fa/) | NeRF/3DGS/DUSt3R/DreamFusion/UniSim 研讨 | Low（slides 不公开） |
| TUM | [Deep Learning for Spatial AI](https://cvg.vision.cs.tum.edu/teaching/ss2026/dl4sai) | 现代 Spatial AI：VGGT/扩散 3D 先验/3D 跟踪 | Medium（项目制） |
| Columbia | [Spatial AI](https://www.arch.columbia.edu/courses/12445-5933) | 建筑/计算设计视角的空间智能（旁支对照） | Medium |
| Harvard GSD | [Spatial Intelligence](https://www.gsd.harvard.edu/course/spatial-intelligence-designing-the-future-of-work-spring-2026/) | 人本/智能环境视角的空间智能（旁支对照） | Very Low |

逐课详细索引见 [`COURSE_INDEX.md`](COURSE_INDEX.md)；对比矩阵见 [`COURSE_COMPARISON.md`](COURSE_COMPARISON.md)。

## Papers

各主题代表论文已按 25 + 25 个主题归档在：

- [`synthesis/world_model_topics.md`](synthesis/world_model_topics.md)
- [`synthesis/spatial_intelligence_topics.md`](synthesis/spatial_intelligence_topics.md)

## Resources

- 课程体系关系分析：[`synthesis/curriculum_analysis.md`](synthesis/curriculum_analysis.md)
- 作业/实验设计分析：[`synthesis/assignment_analysis.md`](synthesis/assignment_analysis.md)
- llm-course 模板设计分析：[`synthesis/course_design_lessons.md`](synthesis/course_design_lessons.md)
- 材料下载状态：[`MATERIAL_STATUS.md`](MATERIAL_STATUS.md)
- 许可证说明：[`LICENSES.md`](LICENSES.md)

## Repository Structure

```
world-model-spatial-intelligence-course/
├── README.md                  ← 本文件
├── COURSE_INDEX.md            ← 逐课索引
├── COURSE_COMPARISON.md       ← 课程对比矩阵
├── MATERIAL_STATUS.md         ← 材料下载状态
├── LICENSES.md                ← 许可证说明
├── metadata/                  ← courses.json / courses.csv / sources.md
├── courses/                   ← 每门课一个目录（README + metadata + links + 本地材料）
├── references/                ← llm-course 参考克隆 / papers
├── synthesis/                 ← 分析与课程设计文档
└── scripts/                   ← 下载 / 链接检查 / 元数据 / 索引脚本
```

**重要**：受版权与许可证限制，课程 PDF 等下载材料**不上传本仓库**（见 `.gitignore`），仅保留在本地；每门课的原始官方链接与获取状态记录在 `courses/<course>/links.md`。

## License

- 本仓库原创内容（README、synthesis/ 文档、scripts/）建议采用 **CC BY 4.0**（文档）+ **MIT**（代码）。
- 第三方课程材料版权归原作者/高校所有，各自许可证见 [`LICENSES.md`](LICENSES.md)；本仓库只索引链接，不再分发。

## Acknowledgements

- 所有被收录课程的教师与助教团队（详见各课程 README）
- [mlabonne/llm-course](https://github.com/mlabonne/llm-course)（Apache-2.0）——开源课程模板
