# Deep Learning for Spatial AI (Practical Course, 10 ECTS)

## University
Technical University of Munich (TUM) — Computer Vision Group (CVG), School of Computation, Information and Technology (CIT). Chair headed by Prof. Daniel Cremers.

## Instructor
课程为课题组集体指导的实践课（practical course），SS2026 组织者（Organisers）：
- Dr. Nikita Araslanov
- Qing Cheng
- Weirong Chen
- Linus Härenstam-Nielsen
- Shenhan Qian
- Ganlin Zhang

（均为 Cremers 领导的 Computer Vision Group 成员；联系邮箱 dl4sai-ss26@vision.in.tum.de）

## Semester / Year
Summer Semester 2026（最近一届：SS2025，结构与主题基本相同，材料互补收录）。

## Official URL
- SS2026: https://cvg.vision.cs.tum.edu/teaching/ss2026/dl4sai
- SS2025（上一届，含 kickoff slides/录像）: https://cvg.vision.cs.tum.edu/teaching/ss2025/dl4sai

## Course Description
面向有深度学习与计算机视觉基础的高年级学生的**研究实践课**（非讲授课）。目标是让学生动手使用 Spatial AI / 3D 计算机视觉领域最前沿的模型（如 VGGT、Bolt3D、SpatialTracker、RayZer），将 DL/CV 知识转化为面向研究的实践技能，为后续独立研究项目（含硕士论文）做铺垫。学生以最多 3 人小组形式完成一个由导师提出并经同行评审的研究项目，期末做口头报告并提交书面报告。

先修要求（至少一门）：Introduction to Deep Learning (IN2346)、Computer Vision II (IN2228)、Computer Vision III (IN2375)、Machine Learning for 3D Geometry (IN2392)、3D Computer Vision (IN2057)，或同等课程。

## Major Topics
（来自 SS2026 官方页面 "Topics" 一节，原文列举的开放研究挑战）
1. **3D/4D reconstruction and SLAM**（代表方法：VGGT, CVPR 2025）
2. **3D priors with diffusion models**（代表方法：Bolt3D, ICCV 2025 — generative 3D priors）
3. **3D tracking**（代表方法：SpatialTracker — tracking 2D pixels in 3D space）
4. **Self-supervised learning with 3D priors**（代表方法：RayZer, ICCV 2025 Oral）
5. 页面展示的工作示例：Chen et al., "Back on Track: Bundle Adjustment for Dynamic Scene Reconstruction", ICCV 2025（动态场景 BA / SLAM）
6. 项目主题方向（Course Logistics）：从图像/视频/点云中提取几何或语义信息，如 camera/object pose estimation、dynamic object segmentation、video/panoptic segmentation

## Public Materials

| Material | Status | Local Path | Original URL |
|---|---|---|---|
| SS2026 预备会 slides（Preliminary meeting, 2026-02-09） | Downloaded | syllabus/prelim_meeting_ss2026.pdf | https://cvg.vision.cs.tum.edu/_media/teaching/ss2026/dl4sai/prelimmeeting_9022026.pdf |
| SS2025 预备会 slides | Downloaded | syllabus/prelim_meeting_ss2025.pdf | https://cvg.vision.cs.tum.edu/_media/teaching/ss2025/dl4sai/prelim.pdf |
| SS2025 项目介绍/kickoff slides（Google Slides 导出 PDF） | Downloaded | lectures/project_topics_kickoff_ss2025.pdf | https://docs.google.com/presentation/d/17tM4BAjY0vCheEw0gBZIBdXvhOuvgPeCQMmPMYg4XO0/edit?usp=sharing |
| SS2025 kickoff 会议录像（LRZ Sync&Share, mp4，大小未标注、预计较大） | Public-Link-Only | — | https://syncandshare.lrz.de/getlink/fiXy22vVJBEUgdiWMzxRNM/kickoff_meeting.mp4 |
| 参考论文：VGGT (arXiv:2503.11651) | Downloaded | readings/VGGT_wang_CVPR2025.pdf | https://arxiv.org/abs/2503.11651 |
| 参考论文：Bolt3D (arXiv:2503.14445) | Downloaded | readings/Bolt3D_2025.pdf | https://arxiv.org/abs/2503.14445 |
| 参考论文：SpatialTracker (arXiv:2404.04319) | Downloaded | readings/SpatialTracker_xiao2024.pdf | https://arxiv.org/abs/2404.04319 |
| 参考论文：RayZer (arXiv:2505.00702) | Downloaded | readings/RayZer_selfsupervised_2025.pdf | https://arxiv.org/abs/2505.00702 |
| 参考论文：Back on Track (BA-Track, ICCV 2025, arXiv:2504.14516) | Downloaded | readings/BackOnTrack_BA_dynamic_ICCV2025.pdf | https://arxiv.org/abs/2504.14516 |
| 每周 lecture slides / 讲义 | Not-Public | — | 本课程为项目制实践课，无公开周次讲义；SS2025 交流通过 Matrix 房间（邀请制） |
| Assignments（习题/作业） | Not-Found | assignments/（空） | 课程无传统作业，只有研究项目 |
| Labs | Not-Found | labs/（空） | 无独立 lab |
| Notebooks | Not-Found | notebooks/（空） | 未公开发布 |
| Moodle / 内部材料 | Login-Required | — | 课程 Wiki 内部页面（`?do=login`）及 Matrix 房间需注册学生身份 |

## Course Structure
项目制实践课，无每周 lecture。SS2026 时间线：
- 2026-02-09 预备会（介绍课程与申请流程）
- 2 月中旬：TUM matching system 注册 + 邮件申请（CV + 成绩单，容量有限，SS2025 上限 30 人）
- 2026-04-13 项目介绍会（导师发布经同行评审的项目选题）
- 4 月中旬：项目匹配（每组 ≤3 人，配一名 advisor 定期指导）
- 2026-05-18 中期报告（线下）
- 2026-07-27 期末报告（线下）
- 2026-09-30 书面项目报告截止

## Assignments
无传统 homework。评估完全基于研究项目：中期 presentation + 期末 presentation + 书面报告（report，9 月底提交）。

## Labs
无独立 lab。项目本身即实验（coding-heavy，使用 VGGT/Bolt3D/RayZer 等前沿代码库，通常需要 GPU）。

## Project
课程核心：每组一个 Spatial AI 研究项目（10 ECTS，约一学期），方向包括 3D/4D 重建与 SLAM、diffusion 3D 先验、3D tracking、自监督 3D、相机/物体位姿估计、动态物体分割等。产出：中期/期末报告 + 书面报告；优秀项目可发展为论文或硕士论文。

## License
- 课程网站及 slides 未标注许可证 → `license_status: unknown`，仅保留本地研究副本，**不重新分发**。
- 收录的 arXiv 论文遵循 arXiv 非独家分发许可 / 作者版权；仅作个人学习用途。
- TUM 不属于 OCW 类开放课程项目，材料默认 © TUM CVG。

## Relevance to World Models
High。课程主题（generative 3D priors、diffusion-based scene generation、自监督视角合成）正是 "3D-aware world model" 的核心构件：Bolt3D/RayZer 类模型学习可泛化的 3D 场景先验，是构建空间一致 world model 的基础。

## Relevance to Spatial Intelligence
Very High（课程名字即 Spatial AI）。覆盖 3D/4D 重建、SLAM、3D tracking、位姿估计、动态场景理解——即空间智能的完整技术栈，且全部以 SOTA 深度学习方法（feed-forward 3D foundation models）为主线。

## Relevance to Embodied AI
Medium。SLAM、相机/物体位姿估计、动态场景重建是具身智能体感知层的核心，但课程不含机器人硬件、规划或控制实验，纯视觉/几何侧。

## What We Can Learn from This Course
1. **"以 SOTA 开源模型为起点的研究实训"范式**：不从头讲基础，而是让学生直接站在 VGGT/Bolt3D/RayZer 等前沿代码库上做改进，一学期内产出可发表级结果。
2. **同行评审式项目选题**：项目 idea 由导师提出并经 peer-review，保证研究价值与可行性。
3. **主题选型即一张 "Spatial AI 前沿地图"**：3D/4D 重建（VGGT）、生成式 3D 先验（Bolt3D）、3D tracking（SpatialTracker）、自监督 3D（RayZer），可直接作为本课程的知识模块骨架。
4. **完整的研究流程训练**：选题 → 中期 → 期末 presentation → 书面报告，对接硕士论文。
5. 预备会 slides（已收录）可作为课程组织/申请流程与期望管理的模板。
