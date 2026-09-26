# 16-825 Learning for 3D Vision

## University
Carnegie Mellon University (CMU), Robotics Institute / School of Computer Science

## Instructor
Shubham Tulsiani（Assistant Professor, CMU RI；主页 https://shubhtuls.github.io ）
2026 秋季学期助教：Haochen Zhang、Qitao Zhao、Joel Julin 等（见官网 Course Staff）

## Semester / Year
Fall 2026（当前学期，进行中）。历史公开学期：Spring 2022（课号 16-889）、Spring 2023、Spring 2024、Spring 2025、Fall 2025。

## Official URL
- 主页（Fall 2026）：https://learning3d.github.io/
- Schedule：https://learning3d.github.io/schedule.html
- Assignments：https://learning3d.github.io/assignments.html
- 历史学期：https://learning3d.github.io/spring22/ 、/spring23/ 、/spring24/ 、/spring25/ 、/fall25/

## Course Description
官方描述：任何自主智能体都必须在 3D 世界中感知与行动，推断、建模与利用 3D 表示是 AI 的核心问题，应用涵盖机器人操作、自动驾驶、VR、图像编辑等。本课程探索 3D 视觉与（深度）学习方法的交汇，覆盖显式/隐式/神经 3D 表示、可微渲染、单视图 3D 预测（物体/场景/人）、多视图 3D 推断（辐射场、多平面图像、隐式曲面）、生成式 3D 模型、形状抽象、网格与点云处理等。课程为 lecture 制，成绩主要由作业和期末项目决定；先修要求：良好的编程能力、计算机视觉基础（成像、射线光学）、机器学习基础（优化、神经网络）。

## Major Topics
（取自 Fall 2026 schedule 的真实 lecture 标题）
1. Introduction / Overview
2. 3D Representations I & II（显式/隐式/神经表示及相互转换）
3. Image Formation（相机模型）+ PyTorch3D Tutorial
4. Single-view 3D: Depth（单目深度，含 Marigold/Depth Anything 类方法）
5. Single-view 3D: Objects（Occupancy Networks、AtlasNet 等）
6. Single-view 3D: Scenes
7. Single-view 3D: Humans and Animals（SMPL、手部、DOVE）
8. Volume Rendering（体渲染推导）
9. Neural Radiance Fields（NeRF）
10. Neural Implicit Rendering（NeuS、VolSDF、IDR 等隐式曲面）
11. Differentiable Primitive Rendering（Meshes、3D Gaussian Splatting）
12. Relightable 3D Representations（NeRS、PhySG）
13. Dynamic 3D Representations（Nerfies、Neural Scene Flow Fields）
14. Multi-view Transformers: View Synthesis（pixelNeRF、SRT、LVSM、TokenGS）
15. Multi-view Transformers: Reconstruction（VGGT、Depth Anything 3、π³）
16. Generative 3D Modeling（3D-GAN、AutoSDF、pi-GAN）
17. Single-view 3D: A generative approach（Trellis、SAM3D）
18. Processing Point Clouds I/II（PointNet、Point Transformer、VoteNet、PointPillars）
19. Processing Meshes（SyncSpecCNN、MeshCNN）
20. Guest Lectures + Poster Presentations

## Public Materials

| Material | Status | Local Path | Original URL |
|---|---|---|---|
| 课程主页 / Schedule / Assignments 页面 | Public-Link-Only | —（在线 HTML） | https://learning3d.github.io/ |
| Fall 2026 Lecture slides L01–L10（11 份 PDF，Dropbox） | Public-Link-Only | 未下载（Dropbox 在本网络被连接重置，见 logs/download.log） | https://learning3d.github.io/schedule.html |
| Fall 2025 Lecture slides L01–L24（24 份 PDF，Dropbox，含 3DGS/多视图 Transformer/生成式 3D） | Public-Link-Only | 未下载（同上） | https://learning3d.github.io/fall25/schedule.html |
| Spring 2022/2023/2024/2025 slides（每学期 ~25 份 PDF，Dropbox） | Public-Link-Only | 未下载（同上） | https://learning3d.github.io/spring23/pages/schedule.html 等 |
| Assignment 0（网页提交流程练习） | Downloaded | assignments/assignment0/ | https://github.com/learning3d/assignment0 |
| Assignment 1（PyTorch3D 渲染基础） | Downloaded | assignments/assignment1/ | https://github.com/learning3d/assignment1 |
| Assignment 2（Single View to 3D） | Downloaded | assignments/assignment2/ | https://github.com/learning3d/assignment2 |
| Assignment 3（NeRF / VolSDF 神经体渲染与曲面渲染） | Downloaded | assignments/assignment3/ | https://github.com/learning3d/assignment3 |
| Assignment 4（3D Gaussian Splatting + SDS 扩散引导优化） | Downloaded | assignments/assignment4/ | https://github.com/learning3d/assignment4 |
| Assignment 5（PointNet 点云分类/分割） | Downloaded | assignments/assignment5/ | https://github.com/learning3d/assignment5 |
| 作业数据集（R2N2/ShapeNet、NeRF materials、点云数据，HuggingFace） | Public-Link-Only | 未下载（体积 7.3G–48G，超出本地副本策略） | https://huggingface.co/datasets/learning3dvision/* |
| Piazza 讨论版 | Login-Required | — | https://piazza.com/cmu/fall2026/16825a/home |
| Canvas（代码提交） | Login-Required | — | https://canvas.cmu.edu/ |
| 作业提交说明 hw0.html | Public-Link-Only | — | https://learning3d.github.io/hw0.html |
| 官方 lecture 视频 | Not-Found | — | 官网未公开视频链接（Spring 2022 仅有 Zoom 会议室链接） |

> 说明：所有 lecture slides 均为 Dropbox 公开链接（无需登录），但本次采集时 Dropbox 域名在当前网络环境下 TLS 连接被重置（curl 返回 000），24 次下载尝试全部失败并已记录日志。links.md 保留了全部原始 URL，在网络可达环境下可直接批量下载（URL 中 `dl=0` 改为 `dl=1` 即直链）。

## Course Structure
16 周、26 次 lecture，三条主线递进：
1. **第 1–4 周：基础** —— 3D 表示（mesh/point cloud/voxel/隐式）、相机成像、PyTorch3D 工具链；
2. **第 3–8 周：单视图与神经渲染** —— 单视图深度/物体/场景/人体重建 → 体渲染 → NeRF → 神经隐式曲面（NeuS/VolSDF）→ 可微图元渲染（soft rasterizer、3D Gaussian Splatting）→ 可重光照表示 → 动态 3D；
3. **第 9–14 周：多视图 Transformer 与生成式 3D** —— 多视图 view synthesis（pixelNeRF/SRT/LVSM）、几何重建 Transformer（VGGT、Depth Anything 3、π³）、生成式 3D（GAN/diffusion、Trellis、SAM3D）、点云处理（PointNet/检测）、网格处理；
4. **第 15–16 周**：Guest lectures + 期末项目 poster 展示。
作业节奏：每 2 周一个大作业（A0–A5），第 4 周选题、第 7 周交 proposal、期末交 report。

## Assignments
共 6 个作业（A0–A5），全部公开在 GitHub（github.com/learning3d/assignment0–5），本学期持续更新。设计方式：每个作业一个独立 repo，含 starter code、`requirements.txt`、详细 README（按小题给分），学生须提交代码 zip（Canvas）+ 自建结果网页（AFS，含图文/GIF 可视化）。

| 作业 | 主题 | 训练什么模型 | 框架/数据 | GPU 需求 |
|---|---|---|---|---|
| A0 | 网页提交流程练习（ChatGPT/图片/GIF 上传） | 无 | 无 | 无 |
| A1 | Rendering Basics with PyTorch3D（相机、mesh 操作、重纹理、体素/点云/mesh 渲染） | 无训练，渲染与几何构造 | PyTorch3D，cow mesh | CPU 可跑，GPU 可选（CUDA≥11.6） |
| A2 | Single View to 3D | 训练 ResNet18 编码 + 解码器回归 voxel/point cloud/mesh 三种表示；手写 BCE/Chamfer/smoothness loss（不许用 PyTorch3D 的 chamfer） | R2N2 ShapeNet 子集（HF，单类 7.3G / 三类 48G）；提供预提取 ResNet18 特征以降低 GPU 需求，支持 CPU 训练 | 推荐 GPU，可 CPU 降级 |
| A3 | Neural Volume & Surface Rendering | 手写可微体渲染管线（ray sampling、stratified sampler、EA 体渲染），优化隐式体积、训练 NeRF；sphere tracing + 神经 SDF + VolSDF | 自带 data/ + HF nerf_materials；基于 PyTorch3D camera | 需要 GPU（体渲染显存敏感，按 ray 子采样） |
| A4 | 3D Gaussian Splatting + Diffusion-guided Optimization | Q1：纯 PyTorch 实现简化版 3DGS 光栅化器（投影、排序、alpha blending），渲染官方预训练高斯并训练自有场景；Q2：实现 SDS loss 做图像/网格纹理/NeRF 优化 | 预训练 3DGS 资产；Stable Diffusion（SDS） | 明确需要 GPU：Q1 ~6GB，Q1 训练 ~15.5GB 显存；参考计时基于 A5000 24GB |
| A5 | PointNet 点云分类与分割 | 实现并训练 PointNet 分类（3 类）与分割（椅子 6 类），做鲁棒性分析（旋转/点数扰动） | HF assignment5 数据集（.npy） | 小规模，普通 GPU 即可 |

特点：几乎 100% coding（仅 A3 有 10 分手写透射率推导）；无 notebook（全是 .py 脚本 + main.py 约定）；非常强调可视化与网页报告；多个作业含"Do something fun / interpret your model"开放性加分题。

## Labs
无独立 lab。Week 2 有一次 PyTorch3D Tutorial（无公开材料）。作业的 starter code 实质上承担了 lab 功能。

## Project
有期末项目：第 4 周（Lecture 7）讲选题与时间线，第 7 周交 project proposal，最后两周 poster presentation，12/09 交 project report。项目自选，与课程主题相关。

## License
- 课程网页与 slides：未标注任何许可证 → license_status: unknown（仅保留本地研究副本，不重新分发）。
- 作业 GitHub repo（learning3d/assignment0–5）：无 LICENSE 文件 → unknown。
- 数据集（HuggingFace learning3dvision 组织）：R2N2/ShapeNet 衍生数据，遵循 ShapeNet 原始条款；页面未显式标注 → unknown。

## Relevance to World Models
高。课程核心是"从观测推断 3D 世界表示"——显式/隐式/神经表示、NeRF、3DGS、动态 3D（Nerfies/scene flow）正是 world model 的空间状态表示层；VGGT/多视图 Transformer 与生成式 3D（Trellis、SAM3D、SDS）对应"可生成的世界先验"。动态 3D 与可重光照表示直接服务于可预测、可交互的世界建模。

## Relevance to Spatial Intelligence
极高，是本知识库中空间智能主线课程之一：完整覆盖 3D 表示 → 单/多视图重建 → 神经渲染 → 点云/网格理解 → 3D 检测的空间感知全栈，且 assignment 体系可直接复用为实训主线。

## Relevance to Embodied AI
中高。课程动机即"自主智能体在 3D 世界中感知与行动"；有点云 3D 检测（自动驾驶向，PointPillars/VoteNet）、Fall 2025 有 Robotics 讲座（L22）；但无真实机器人实验、无策略学习/控制内容，具身性主要体现在感知层。

## What We Can Learn from This Course
1. **Assignment 设计范式值得整套借鉴**：6 个作业沿"渲染工具 → 三种 3D 表示的单视图重建 → NeRF/VolSDF 手写管线 → 3DGS + SDS → 点云理解"递进，每个 repo 自含 starter code + 按小题给分 + 网页报告，开源课程可直接 fork 改造。
2. **手写核心算法而非调库**：chamfer loss、体渲染、sphere tracing、3DGS 光栅化都要求手写（且明确禁止用 PyTorch3D 现成实现），配合单元测试（A4 unit_test_gaussians.py）——这是教学深度的重要保证。
3. **GPU 分级设计**：A1 可 CPU、A2 提供预提取特征降级、A4 标注显存需求（6GB/15.5GB，A5000 基准）——开源课程应照此给出硬件门槛说明。
4. **选题前沿更新快**：Fall 2026 已纳入 VGGT、Depth Anything 3、π³、Trellis、SAM3D、TokenGS/LVSM 等 2025–2026 工作，schedule 的 reading list 本身就是一份高质量的 3D 基础模型文献清单。
5. **网页报告制度**：用个人网页 + GIF 可视化作为交付物，强迫学生做结果可视化与失败案例分析（A5 要求分析 failure case），值得借鉴。
