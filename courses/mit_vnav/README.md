# Visual Navigation for Autonomous Vehicles (VNAV, 16.485)

## University

Massachusetts Institute of Technology (MIT), Department of Aeronautics and Astronautics

## Instructor

- Prof. Luca Carlone（MIT SPARK Lab 主任）
- 教学团队（Fall 2020 OCW 版）：Kasra Khosoussi、Markus Ryll、Golnaz Habibi、Vasileios Tzoumas、Rajat Talak

## Semester / Year

Fall 2020（OCW 归档版本）；课程网站 vnav.mit.edu 持续维护至 2024（ROS2 / Ubuntu 22.04 版 labs）

## Official URL

- 课程主页（含最新 labs/handouts）：https://vnav.mit.edu/
- MIT OCW（Fall 2020 完整讲义 PDF）：https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/

## Course Description

研究生课程，讲授自主载具（移动机器人、自动驾驶汽车、无人机）视觉导航的数学基础与最前沿实现。覆盖微分几何与流形上的优化、双视图/多视图几何、实时运动估计、标定、定位与建图，以及几何控制与轨迹优化。理论配合基于 mini racecar 和无人机平台的动手实验课（labs），最终以团队 final project 收尾。无指定教材，推荐 Barfoot《State Estimation for Robotics》与 Ma et al.《An Invitation to 3-D Vision》。

## Major Topics

- 3D Geometry（旋转表示、刚体变换）
- Lie Groups and Distances（SO(3)/SE(3)）
- Quadrotor Dynamics & Geometric Control
- Trajectory Optimization（minimum-snap 多项式轨迹）
- Image Formation / 2D Computer Vision（特征检测与跟踪，SIFT、LK 光流）
- Two-view Geometry（essential/fundamental matrix、Nistér 5-point、RANSAC、3D-3D correspondences / Arun's method）
- ML/MAP Estimation
- Nonlinear Least Squares、Levenberg-Marquardt、Optimization on Manifolds
- Visual Odometry / Visual-Inertial Odometry (VIO)
- Place Recognition（DBoW/Bag of Visual Words）、Object Detection（YOLO）
- SLAM：formulations & sparsity、factor graphs、marginalization、incremental solvers（iSAM2）、certifiably correct SLAM
- Dense 3D Reconstruction、Beyond Cameras、Outlier-Robust Perception
- Metric-Semantic Understanding、Open Problems in Robot Perception

## Public Materials

| Material | Status | Local Path | Original URL |
|---|---|---|---|
| Syllabus（OCW 网页快照） | Downloaded | syllabus/syllabus_ocw.html | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/pages/syllabus/ |
| Calendar（OCW 网页快照） | Downloaded | syllabus/calendar_ocw.html | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/pages/calendar/ |
| L01 Introduction to VNAV | Downloaded | lectures/L01_introduction_to_vnav.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec01/ |
| L02–L03 3D Geometric Basics | Downloaded | lectures/L02_L03_3d_geometric_basics.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec02and03/ |
| L04–L05 Lie Groups and Distances | Downloaded | lectures/L04_L05_lie_groups_and_distances.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec04/ |
| L06 Quadrotor Dynamics (notes) | Downloaded | lectures/L06_quadrotor_dynamics_notes.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec06notes/ |
| L07 Quadrotor Control (notes) | Downloaded | lectures/L07_quadrotor_control_notes.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec07notes/ |
| L08 Trajectory Optimization 1 | Downloaded | lectures/L08_trajectory_optimization_1.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec08/ |
| L09 Trajectory Optimization 2 (slides) | Downloaded | lectures/L09_trajectory_optimization_2_slides.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec09/ |
| L10 Trajectory Optimization 3 | Downloaded | lectures/L10_trajectory_optimization_3.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec10/ |
| L11 Image Formation (slides) | Downloaded | lectures/L11_image_formation_slides.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec11/ |
| L12–L13 Feature Detection and Tracking (slides) | Downloaded | lectures/L12_L13_feature_detection_tracking_slides.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec12lec13/ |
| L14 2-view Geometry | Downloaded | lectures/L14_two_view_geometry.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec14/ |
| L15 RANSAC and 3D-3D Correspondences (slides) | Downloaded | lectures/L15_ransac_3d3d_correspondences_slides.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec15/ |
| L16 ML and MAP Estimation (slides) | Downloaded | lectures/L16_ml_map_estimation_slides.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec16/ |
| L17 Intro to Nonlinear Least Squares (part 1) | Downloaded | lectures/L17_nonlinear_least_squares_part1.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec17part1/ |
| L17 Intro to Nonlinear Least Squares (part 2) | Downloaded | lectures/L17_nonlinear_least_squares_part2.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec17part2/ |
| L18 LM and Optimization on Manifold | Downloaded | lectures/L18_lm_optimization_on_manifolds.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec18/ |
| L19 Optimization on Manifold | Downloaded | lectures/L19_optimization_on_manifolds.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec19/ |
| L20 Visual and Visual-Inertial Odometry | Downloaded | lectures/L20_visual_and_visual_inertial_odometry.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec20/ |
| L21 Place Recognition | Downloaded | lectures/L21_place_recognition.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec21/ |
| L22 Bag of Words and Object Detection | Downloaded | lectures/L22_bag_of_words_object_detection.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec22/ |
| L23 SLAM I — Formulations and Sparsity | Downloaded | lectures/L23_slam_i_formulations_sparsity.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec23/ |
| L24 SLAM II — Factor Graphs and Marginalization | Downloaded | lectures/L24_slam_ii_factor_graphs_marginalization.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec24/ |
| L25 Dense 3D Reconstruction | Downloaded | lectures/L25_dense_3d_reconstruction.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec25/ |
| L28 Incremental SLAM Solvers | Downloaded | lectures/L28_incremental_slam_solvers.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec28/ |
| L30 Outlier-Robust Perception 1 | Downloaded | lectures/L30_outlier_robust_perception_1.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec30/ |
| L06 slides、L09/L11/L12/L15/L16/L23 notes 等备选版本 | Public-Link-Only | —（受 30 文件上限约束未下载） | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/pages/lecture-notes/ |
| L26 Beyond Cameras、L27 Open Problems、L31/L32 Outlier-Robust 2/3 | Public-Link-Only | —（受 30 文件上限约束未下载） | 同上 |
| Lab 1 slides / recitation notes（Linux, C++, Git） | Downloaded | labs/lab1_slides.pdf, labs/lab1_setup_notes.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit_16_485f20_lab1slides/ |
| Lab 2 slides（ROS） | Downloaded | labs/lab2_ros_slides.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit_16_485f20_lab2slides/ |
| Lab 4 slides（3D trajectory optimization） | Downloaded | labs/lab4_slides.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lab4slides/ |
| Lab 6 slides（object localization） | Downloaded | labs/lab6_slides.pdf | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit_16_485f20_lab6slides/ |
| Lab 3/5/7/8/9 slides | Public-Link-Only | —（受 30 文件上限约束未下载） | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/pages/lab-exercises/ |
| Lab 1–9.5 exercises/handouts（vnav 网站网页） | Downloaded | labs/exercises_html/lab*_exercises.html | https://vnav.mit.edu/labs/lab1/exercises.html 等 |
| 学生提交仓库（VNAV2024-submissions, github.mit.edu） | Login-Required | — | https://github.mit.edu/VNAV2024-submissions |
| 教学代码仓库（课程官方 starter code） | Not-Public | — | 仅经 github.mit.edu（MIT 内部）分发，无公开仓库 |
| 公开相关代码：Kimera / Kimera-VIO（MIT SPARK Lab） | Public-Link-Only | — | https://github.com/MIT-SPARK/Kimera-VIO |
| 公开相关代码：ORB-SLAM3 | Public-Link-Only | — | https://github.com/UZ-SLAMLab/ORB_SLAM3 |
| OCW 整课下载包 | Public-Link-Only | —（体积过大未下载） | https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/download |
| Lecture videos | Not-Found | — | OCW 此课无视频 |
| vnav.mit.edu/lectures、/schedule | Not-Found | —（404） | https://vnav.mit.edu/lectures |

## Course Structure

13 个 unit，每周 3 次 1 小时 lecture + 1 次 2 小时 lab：

1. Unit 1–2：Introduction、3D Geometry（刚体变换、Lie groups）
2. Unit 3–4：Geometric Control（quadrotor dynamics/control）、Trajectory Optimization
3. Unit 5–7：2D Computer Vision（image formation、features）、2-view Geometry & Minimal Solvers（RANSAC、ML/MAP）、Non-minimal Solvers & Visual Odometry（NLS、LM、manifold optimization）
4. Unit 8：Place Recognition（BoW、object detection）
5. Unit 9：SLAM & Visual-Inertial Navigation（factor graphs、marginalization）
6. Unit 10–12：Advanced Topics——open problems（dense 3D reconstruction、beyond cameras）、metric-semantic understanding（incremental solvers、certifiable SLAM）、robustness（outlier-robust perception）
7. Unit 13：Guest lectures 与学生项目报告

## Assignments

无独立 problem sets；成绩由 labs（60%）+ final project（25%）+ 参与（10%）+ 队友互评（5%）构成。每个 lab 含 individual 理论题（Gradescope 提交，LaTeX 排版）与 team 编程题（github.mit.edu 提交）。典型理论题：Nistér 5-point 推导、Lie groups 练习、NLS 协方差加权、BoW/DBoW 论文阅读理解、SLAM 信息矩阵稀疏模式分析（"Spy Game"）。

## Labs

9+2 个 labs（另有 2023 ROS1 归档版），全部 C++ / ROS(2) / OpenCV / GTSAM 技术栈：

- Lab 1：Linux、shell、Git、C++、CMake 环境搭建（个人）
- Lab 2：ROS 基础——nodes/topics/launch、tf 变换发布与查询、四元数数学（个人）
- Lab 3：无人机 3D 轨迹跟踪——TESSE 模拟器 + ROS bridge，实现 geometric controller（团队）
- Lab 4：3D 轨迹优化——minimum-snap 多项式、drone racing（团队）
- Lab 5：特征检测与匹配——SIFT 描述子、descriptor matching、Lucas-Kanade 跟踪、光流（团队）
- Lab 6：运动估计——2D-2D correspondences（5-point）、3D-3D（Arun's algorithm）、RPE 评估（团队）
- Lab 7：GTSAM——3D pose estimation、motion capture factor、CV 问题建模、SO(3) MLE（团队）
- Lab 8：place recognition——DBoW 论文 + Docker + YOLO/Ultralytics 目标检测（个人）
- Lab 8.5：用 YOLO 前端 + GTSAM 后端在 TUM RGB-D（freiburg3_teddy）上做 object localization（团队）
- Lab 9：SLAM 理论题（sparsity、marginalization、feature-based vs direct）（个人）
- Lab 9.5：在 EuRoC MH_01_easy 上对比 ORB-SLAM3 与 Kimera-VIO，evo 做轨迹评估（团队）

## Project

Final project 团队制（按学生兴趣组队），要求：ICRA 格式技术报告 + final demo + 团队 presentation（含视频），目标是"推进 state of the art"。平台依项目而定（drone/simulator/datasets）。

## License

- MIT OCW 材料（lecture PDFs、lab slides/notes）：**CC BY-NC-SA 4.0**（OCW 标准许可，页脚标注）
- vnav.mit.edu 课程网站（labs handouts）：**CC BY 4.0**（网站页脚标注）
- github.mit.edu 学生/教学仓库：MIT 内部，未公开，**不重新分发**
- 第三方代码（GTSAM、ORB-SLAM3、Kimera 等）各按其仓库许可证

## Relevance to World Models

中等偏上。课程核心是几何状态估计而非学习式世界模型，但 SLAM/VIO 本质是在线构建环境的空间表示（map）与自身状态估计，是 world model 的几何/概率论前身；factor graph + manifold optimization 提供了"结构化 latent state"的推断框架，place recognition 与 metric-semantic understanding（Kimera 一脉）直接通向 spatial memory 与语义地图。dense 3D reconstruction 一讲连接 NeRF 前的经典重建管线。

## Relevance to Spatial Intelligence

极高。这是系统讲授空间智能数学地基的课程：SO(3)/SE(3) 与李群、多视图几何、运动估计（VO/VIO）、建图与回环、地点识别、鲁棒估计——全部是"智能体在 3D 空间中理解自身与环境"的核心能力，且数学深度（流形优化、稀疏性、可证明正确的 SLAM）在同类课程中少见。

## Relevance to Embodied AI

高。理论直接落在真实平台上：mini racecar 与无人机（quadrotor dynamics/control、TESSE simulator、EuRoC/TUM 真实数据集），强调实时性、嵌入式 C++ 实现与 sim-to-real 管线，是 embodied perception 的经典训练范式。

## What We Can Learn from This Course

1. **数学地基优先**：用 6 个 lecture 系统讲 Lie groups 与 manifold optimization，再讲 SLAM——先工具后系统，值得借鉴的讲授顺序。
2. **理论-实验闭环**：每个理论单元配一个动手 lab（讲 5-point 就做 2D-2D 运动估计；讲 factor graph 就用 GTSAM；讲 place recognition 就跑 DBoW/YOLO；讲 SLAM 就对比 ORB-SLAM3 与 Kimera-VIO），且 lab 用真实 SOTA 开源系统而非玩具代码。
3. **从 minimal solvers 到鲁棒估计的完整链条**：RANSAC → ML/MAP → NLS → LM on manifolds → factor graphs → incremental/certifiable/outlier-robust SLAM，一条线贯穿估计理论。
4. **评估文化**：evo 轨迹评估、RPE 指标、真实数据集（EuRoC、TUM RGB-D）——强调可复现的定量评估。
5. 公开性好：OCW 全套讲义 + 网站全套 lab handouts（CC 许可），适合直接改编为开源课程骨架。
