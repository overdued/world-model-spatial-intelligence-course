# 3D Vision (CS 6672)

## University
Cornell University（康奈尔大学）

## Instructor
- Instructor: **Wei-Chiu Ma**（个人主页：https://cs.cornell.edu/~weichiu ）
- TA: **Rundong Luo**（个人主页：https://red-fairy.github.io/ ）
- Guest lecture: Bharath Hariharan（Structure from Motion, https://www.cs.cornell.edu/~bharathh/ ）

## Semester / Year
Fall 2024

## Official URL
- 主页: https://www.cs.cornell.edu/courses/cs6672/2024fa/
- Schedule: https://www.cs.cornell.edu/courses/cs6672/2024fa/schedule.html

## Course Description
面向 PhD 的高阶 3D 视觉课程。课程研究从感知输入中推断、建模与利用 3D 信息的基础与最新进展，及其在自动驾驶、移动机器人、2D/3D 生成、机器人操作等领域的应用。主题包括 image formation、multi-view geometry、(neural) 3D representations、learning-based 3D algorithms、neural rendering、generative models 等。课程形式为讲授 + role-playing 论文研讨（经典与现代论文）+ 小组 final project，强调培养阅读、展示与论文写作等科研能力。

## Major Topics
（来自官方 Schedule 的真实 lecture/讨论主题）
- Getting situated: Introduction
- Fundamentals: Image formation, Epipolar geometry
- Correspondence, Optical flow, Stereo
- Structure from Motion (guest: Bharath Hariharan)
- 3D Representations: Mesh, Point clouds, SDFs
- 3D perception, (Neural) Rendering
- Differentiable rendering, Implicit neural nets
- Alignment: Localization, 6-DoF Pose estimation, SLAM
- Data & Evaluation: Images, Videos, 3D Scans, Handcrafted assets, Metrics, Human alignment
- Novel view synthesis: Image-based rendering, LDI, MPI, NeRF
- Learning-based 3D reconstruction: Single image depth estimation, Deep Multi-view stereo
- Generative models: 3D Generation, Diffusion, text-to-3D
- Applications: Self-driving
- 论文研讨（role-playing paper discussion）: BARF, DeepSDF, Camera as Rays, DROID-SLAM, SMPL, 3D Gaussian Splatting, DUSt3R, DreamFusion, UniSim

## Public Materials

| Material | Status | Local Path | Original URL |
|---|---|---|---|
| Course homepage (HTML) | Public-Link-Only | — | https://www.cs.cornell.edu/courses/cs6672/2024fa/ |
| Schedule (HTML, 含阅读链接) | Public-Link-Only | — | https://www.cs.cornell.edu/courses/cs6672/2024fa/schedule.html |
| Syllabus 页面 | Not-Found | — | （导航栏 Syllabus 链接为空 href） |
| Lecture slides | Not-Public | — | （官网未发布任何 slides） |
| Reading: BARF (ICCV 2021) | Downloaded | readings/reading_barf_bundle_adjusting_nerf.pdf | https://arxiv.org/pdf/2104.06405 |
| Reading: DeepSDF (CVPR 2019) | Downloaded | readings/reading_deepsdf.pdf | https://arxiv.org/pdf/1901.05103 |
| Reading: Cameras as Rays (ICLR 2024) | Downloaded | readings/reading_camera_as_rays.pdf | https://arxiv.org/pdf/2309.07122 |
| Reading: DROID-SLAM (NeurIPS 2021) | Downloaded | readings/reading_droid_slam.pdf | https://arxiv.org/pdf/2108.10869 |
| Reading: SMPL (SIGGRAPH Asia 2015) | Downloaded | readings/reading_smpl_2015.pdf | https://files.is.tue.mpg.de/black/papers/SMPL2015.pdf |
| Reading: 3D Gaussian Splatting (SIGGRAPH 2023) | Downloaded | readings/reading_3d_gaussian_splatting.pdf | https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/3d_gaussian_splatting_low.pdf |
| Reading: DUSt3R (CVPR 2024) | Downloaded | readings/reading_dust3r.pdf | https://arxiv.org/pdf/2312.14132 |
| Reading: DreamFusion (ICLR 2023) | Downloaded | readings/reading_dreamfusion.pdf | https://arxiv.org/pdf/2209.14988 |
| Reading: UniSim (CVPR 2024) | Downloaded | readings/reading_unisim.pdf | https://arxiv.org/pdf/2402.14817 |
| Ed Discussions（课程讨论板） | Login-Required | — | https://edstem.org/us/courses/62665/discussion |
| Canvas | Login-Required | — | （导航栏 Canvas 链接为空 href，需 Cornell 账号） |

说明：
- 官网 **没有发布任何 lecture slides / notes / assignments / labs / videos**，schedule 页面仅给出每次课的主题与论文研讨的阅读链接。这是本课程公开度低的主要原因。
- Cameras as Rays 论文在 schedule 页面无超链接（仅文字），此处补充官方 arXiv 链接 2309.07122。
- `syllabus/`、`lectures/`、`assignments/`、`labs/`、`code/`、`notebooks/`、`projects/` 子目录均留空（无公开资料）。

## Course Structure
15 周，每周 2 次课（周二/周四），整体呈"讲授 + 论文研讨"交替结构：
- **W1–W2 基础几何**: Introduction → image formation / epipolar geometry → correspondence / optical flow / stereo → SfM（客座）
- **W3–W4 表示与渲染**: role-playing 论文讨论演示（BARF）→ mesh/point cloud/SDF → 3D perception 与 neural rendering → differentiable rendering / implicit neural nets
- **W5–W7 对齐、数据与评测**: DeepSDF、Camera as Rays 讨论 → localization / 6DoF pose / SLAM（DROID-SLAM）→ 数据与评测（SMPL 讨论）
- **W8–W10 新视角合成与重建**: 客座讲座 → IBR/LDI/MPI/NeRF（3DGS 讨论）→ single-image depth 与 deep MVS（DUSt3R 讨论）
- **W11–W13 生成模型与应用**: 3D generation / diffusion / text-to-3D（DreamFusion）→ self-driving（UniSim 讨论）
- **W14–W15**: 客座讲座、final project 展示

周二通常是教师讲授主线内容，周四为 role-playing 论文研讨（学生扮演作者/审稿人等角色，参考 Alec Jacobson / Colin Raffel 的 seminar 形式）。

## Assignments
无传统编程作业公开发布。Schedule 中仅有两个项目里程碑节点：
- Project Idea Due（W5, 09/26）
- Project Proposal Due（W9, 10/28）

作业/项目细节很可能通过 Canvas/Ed 发布（登录可见），公网不可见。

## Labs
无公开 labs（`labs/` 目录留空）。

## Project
小组 final project 是课程核心产出：W5 提交 idea、W9 提交 proposal、W12 check-in（office hour）、W15 学生展示。课程目标之一是"写出一篇可被 workshop/conference 接收的技术论文"，项目即按此标准设计。无公开项目模板或代码。

## License
- 课程网页本身未标注任何许可证 → `license_status: unknown`（仅保留本地研究副本，不重新分发）。
- 下载的阅读论文为各作者/出版方的公开论文副本（arXiv 作者自存档、INRIA 官方 preprint、MPI SMPL 论文页），版权归原文作者/出版方所有，仅作本地研究使用，不重新分发。

## Relevance to World Models
**High**。DUSt3R（从图像对直接回归 3D pointmap，是学习式世界几何先验的代表）、DreamFusion（score distillation 把 2D 扩散模型作为 3D 生成的先验）、UniSim（neural closed-loop sensor simulator，本质就是自动驾驶场景的可交互世界模型）三篇研讨论文直接对应世界模型主线；NeRF/3DGS 是可微分世界表征的基础。

## Relevance to Spatial Intelligence
**Very High**。课程覆盖空间智能核心栈：multi-view geometry、SfM、3D representations（mesh/point/SDF/implicit）、localization 与 6DoF pose、SLAM、单目深度与 MVS 重建、novel view synthesis。是本知识库中 3D 空间理解方向最完整的 PhD 级课程之一。

## Relevance to Embodied AI
**Medium**。SLAM、localization、self-driving 与 UniSim 闭环仿真与具身智能强相关；但课程没有机器人操作/导航实验，无实体 robot 环节，具身相关性主要通过自动驾驶应用与传感器仿真体现。

## What We Can Learn from This Course
1. **Role-playing 论文研讨形式**：每周一篇里程碑论文（BARF→DeepSDF→DROID-SLAM→3DGS→DUSt3R→DreamFusion→UniSim），学生角色扮演讨论，适合借鉴到开源课程的研讨环节设计。
2. **论文选题即 3D 视觉近 5 年主线**：表示（SDF）→ 姿态/SLAM（BARF、Camera as Rays、DROID-SLAM）→ 人体模型（SMPL）→ 渲染（3DGS）→ 重建（DUSt3R）→ 生成（DreamFusion）→ 仿真（UniSim），可作为知识库的论文 backbone。
3. **教学结构**：周二建立知识体系（几何→表示→渲染→对齐→数据→重建→生成→应用），周四用一篇代表作落地，最后用会议论文标准的 final project 收尾，培养完整科研闭环。
4. **局限**：slides、作业、视频均不公开，公开价值主要在 schedule 的选题脉络与阅读清单。
