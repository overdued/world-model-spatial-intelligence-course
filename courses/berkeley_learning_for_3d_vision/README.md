# CS294-173 Learning for 3D Vision

## University
UC Berkeley（加州大学伯克利分校），EECS

## Instructor
Angjoo Kanazawa（kanazawa<at>berkeley.edu）
主页：https://people.eecs.berkeley.edu/~kanazawa/
客串讲座：Jitendra Malik（Sep 1, "How Humans Perceive 3D"）

## Semester / Year
Fall 2020（疫情期间全线上，seminar + 项目导向）
后续相关课程：Spring 2023 研讨课 https://sites.google.com/berkeley.edu/learningfor3d-seminar/home

## Official URL
https://sites.google.com/berkeley.edu/cs294-173/
- Schedule: https://sites.google.com/berkeley.edu/cs294-173/schedule（内嵌公开 Google Sheet）
- Grading: https://sites.google.com/berkeley.edu/cs294-173/grading
- Policy: https://sites.google.com/berkeley.edu/cs294-173/policy

## Course Description
我们生活在一个动态的 3D 世界中。虽然 2D 视觉任务（识别、检测、分割）进展巨大，但 2D 的本质使从图像感知 3D 世界充满挑战。随着深度学习的发展，learning-based 3D vision 近年迅速兴起，在图形学、机器人、内容创作、混合现实、生物识别等方向有大量应用。

课程目标（官方原文要点）：
- 掌握常见 3D 表示（3D representations）及其优缺点
- 具备批判性阅读最新 3D 论文的技术与历史背景
- 探索 3D 领域有价值的下一步问题
- 能在自己的研究中引入 3D inductive bias
- 学会有效展示并制作 project teaser video

课程形式：教师讲座 + seminar 式论文讨论（每篇论文由 3 名学生分别担任 lead / advocate / critic）+ 动手项目。无教材，参考书为 Hartley & Zisserman《Multiple View Geometry》、Ma/Soatto 等《An Invitation to 3-D Vision》、Szeliski《Computer Vision》第 11–14 章。先修：CS189，强烈建议 CS184 / CS194-26/294-26 / CS280 之一；是 CS294-167（Geometry and Learning for 3D Vision）的后续课。

## Major Topics
（从实际课表提取的真实主题，Fall 2020）
1. Course Introduction + Logistics（Week 1）
2. How Humans Perceive 3D（Guest: Jitendra Malik, Week 2）
3. History of 3D Computer Vision（Week 2）
4. 3D Essentials: Projection, 3D Reconstruction（Week 3）
5. 3D Essentials: Representations（Week 3）
6. Taxonomy of Learning for 3D Vision（Week 4）
7. Supervised 2.5D（单目深度：MiDaS 前身、FrozenPeople，Week 4）
8. Supervised 3D（单视图重建：What do 3D reconstruction algorithms learn?、GENRE、DeepSDF 客串、PIFu，Week 5）
9. Classic Multi-view Stereo / SfM（Furukawa PMVS、COLMAP，Week 5）
10. Training with Multi-view（单目深度自监督 Godard、DRC TPAMI'19，Week 6）
11. Classics pre-DL：3D Morphable Models（Dolphins）、Reconstructing Pascal VOC（Week 7）
12. Learning Meshes+Texture：CMR（Kanazawa 本人）、Canonical Surface Mapping（Week 7）
13. 无图像监督的对应关系学习：equivariant object frames、Unsup3D（对称可形变物体，Week 8）
14. Differentiable Renderers：Soft Rasterizer、Mitsuba 2、OpenDR、可微 Monte Carlo 光线追踪（Week 8）
15. Implicit Differentiable Renderers：SRN、Differentiable Sphere Tracing、DVR、IDR（Week 9）
16. View Synthesis：Light Field Rendering / Lumigraph、NeRF / NeRF-W（Matt Tancik 亲自讲）、Stereo Magnification MPI、SynSin、3D Photography（Weeks 9–10）
17. Non-rigid 3D Reconstruction：参数化（3D humans + faces 讲座、Blanz & Vetter morphable model、SPIN）与非参数化（DynamicFusion、ElasticFusion、SE3-Nets、Deep Closest Point）（Weeks 10–11）
18. Sensed 3D：visibility 3D detection、SceneCAD、点云（Week 12）
19. Generative Models：ShapeGF、Neural Mesh Flow、3D-GAN（Week 12）
20. Self-supervision / test-time optimization：Consistent Video Depth、Dense Object Nets（Week 13）
21. Applications in Robotics：6-DoF grasping（6-DOF GraspNet、Grasping in the Wild、GraspIt!）（Week 14）

## Public Materials

| Material | Status | Local Path | Original URL |
|---|---|---|---|
| 课程主页（含 Course Description） | Downloaded | syllabus/course_home_snapshot.md（文本快照） | https://sites.google.com/berkeley.edu/cs294-173/ |
| Schedule（完整课表 + 论文列表） | Downloaded | syllabus/schedule_snapshot.md（公开 Google Sheet 快照） | https://sites.google.com/berkeley.edu/cs294-173/schedule |
| Grading（评分与项目要求） | Downloaded | syllabus/grading_snapshot.md | https://sites.google.com/berkeley.edu/cs294-173/grading |
| Policy | Downloaded | syllabus/policy_snapshot.md | https://sites.google.com/berkeley.edu/cs294-173/policy |
| L01 Course Introduction slides | Public-Link-Only（链接公开 200，但 65.6MB > 50MB 上限，按规则跳过） | —（未保存） | https://drive.google.com/file/d/1iva5vI870S6pMhMKko8XumJOOGUvOpSO/view |
| L03 History of 3D Computer Vision | Downloaded | lectures/L03_history_of_3d_computer_vision.pdf | https://drive.google.com/file/d/16HAWmXKO9LOoD9rnPoM5lqlUOcMQoB84/view |
| L04 3D Essentials: Projection & Reconstruction | Downloaded | lectures/L04_3d_essentials_projection_reconstruction.pdf | https://drive.google.com/file/d/1Y1s6xSDcnB1Qzo2w3XWlFmoEKXbyoHks/view |
| L05 3D Essentials: Representations | Downloaded | lectures/L05_3d_essentials_representations.pdf | https://drive.google.com/file/d/1Q2O-HaMSOYfJrAo3YppfCm25dTBcZ-b0/view |
| L06 Taxonomy of Learning for 3D Vision | Downloaded | lectures/L06_taxonomy_of_learning_for_3d_vision.pdf | https://drive.google.com/file/d/1h32JGQ3lcFKU_OJSiYlmn7HnsNR6EFHb/view |
| L15 3D Humans + Faces lecture | Downloaded | lectures/L15_3d_humans_and_faces.pdf | https://drive.google.com/file/d/1uVP96_yt6REQPxp7Q1F2ccq9rypZU_fI/view |
| 学生研讨 slides：Differentiable Renderers（Oct 15） | Downloaded | lectures/student_slides_differentiable_renderers.pdf | https://docs.google.com/presentation/d/1_HMkN_KEaPehsewI14tNzOzczayhvPqGbe6NRW9EE-4/edit |
| 学生研讨 slides：无监督对应关系（Oct 13） | Downloaded | lectures/student_slides_unsupervised_correspondences.pdf | https://docs.google.com/presentation/d/1tj22tu-CfnwZs_k190MtLph8Xc43b2-RRW4li8mSU0Y/edit |
| 学生研讨 slides：Light Field Rendering（Oct 22） | Downloaded | lectures/student_slides_light_field_rendering.pdf | https://docs.google.com/presentation/d/1yioU0IDUYbykY06UfAH_ve3q3aJEmXYp29KgOSZQKxA/edit |
| 学生研讨 slides：6-DoF Grasping（Nov 24） | Downloaded | lectures/student_slides_6dof_grasping.pdf | https://docs.google.com/presentation/d/1IlAz0TBX1ewqV6mN1YK50_WQfIGROU--u1RuVDa2KX0/edit |
| 其余学生研讨 slides（9 个 Google Slides） | Login-Required / Not-Found（3 个导出 401；6 个已 410 Gone） | — | 见 links.md |
| Presentation Template（Google Slides） | Login-Required（导出 401） | — | https://docs.google.com/presentation/d/1EjigIPuUSyehTrayj-SdqpPmcdSFiZD5XRtgUcgbAgI/edit |
| Paper reviews 提交（bCourses） | Login-Required | — | https://bcourses.berkeley.edu/ |
| Lecture recordings | Not-Public（仅限注册学生） | — | 课程 webinar 链接（日历邀请） |
| 阅读论文（约 30 篇，arXiv / CVF open access 等） | Public-Link-Only（未下载，记录链接） | — | 见 links.md |

空子目录说明：`assignments/`、`labs/`、`code/`、`notebooks/`、`projects/` 留空——本课为 seminar 制，无编程作业 / lab / 官方代码 / notebook，项目为学生自选课题且无公开 starter code。

## Course Structure
- 15 周，每周 2 次课（Tue/Thu 11:30–13:00 PT）。
- 三条主线交替：教师基础讲座（Weeks 1–4 打基础：历史、投影/重建、3D 表示、taxonomy）→ 学生论文研讨（按主题单元推进）→ 项目里程碑（pitch → 中期 demo → final presentation）。
- 主题单元顺序：Supervised single-view（2.5D→3D）→ Multi-view（经典 MVS/SfM→可学习多视图）→ Single-image 重建（经典 morphable model→mesh/texture→无监督对应）→ Differentiable renderers（光栅化→隐式）→ View synthesis（light field→NeRF→MPI）→ Non-rigid（参数化人体/人脸→DynamicFusion）→ Grab bag（sensed 3D、生成模型）→ Applications（自监督、机器人抓取）。
- 评分：Project 50% / 每周 paper summaries 20% / 课堂 presentation 20% / 参与 10%，无期末考试。

## Assignments
无编程作业。唯一的书面任务是 **paper reviews（约 33 篇，去掉最低 10 篇计分）**：在每次学生研讨课前 11am 通过 bCourses（需 CalNet 登录）提交，使用 Overleaf 模板，最多 2 页，4 档评分（✅➕/✅/✅➖/0）。lead presenter 当天免交。

## Labs
无 lab / 无 notebook。课程不要求统一编程练习；编程能力要求体现在自选的 hands-on project 中（要求 PyTorch/TensorFlow 高阶能力，能复现并扩展最新论文）。

## Project
占成绩 50%，2 人一队，全流程：
1. 组队（Week 5 截止）→ 2. In-class pitch（Oct 1，1–2 页 slides 闪电演讲）→ 3. 2 页 CVPR 格式 proposal（Oct 16，互评 Oct 23）→ 4. 中期 update/demo（Nov 3–5，7 分钟/队）→ 5. Final presentation（Dec 8/10，RRR week）→ 6. 4–6 页 CVPR 格式 final report + 2 分钟 teaser video（Dec 15）。
明确鼓励学生用 Adobe Premiere/After Effects/iMovie 学习视频制作——"make a project teaser video" 是课程目标之一。

## License
未标注任何许可证（Google Sites 页面与 Google Drive slides 均无 license 声明）。
license_status: **unknown** —— 仅保留本地研究副本，**不重新分发**。阅读论文的版权归各出版方（arXiv 论文各有其 license，CVF open access 论文可公开访问）。

## Relevance to World Models
高。课程核心（从观测学习 3D 结构、NeRF/view synthesis、可微渲染、DynamicFusion 非刚性 4D 重建）正是 world model 的空间表征与"从部分观测预测未见视角/状态"能力的基础；SE3-Nets、自监督深度、test-time optimization 等单元直接讨论从数据学习世界动态模型。但以静态重建为主，缺少显式的 action-conditioned 未来预测。

## Relevance to Spatial Intelligence
极高。这是一门以 3D 空间理解为核心的课程：3D representations（mesh/point cloud/voxel/implicit）、多视图几何、SfM/MVS、单视图重建、人体/人脸参数化模型、动态场景重建，覆盖 spatial intelligence 的表征—重建—生成全链条。

## Relevance to Embodied AI
中。最后有机器人应用单元（6-DoF 抓取、Dense Object Nets 用于 manipulation），且 3D 感知是具身智能的前提；但课程没有 robot 实验、无 simulator、无 policy learning / planning 内容，具身部分仅是 application 视角。

## What We Can Learn from This Course
- **seminar 课程组织范式**：lead/advocate/critic 三角色的论文研讨机制 + 每周 summary + 去最低分，适合研究生专题课直接借鉴。
- **3D 视觉教学的知识谱系**：从人类 3D 感知（Malik）和历史脉络切入，先讲透 3D essentials（投影、表示）再进入 learning 方法，按"监督信号来源"（supervised → multi-view → single image → 无监督）组织文献，这个 taxonomy 本身就是一张领域地图。
- **里程碑式项目管理**：pitch → proposal 互评 → 中期 demo → final video + report，teaser video 要求值得引入我们自己的课程项目设计。
- **讲座 slides 质量高**：Kanazawa 的 4 个基础讲座（历史、投影/重建、表示、taxonomy）+ 人体讲座是现成的教学素材（仅限本地研究使用，不可再分发）。
- **2020 年时间点的文献快照**：正值 NeRF 诞生（Tancik 亲自来讲 NeRF-W），可用于讲授领域关键转折点。
