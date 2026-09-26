# MIT 16.485 VNAV — 相关链接清单

HTTP 状态于 2026-09-26 验证（curl -sIL）。

## 官方主页与课程页面

| URL | 状态 | 备注 |
|---|---|---|
| https://vnav.mit.edu/ | 200 | 课程主页（2024 版，CC BY 4.0） |
| https://vnav.mit.edu/labs/ | 200 | labs 索引（2024 ROS2 版） |
| https://vnav.mit.edu/labs_2023/ | 200 | labs 归档（2023 ROS1 版） |
| https://vnav.mit.edu/acknowledgments.html | 200 | 致谢/许可页 |
| https://vnav.mit.edu/lectures | 404 | 失效：无独立 lectures 页（讲义在 OCW） |
| https://vnav.mit.edu/schedule | 404 | 失效 |
| https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/ | 200 | OCW 主页（Fall 2020） |
| .../pages/syllabus/ | 200 | syllabus（已存 HTML 快照） |
| .../pages/calendar/ | 200 | calendar（已存 HTML 快照） |
| .../pages/lecture-notes/ | 200 | 全部 lecture PDF 索引 |
| .../pages/lab-exercises/ | 200 | 全部 lab slides/notes 索引 |
| .../download | 200 | 整课 zip 下载（未下载，体积过大） |

## Lecture PDF 资源页（OCW，均 200；已下载的见 README 表格）

- https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/resources/mit16_485f20_lec01/ — L01 Introduction ✅
- .../mit16_485f20_lec02and03/ — L02–03 3D Geometric Basics ✅
- .../mit16_485f20_lec04/ — L04–05 Lie Groups ✅
- .../mit16_485f20_lec06/ — L06 slides（未下载）
- .../mit16_485f20_lec06notes/ — L06 Quadrotor Dynamics notes ✅
- .../mit16_485f20_lec07notes/ — L07 Quadrotor Control ✅
- .../mit16_485f20_lec08/ — L08 Trajectory Optimization 1 ✅
- .../mit16_485f20_lec09/ — L09 slides ✅
- .../mit16_485f20_lec09notes/ — L09 notes（未下载）
- .../mit16_485f20_lec10/ — L10 ✅
- .../mit16_485f20_lec11/ — L11 slides ✅
- .../mit16_485f20_lec11notes/ — L11 notes（未下载）
- .../mit16_485f20_lec12lec13/ — L12–13 slides ✅
- .../mit16_485f20_lec12notes/ — L12 notes（未下载）
- .../mit16_485f20_lec14/ — L14 2-view Geometry ✅
- .../mit16_485f20_lec15/ — L15 slides ✅
- .../mit16_485f20_lec15notes/ — L15 notes（未下载）
- .../mit16_485f20_lec16/ — L16 slides ✅
- .../mit16_485f20_lec16notes/ — L16 notes（未下载）
- .../mit16_485f20_lec17part1/ — L17 NLS part 1 ✅
- .../mit16_485f20_lec17part2/ — L17 NLS part 2 ✅
- .../mit16_485f20_lec18/ — L18 LM + Manifold ✅
- .../mit16_485f20_lec19/ — L19 Manifold Optimization ✅
- .../mit16_485f20_lec20/ — L20 VO/VIO ✅
- .../mit16_485f20_lec21/ — L21 Place Recognition ✅
- .../mit16_485f20_lec22/ — L22 BoW + Object Detection ✅
- .../mit16_485f20_lec23/ — L23 SLAM I ✅
- .../mit16_485f20_lec23notes/ — L23 notes（未下载）
- .../mit16_485f20_lec24/ — L24 SLAM II ✅
- .../mit16_485f20_lec25/ — L25 Dense 3D Reconstruction ✅
- .../mit16_485f20_lec26/ — L26 Beyond Cameras（未下载）
- .../mit16_485f20_lec27/ — L27 Open Problems（未下载）
- .../mit16_485f20_lec28/ — L28 Incremental SLAM Solvers ✅
- .../mit16_485f20_lec30/ — L30 Outlier-Robust 1 ✅
- .../mit16_485f20_lec31/ — L31 Outlier-Robust 2（未下载）
- .../mit16_485f20_lec32/ — L32 Outlier-Robust 3（未下载）

（省略号前缀均为 `https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/`）

## Lab 资源（OCW，均 200）

- .../resources/mit_16_485f20_lab1slides/ — Lab 1 slides ✅
- .../resources/mit_16_485f20_lab1notes/ — Lab 1 recitation notes ✅
- .../resources/mit_16_485f20_lab2slides/ — Lab 2 ROS slides ✅
- .../resources/mit_16_485f20_lab3slides/ — Lab 3 slides（未下载）
- .../resources/mit16_485f20_lab4slides/ — Lab 4 slides ✅
- .../resources/mit16_485f20_lab5slides/ — Lab 5 slides（未下载）
- .../resources/mit_16_485f20_lab6slides/ — Lab 6 slides ✅
- .../resources/mit16_485f20_lab7slides/ — Lab 7 slides（未下载）
- .../resources/mit16_485f20_lab8slides/ — Lab 8 slides（未下载）
- .../resources/mit_16_485f20_lab9slides/ — Lab 9 slides（未下载）

## Lab handouts（vnav.mit.edu，均 200，已存 HTML 快照到 labs/exercises_html/）

- https://vnav.mit.edu/labs/lab1/exercises.html — Linux/C++/Git
- https://vnav.mit.edu/labs/lab2/exercises.html — ROS 基础
- https://vnav.mit.edu/labs/lab3/exercises.html — 无人机轨迹跟踪（TESSE simulator）
- https://vnav.mit.edu/labs/lab4/exercises.html — 轨迹优化 / drone racing
- https://vnav.mit.edu/labs/lab5/exercises.html — 特征检测与跟踪（SIFT/LK）
- https://vnav.mit.edu/labs/lab6/exercises.html — 运动估计（5-point / Arun）
- https://vnav.mit.edu/labs/lab7/exercises.html — GTSAM
- https://vnav.mit.edu/labs/lab8/exercises.html — Place recognition（DBoW/YOLO）
- https://vnav.mit.edu/labs/lab8.5/exercises.html — Object localization（TUM RGB-D + GTSAM）
- https://vnav.mit.edu/labs/lab9/exercises.html — SLAM 理论
- https://vnav.mit.edu/labs/lab9.5/exercises.html — ORB-SLAM3 vs Kimera-VIO（EuRoC）

## 代码仓库与数据集（第三方公开，均 200）

- https://github.com/MIT-SPARK/Kimera — 教师实验室的 metric-semantic SLAM 系统
- https://github.com/MIT-SPARK/Kimera-VIO — Kimera VIO（Lab 9.5 使用）
- https://github.com/UZ-SLAMLab/ORB_SLAM3 — ORB-SLAM3（Lab 9.5 使用）
- https://github.com/dorian3d/DBoW2 — DBoW2（Lab 8 阅读）
- https://github.com/borglab/gtsam — GTSAM（Lab 7 使用）
- https://github.com/MichaelGrupp/evo — 轨迹评估工具（Lab 9.5 使用）
- https://vision.in.tum.de/data/datasets/rgbd-dataset — TUM RGB-D 数据集（Lab 8.5）
- https://projects.asl.ethz.ch/datasets/doku.php?id=kmavvisualinertialdatasets — EuRoC MAV 数据集（Lab 9.5）
- https://github.com/ethz-asl/mav_comm — ROS quadrotor 消息包（lab3 引用）

## 需登录 / 失效

- https://github.mit.edu/VNAV2024-submissions — **login-required**（MIT GitHub Enterprise，匿名访问返回 404 登录墙）；学生提交与课程 starter code 均经此分发
- https://vnav.mit.edu/lectures — **404**
- https://vnav.mit.edu/schedule — **404**
- Gradescope（作业提交平台）— login-required，无公开 URL 资源

## 许可证

- OCW 全部材料：CC BY-NC-SA 4.0
- vnav.mit.edu 网站内容：CC BY 4.0（页脚标注）
