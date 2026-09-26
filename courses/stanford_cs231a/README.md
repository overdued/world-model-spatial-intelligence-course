# Computer Vision: From 3D Perception to 3D Reconstruction and Beyond (CS231A)

## University

Stanford University

## Instructor

Silvio Savarese、Jeannette Bohg（2025 Spring）；TA：Aditya Dutt、Ishikaa Lunawat、Adam Sun；Guest Lecture：Francis Engelmann

## Semester / Year

Spring 2025（2025-03-31 至 2025-06-11，Stanford 春季学期，周一/周三授课 + 周五 TA section）

## Official URL

- 主页：https://web.stanford.edu/class/cs231a/
- Syllabus / Schedule：https://web.stanford.edu/class/cs231a/syllabus.html
- Course Notes：https://web.stanford.edu/class/cs231a/course_notes.html

## Course Description

CS231A 是 Stanford 经典的 3D 计算机视觉课程，副标题 "From 3D Perception to 3D Reconstruction and Beyond"。课程前半部分系统讲授多视图几何（multiple view geometry）：相机模型、标定、单视图测量、对极几何、立体视觉、Structure from Motion、拟合与匹配；后半部分转向学习方法与前沿主题：表征学习、单目深度估计、特征跟踪、光流与场景流、最优估计（Kalman Filter 系列）、NeRF 与 Gaussian Splatting。课程提供 10 篇自包含的 course notes，几何部分无需教材即可自学。推荐教材：Forsyth & Ponce《Computer Vision: A Modern Approach》、Hartley & Zisserman《Multiple View Geometry》、Thrun et al.《Probabilistic Robotics》。

## Major Topics

依据 2025 Spring syllabus 真实 lecture 标题：

1. Introduction
2. Camera Models
3. Camera Models II and Camera Calibration
4. Single View Metrology
5. Epipolar Geometry
6. Stereo Systems
7. Structure from Motion
8. Active Stereo & Volumetric Stereo
9. Fitting and Matching
10. Representations & Representation Learning
11. Monocular Depth Estimation & Feature Tracking
12. Learning-based Stereo & Monocular Depth Estimation & Feature Tracking (Cont.)
13. Optical and Scene Flow
14. Optimal Estimation
15. Optimal Estimation Cont.（Flipped Format，EKF/UKF/particle filter 等）
16. Neural Radiance Fields (NeRF)
17. Gaussian Splatting
18. Guest Lecture（Francis Engelmann，3D scene understanding 方向）

另有 9 次 TA section：Python/线代复习、PS 讲评、神经网络入门、概率复习、Midterm 复习、Final Project 指导等。

## Public Materials

| Material | Status | Local Path | Original URL |
|---|---|---|---|
| Course Notes 1: Camera Models | Downloaded | lectures/notes01_camera_models.pdf | https://web.stanford.edu/class/cs231a/course_notes/01-camera-models.pdf |
| Course Notes 2: Single View Metrology | Downloaded | lectures/notes02_single_view_metrology.pdf | https://web.stanford.edu/class/cs231a/course_notes/02-single-view-metrology.pdf |
| Course Notes 3: Epipolar Geometry | Downloaded | lectures/notes03_epipolar_geometry.pdf | https://web.stanford.edu/class/cs231a/course_notes/03-epipolar-geometry.pdf |
| Course Notes 4: Stereo Systems | Downloaded | lectures/notes04_stereo_systems.pdf | https://web.stanford.edu/class/cs231a/course_notes/Course_Notes_4.pdf |
| Course Notes 5: Active and Volumetric Stereo | Downloaded | lectures/notes05_active_volumetric_stereo.pdf | https://web.stanford.edu/class/cs231a/course_notes/05-active-volumetric-stereo.pdf |
| Course Notes 6: Fitting and Matching | Downloaded | lectures/notes06_fitting_matching.pdf | https://web.stanford.edu/class/cs231a/course_notes/06-fitting-matching.pdf |
| Course Notes 7: Representations and Representation Learning | Downloaded | lectures/notes07_representation_learning.pdf | https://web.stanford.edu/class/cs231a/course_notes/07-representation-learning.pdf |
| Course Notes 8: Monocular Depth Estimation and Feature Tracking | Downloaded | lectures/notes08_monocular_depth_estimation_feature_tracking.pdf | https://web.stanford.edu/class/cs231a/course_notes/08-monocular_depth_estimation.pdf |
| Course Notes 9: Optical and Scene Flow | Downloaded | lectures/notes09_optical_scene_flow.pdf | https://web.stanford.edu/class/cs231a/course_notes/09-optical-flow.pdf |
| Course Notes 10: Optimal Estimation | Downloaded | lectures/notes10_optimal_estimation.pdf | https://web.stanford.edu/class/cs231a/course_notes/10-optimal-estimation.pdf |
| L01 Introduction slides | Downloaded | lectures/L01_introduction.pdf | https://web.stanford.edu/class/cs231a/lectures_2025/lecture1_introduction_2025.pdf |
| L02 Camera Models slides | Downloaded | lectures/L02_camera_models.pdf | https://web.stanford.edu/class/cs231a/lectures_2025/lecture2_camera_models.pdf |
| L03 Camera Models II & Calibration slides | Downloaded | lectures/L03_camera_models_II_calibration.pdf | https://web.stanford.edu/class/cs231a/lectures_2025/lecture3_camera_calibration.pdf |
| L04 Single View Metrology slides | Downloaded | lectures/L04_single_view_metrology.pdf | https://web.stanford.edu/class/cs231a/lectures_2025/lecture4_single_view_metrology_2025.pdf |
| L05 Epipolar Geometry slides | Downloaded | lectures/L05_epipolar_geometry.pdf | https://web.stanford.edu/class/cs231a/lectures_2025/lecture5_epipolar_geometry.pdf |
| L06 Stereo Systems slides | Downloaded | lectures/L06_stereo_systems.pdf | https://web.stanford.edu/class/cs231a/lectures_2025/lecture6_stereo_systems_Flatten.pdf |
| L07 Structure from Motion slides | Downloaded | lectures/L07_structure_from_motion.pdf | https://web.stanford.edu/class/cs231a/lectures_2025/lecture7_SFM_silvio_2025.pdf |
| L08 Active & Volumetric Stereo slides | Downloaded | lectures/L08_active_volumetric_stereo.pdf | https://web.stanford.edu/class/cs231a/lectures_2025/lecture8_volumetric_stereo_2025.pdf |
| L09 Fitting and Matching slides | Downloaded | lectures/L09_fitting_matching.pdf | https://web.stanford.edu/class/cs231a/lectures_2025/lecture9_fitting_matching_2024.pdf |
| L10 Representations slides | Downloaded | lectures/L10_representations.pdf | https://web.stanford.edu/class/cs231a/lectures_2025/Lecture10_LowLevelRepresentations.pdf |
| L11 Monocular Depth & Feature Tracking slides | Downloaded | lectures/L11_monocular_depth_feature_tracking.pdf | https://web.stanford.edu/class/cs231a/lectures_2025/Lecture11_UsingRepresentationLearning.pdf |
| L12 Learning-based Stereo/Depth/Tracking slides | Downloaded | lectures/L12_learning_stereo_depth_tracking.pdf | https://web.stanford.edu/class/cs231a/lectures_2025/Lecture12_Flow.pdf |
| L13 Optical and Scene Flow slides | Downloaded | lectures/L13_optical_scene_flow.pdf | https://web.stanford.edu/class/cs231a/lectures_2025/Lecture13_OptimalEstimation.pdf |
| L14 Optimal Estimation slides | Downloaded | lectures/L14_optimal_estimation.pdf | https://web.stanford.edu/class/cs231a/lectures_2025/Lecture14_OptimalEstimationCont'.pdf |
| L15 Optimal Estimation Cont. slides | Downloaded | lectures/L15_optimal_estimation_cont.pdf | https://web.stanford.edu/class/cs231a/lectures/lecture15_optimal_estimation_cont.pdf |
| L16 Neural Radiance Fields slides | Downloaded | lectures/L16_neural_radiance_fields.pdf | https://web.stanford.edu/class/cs231a/lectures_2025/Lecture16_NeuralRadianceFields.pdf |
| L17 Gaussian Splatting slides | Downloaded | lectures/L17_gaussian_splatting.pdf | https://web.stanford.edu/class/cs231a/lectures_2025/Lecture17_GaussianSplatting.pdf |
| L18 Guest Lecture slides (73MB, >50MB 限制未下载) | Public-Link-Only | — | https://web.stanford.edu/class/cs231a/lectures_2025/2025.06.04%20-%20GuestLecture_stanfordcs231a_.pdf |
| Problem Set 0 (pdf) | Downloaded | assignments/ps0.pdf | https://web.stanford.edu/class/cs231a/hw_2025_spring/ps0.pdf |
| Problem Set 1 (pdf) | Downloaded | assignments/ps1.pdf | https://web.stanford.edu/class/cs231a/hw_2025_spring/ps1.pdf |
| Problem Set 2 (pdf) | Downloaded | assignments/ps2.pdf | https://web.stanford.edu/class/cs231a/hw_2025_spring/ps2.pdf |
| Problem Set 3 (pdf) | Downloaded | assignments/ps3.pdf | https://web.stanford.edu/class/cs231a/hw_2025_spring/ps3.pdf |
| Problem Set 4 (pdf) | Downloaded | assignments/ps4.pdf | https://web.stanford.edu/class/cs231a/hw_2025_spring/ps4.pdf |
| Practice Midterm 2023 (zip) | Downloaded | assignments/practice_midterm_2023.zip | https://web.stanford.edu/class/cs231a/231aMidterm2023.zip |
| PS0–PS4 starter code (zip ×5) | Public-Link-Only | — | https://web.stanford.edu/class/cs231a/hw_2025_spring/ps{0..4}_code.zip |
| PS0/1/3/4 LaTeX templates (zip ×4) | Public-Link-Only | — | https://web.stanford.edu/class/cs231a/hw_2025_spring/ps{0,1,3,4}_template.zip |
| PS2 LaTeX template | Not-Found | — | https://web.stanford.edu/class/cs231a/hw_2025_spring/ps2_template_2025.zip (404) |
| TA Section slides 1–6, 9 | Public-Link-Only | — | https://web.stanford.edu/class/cs231a/section/section{1..6,9}.pdf |
| TA Section 7, 8 slides | Not-Found | — | section/section7.pdf、section8.pdf (404， syllabus 上本无 slides 链接) |
| Lecture 录像（部分课次） | Login-Required | — | Canvas 平台，仅 Stanford 注册学生可见 |
| Reading list（教材章节 + 论文链接） | Public-Link-Only | — | 见 syllabus.html Reading 列（HZ/FP 教材为版权书籍，未下载） |

空子目录说明：`syllabus/`（syllabus 为 HTML 页面，无 PDF 版）、`labs/`（本课程无独立 lab，编程练习并入 problem sets）、`code/`（starter code zip 未下载，仅记录链接）、`readings/`（教材为版权书籍，论文均为外部链接）、`notebooks/`（PSET 提供 .ipynb 但打包在 code zip 内，未单独下载）、`projects/`（final project 无公开模板文件，仅有 poster guidelines section slides）。

## Course Structure

课程共 10 周、18 次正课 + 9 次 TA section，分三条主线：

1. **几何主线（Week 1–5，Silvio Savarese）**：相机模型 → 标定 → 单视图测量 → 对极几何 → 立体视觉 → SfM → 主动/体素立体 → 拟合与匹配（RANSAC、Hough）。配套 10 篇自包含 course notes 的前 6 篇。
2. **学习主线（Week 5–7，Jeannette Bohg）**：表征学习（自监督、DINO 系列）→ 单目深度估计（Depth Anything、Foundation Stereo 等基础模型）→ 特征跟踪 → 光流与场景流。
3. **估计与渲染主线（Week 8–10）**：最优估计（Kalman/EKF/UKF，flipped format）→ NeRF → Gaussian Splatting → Guest Lecture。

评估：4 个 problem sets + 1 个 PS0（热身）+ 线下 midterm + final project（proposal → milestone → poster session → final report，可 3 人组队，可与 CS231N 等课程合并）。

## Assignments

共 5 个 problem set（PS0–PS4），均为 "Python 代码 + PDF 书面作答" 双轨提交（Gradescope autograder 查代码 + 人工评 PDF），提供 .py starter code、.ipynb（Colab）与 LaTeX 模板：

- **PS0**（热身）：Python/NumPy 入门 + 线性代数复习。
- **PS1**：射影几何证明（20 分）、仿射相机标定（35 分，coding）、单视图几何/灭点求内参（45 分，coding+分析）。理论：coding ≈ 1:2。
- **PS2**：基础矩阵估计（八点法，30 分）、图像矫正的匹配单应（20 分）、Tomasi-Kanade 因子分解法（20 分）、SfM 三角化（30 分）。几乎全 coding，含对真实雕像数据集的重建实验。
- **PS3**：Space Carving 体素重建（45 分，coding）、表征学习（20 分，Fashion-MNIST 自监督旋转预测）、有监督单目深度估计（15 分，CLEVR-D 数据）、无监督单目深度估计（20 分，视差/光度一致性）。深度估计部分需要训练小型网络（Colab GPU 即可）。
- **PS4**：非线性观测模型的 EKF（40 分，机器人追踪苍蝇轨迹场景）、单目到立体的滤波融合（35 分）、带学习逆观测模型的线性 KF（25 分）。滤波 + 学习的结合设计很有特色。

设计思想：每个 PS 紧跟当周 lecture；从几何（PS1/PS2）平滑过渡到学习（PS3）再到状态估计（PS4）；autograder 降低批改成本，written report 保留理论深度；明确禁止把答案 push 到公开 GitHub。

## Labs

无独立 lab。编程练习全部并入 problem sets（starter code + Colab notebook 形式）。

## Project

Final project 为课程核心组成部分：可 1–3 人组队，4/24 交 proposal，5/16 交 milestone，6/9 poster session，6/11 交 final report。允许与 CS231N 等同期课程合并选题。TA section 2/3/9 专门做 project 指导。无公开的项目模板代码。

## License

课程网站未标注明确的开源许可证（非 MIT OCW）。材料公开可访问，但版权归属 Stanford 及课程教师。**license_status: unknown —— 仅限本地研究学习使用，不重新分发。**

## Relevance to World Models

高相关。World model 的核心是在内部构建环境的三维/动态表示并用于预测。CS231A 覆盖了 world model 的几何基础：多视图几何（观测如何映射到 3D 结构）、SfM 与 SLAM 式的状态估计（Kalman 滤波族）、NeRF/Gaussian Splatting（显式可渲染的世界表示，正是当下 world model / 视频生成模型的重要内部表示）、深度与光流/场景流（动态世界的感知）。PS4 的 "滤波 + 学习观测模型" 直接对应 latent world model 中 dynamics + observation model 的分解。

## Relevance to Spatial Intelligence

极高相关。这门课几乎是 spatial intelligence 的教科书式定义：从 2D 图像恢复 3D 几何（相机模型、三角化、立体匹配、体素雕刻）、空间推理（单视图测量、射影几何不变量）、3D 场景表示（NeRF、3DGS）。Fei-Fei Li 倡导的 spatial intelligence 议程中，CS231A 的几何部分正是 "感知空间结构" 的经典方法论。

## Relevance to Embodied AI

中高相关。主动立体视觉、ego-motion 估计（SfM/tracking）、Kalman 滤波状态估计（PS4 的机器人追踪场景）都是机器人感知栈的核心组件；NeRF/3DGS 已广泛用于机器人仿真与导航（syllabus 推荐了 NeRF Navigation 论文）。课程本身不含机器人硬件实验，但其输出（深度、位姿、3D 重建）是 embodied agent 的直接输入。

## What We Can Learn from This Course

1. **自包含 course notes 的写法**：10 篇 notes 覆盖全部几何内容，深浅适中、推导完整，是开源课程材料的范本。
2. **几何 → 学习 → 估计的三段式结构**：先建立严格的多视图几何基础，再引入现代学习方法（且直接引用 Depth Anything、Foundation Stereo、DINO 等 2023–2024 基础模型），最后以最优估计和神经渲染收尾——传统与现代衔接自然。
3. **作业即课程主线**：每个 PS 都是当周 lecture 的完整实现（八点法、因子分解、space carving、EKF 都是手写核心算法），autograder + written report 双轨制值得借鉴。
4. **前沿更新机制**：每年替换后半学期内容（2025 年加入 Gaussian Splatting、基础模型深度估计），保持几何主干不变——稳定内核 + 滚动前沿的课程演化模式。
