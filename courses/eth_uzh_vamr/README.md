# Vision Algorithms for Mobile Robotics (VAMR)

## University
ETH Zurich / University of Zurich（联合开课，由 UZH Robotics and Perception Group 主讲；ETH 选课代码 151-0632-00L，UZH 代码 03SMDINF2039）

## Instructor
Prof. Dr. Davide Scaramuzza（UZH Robotics and Perception Group, rpg.ifi.uzh.ch），习题课由 RPG 助教团队负责；学期中有 Skydio 与 NASA-JPL（Dr. Jeff Delaune，火星直升机视觉导航）客座讲座。

## Semester / Year
Fall 2026（2026-09-17 至 2026-12-17，笔试 2027-01-07）。本地保存的 slides 为 2025/2026 学年最新公开版本（课程页每年更新，URL 按年份目录组织：docs/teaching/2025/ 与 docs/teaching/2026/）。

## Official URL
- 课程主页（UZH RPG Teaching，含全部 slides/exercises/项目链接）：https://rpg.ifi.uzh.ch/teaching.html
- ETH 课程目录条目（151-0632-00L）：https://www.vvz.ethz.ch/ （lerneinheitId=203373；直接 curl 返回 404，可用镜像 https://vvzapi.ch/unit/203373 验证，200）
- UZH 课程目录：https://studentservices.uzh.ch/uzh/anonym/vvz/
- 视频与论坛（OLAT，需 UZH 登录）：https://lms.uzh.ch/auth/RepositoryEntry/17827988425/CourseNode/106905460422724
- 教师 YouTube 频道（含历年讲座录像）：https://www.youtube.com/user/ailabRPG
- 实验室 GitHub：https://github.com/uzh-rpg

## Course Description
面向自主移动机器人的核心计算机视觉算法课程（ETH 机器人硕士核心课，6 学分）。内容覆盖：image formation、filtering、feature extraction、multiple view geometry、dense reconstruction、tracking、image retrieval（place recognition）、event-based vision、visual-inertial odometry、SLAM 与深度学习基础。课程以 Apple ARKit、Google Visual Positioning Service、Magic Leap、Meta Quest/Aria、NASA-JPL 火星车与火星直升机等真实系统为案例。要求线性代数、几何与矩阵求导基础。习题用 Matlab 或 Python（2025 起官方提供 Python 模板解答）。

## Major Topics
（以下均为课程页面上的真实 lecture 标题）
1. Introduction to Computer Vision and Visual Odometry
2. Image Formation: perspective projection and camera models
3. Camera Calibration（DLT、PnP/P3P）
4. Filtering & Edge Detection
5. Point Feature Detectors, Part 1（Harris）
6. Point Feature Detectors, Part 2（SIFT）
7. Multiple-view Geometry 1（stereo rectification、epipolar matching、disparity、triangulation）
8. Multiple-view Geometry 2（Eight-Point Algorithm）
9. Multiple-view Geometry 3（P3P + RANSAC）
10. Multiple-view Geometry 4（Bundle Adjustment）
11. Optical Flow and KLT Tracking（Lucas-Kanade）
12a. Place Recognition（Bag-of-Words）
12b. Deep Learning Tutorial
13. Visual-Inertial Fusion（VIO）
14. Event-based Vision（event cameras、contrast maximization）

## Public Materials

| Material | Status | Local Path | Original URL |
|---|---|---|---|
| 教学主页快照（Fall 2026 syllabus/schedule） | Downloaded | syllabus/vamr_teaching_page_fall2026.html | https://rpg.ifi.uzh.ch/teaching.html |
| L01 Introduction & Visual Odometry | Downloaded | lectures/L01_introduction_visual_odometry.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2026/01_introduction.pdf |
| L02 Image Formation & Camera Models | Downloaded | lectures/L02_image_formation_camera_models.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2026/02_image_formation.pdf |
| L03 Camera Calibration | Downloaded | lectures/L03_camera_calibration.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/03_camera_calibration.pdf |
| L04 Filtering & Edge Detection | Downloaded | lectures/L04_filtering_edge_detection.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/04_filtering.pdf |
| L05 Point Feature Detectors 1 | Downloaded | lectures/L05_point_feature_detectors_1.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/05_feature_detection_1.pdf |
| L06 Point Feature Detectors 2 | Downloaded | lectures/L06_point_feature_detectors_2.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/06_feature_detection_2.pdf |
| L07 Multiple-view Geometry 1 | Downloaded | lectures/L07_multiple_view_geometry_1.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/07_multiple_view_geometry_1.pdf |
| L08 Multiple-view Geometry 2 | Downloaded | lectures/L08_multiple_view_geometry_2.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/08_multiple_view_geometry_2.pdf |
| L09 Multiple-view Geometry 3 | Downloaded | lectures/L09_multiple_view_geometry_3.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/09_multiple_view_geometry_3.pdf |
| L10 Multiple-view Geometry 4 | Downloaded | lectures/L10_multiple_view_geometry_4.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/10_multiple_view_geometry_4.pdf |
| L11 Optical Flow & KLT Tracking | Downloaded | lectures/L11_optical_flow_klt_tracking.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/11_tracking.pdf |
| L12a Place Recognition | Downloaded | lectures/L12a_place_recognition.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/12a_recognition.pdf |
| L12b Deep Learning Tutorial | Downloaded | lectures/L12b_deep_learning.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/12b_deep_learning.pdf |
| L13 Visual-Inertial Fusion | Downloaded | lectures/L13_visual_inertial_fusion.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/13_visual_inertial_fusion.pdf |
| L14 Event-based Vision | Downloaded | lectures/L14_event_based_vision.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/14_event_based_vision.pdf |
| Notes on SVD for DLT | Downloaded | lectures/notes_SVD_for_DLT.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/02_SVD.pdf |
| Notes on Convolution | Downloaded | lectures/notes_convolution.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/04_ConvolutionNotes.pdf |
| Camera Notation Tutorial | Downloaded | lectures/tutorial_camera_notation.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2026/Camera_Notation_Tutorial.pdf |
| Camera Notation Tutorial (Paul Furgale) | Downloaded | lectures/tutorial_camera_notation_furgale.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2026/FurgaleTutorial.pdf |
| Exercise 04 数值练习（Filtering）+ 解答 | Downloaded | assignments/exercise_04_numerical_filtering.pdf, assignments/solution_04_numerical_filtering.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/exercise_04.pdf , .../solution_04.pdf |
| Exercise 12 数值练习（Deep Learning）+ 解答 | Downloaded | assignments/exercise_12_statement_deep_learning.pdf, assignments/solution_12_deep_learning.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/statement_12.pdf , .../solution_12.pdf |
| Exercise 08 Bundle Adjustment（代码+数据 zip） | Downloaded | assignments/exercise_08_bundle_adjustment.zip | https://rpg.ifi.uzh.ch/docs/teaching/2025/exercise_08.zip |
| Exercise 01–03, 05–07, 09–11 及解答（zips） | Public-Link-Only | —（数量与体积限制，未下载；链接见 links.md） | https://rpg.ifi.uzh.ch/docs/teaching/2025/ 与 /2026/ |
| VO Mini-Project 任务书 | Downloaded | projects/vo_miniproject_statement.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2025/miniproject/vo_project_statement.pdf |
| Mini-Project 数据加载脚本（Python / Matlab） | Downloaded | projects/main.py, projects/main.m | https://rpg.ifi.uzh.ch/docs/teaching/2025/miniproject/main.py , .../main.m |
| Mini-Project 数据集 parking.zip（208MB）/ kitti05.zip（1.4GB）/ malaga-07.zip（2.4GB） | Public-Link-Only | —（超过 50MB 上限，仅记录链接） | https://rpg.ifi.uzh.ch/docs/teaching/datasets/ |
| 教材章节：Autonomous Mobile Robots 第4章（Siegwart, Nourbakhsh, Scaramuzza） | Downloaded | readings/Ch4_Autonomous_Mobile_Robots_Siegwart.pdf | https://rpg.ifi.uzh.ch/docs/teaching/2026/Ch4_AMRobots.pdf |
| Visual Odometry 补充阅读（VO tutorials zip） | Downloaded | readings/VO_tutorials_additional_reading.zip | https://rpg.ifi.uzh.ch/docs/teaching/2026/VO_tutorials.zip |
| 各讲补充阅读论文包（PnP / rectification / 2-view / RANSAC / open-source VO / Lucas-Kanade / feature detectors / recognition / VIO / DVS，均为 zip） | Public-Link-Only | —（链接见 links.md） | https://rpg.ifi.uzh.ch/docs/teaching/2025/ |
| 讲座与习题课录像 | Login-Required | —（UZH OLAT 平台） | https://lms.uzh.ch/auth/RepositoryEntry/17827988425/CourseNode/106905460422724 |
| 历年公开讲座录像（YouTube 频道） | Public-Link-Only | —（本机访问超时未验证内容，见 links.md） | https://www.youtube.com/user/ailabRPG |
| 旧 ETH 域名 http://www.vamr.ethz.ch/ | Not-Found | —（DNS 无法解析，域名已下线） | http://www.vamr.ethz.ch/ |

空目录说明：`labs/`、`code/`、`notebooks/` 为空——该课没有独立的 lab 或 notebook 材料，习题代码均打包在各 exercise zip 中（`assignments/`），官方代码以 GitHub 组织 uzh-rpg 形式存在（非课程专用仓库）。

## Course Structure
14 周讲座（每周四 8:00–9:45）+ 每周习题课（12:15–13:45，自带笔记本，Matlab 或 Python）。主线安排：

- 第 1–3 周：引论（Visual Odometry 概览）→ 成像模型 → 相机标定（DLT/PnP），建立几何基础；
- 第 4–6 周：滤波与边缘检测 → 点特征检测子（Harris、SIFT）与描述子匹配；
- 第 7–10 周：多视图几何四连讲（双目/矫正/三角化 → 八点法 → P3P+RANSAC → Bundle Adjustment）——课程核心；
- 第 11–12 周：光流与 KLT 跟踪 → Place Recognition（BoW）+ Deep Learning 入门讲座；
- 第 13–14 周：Visual-Inertial 融合 → Event-based Vision；
- 穿插两次业界讲座（Skydio、NASA-JPL 火星直升机视觉导航）；
- 期末笔试（2027-01-07，闭卷）。

## Assignments
共 11 次编程习题 + 2 次数值练习 + 1 次可选习题，全部公开（statement 与 Matlab/Python 解答均无需登录）：

- Ex01 Augmented Reality 线框立方体（投影矩阵实践）
- Ex02 PnP 问题
- Ex03 Harris detector + descriptor + matching
- Ex04 SIFT detector + descriptor + matching
- Ex05 Stereo：rectification、epipolar matching、disparity、triangulation
- Ex06 Eight-Point Algorithm
- Ex07 P3P + RANSAC
- Ex08 Bundle Adjustment（本地已存 zip：含数据与 Python 骨架）
- Ex09 Lucas-Kanade tracker
- Ex10 Visual-Inertial fusion
- Ex11 Contrast Maximization for Event Cameras
- 数值练习 L04（filtering）与 L12（deep learning），附解答（本地已存）
- 可选习题：Place Recognition

特点：习题与当周 lecture 一一对应，"当周学算法、当周手写实现"，最终汇成 mini-project 所需的完整 VO 流水线模块。

## Labs
无独立 lab 体系；习题课（exercise sessions）即实验环节，学生在助教带领下当堂实现算法。本地 `labs/` 目录为空（见 Public Materials 说明）。

## Project
可选 mini-project（2–4 人组队，截止 2027-01-04）：在三个真实数据集（parking garage 停车场、KITTI 05、Malaga urban 07）上实现完整的单目 Visual Odometry 流水线，成绩最多提升期末总评 0.5。任务书与 Python/Matlab 数据加载脚本已下载到 `projects/`；数据集（208MB–2.4GB）超过本库 50MB 上限，仅记录官方链接。

## License
课程网页与 slides 未标注任何许可证 → `license_status: unknown`。所有材料仅供本地学习研究使用，**不重新分发**。`readings/Ch4_Autonomous_Mobile_Robots_Siegwart.pdf` 为 MIT Press 出版书籍章节（受版权保护，课程页公开托管），同样仅限个人研究、不可再分发。教师主页明确公开提供下载，视为作者授权的公开访问。

## Relevance to World Models
中等偏高。课程不直接讲 world model / 生成式模型，但提供了 world model 的"几何前身"：从图像到相机位姿与三维结构的完整状态估计链路（VO/VIO/SLAM），即具身智能体维护环境隐式模型的经典方法。L12b Deep Learning 与 event-based vision 涉及学习式感知，可作为几何模型与学习模型对比的基准。

## Relevance to Spatial Intelligence
非常高。这是空间智能的几何基石课程：透视投影、相机标定、多视图几何、三角化、bundle adjustment、稠密重建、位置识别——几乎覆盖"从 2D 观测恢复 3D 空间结构"的全部经典理论，且每讲都配手写实现习题，是把空间几何从"看懂"变成"会做"的稀缺公开资源。

## Relevance to Embodied AI
高。课程以移动机器人/无人机/AR 设备为载体（NASA 火星直升机、Skydio 无人机案例），VIO、SLAM、event camera 都是具身智能体实时感知与自定位的核心技术；mini-project 在 KITTI/Malaga 真实数据上构建 VO 系统，直接对应机器人在未知环境中的在线空间估计能力。

## What We Can Learn from This Course
1. 一条完整的"几何视觉"教学主线：从单个像素投影到完整 VO 系统，14 讲循序渐进、无跳步，可直接作为我们课程中"经典空间感知"模块的骨架。
2. "lecture–exercise–project"三位一体的设计：每周习题就是当周算法的手写实现，期末项目把 11 次习题的模块组装成 VO 流水线——极好的脚手架式作业设计范本。
3. 公开程度极高：slides、习题、解答、项目任务书、数据集全部免登录下载，证明一门顶校机器人课程可以完全开放运营（仅视频在 OLAT 登录墙后，但 YouTube 频道有历年录像）。
4. 几何与学习的衔接处理值得借鉴：先用 13 讲打牢几何与概率估计基础，再用一讲 Deep Learning tutorial 引入学习式方法，避免学生"只会调库不懂原理"。
5. 前沿传感器（event camera）与真实系统案例（火星直升机）进入本科/硕士课堂的方式：各用一讲 + 一次习题（contrast maximization）即可让学生上手。
