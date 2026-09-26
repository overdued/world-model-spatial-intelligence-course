# Spatial Intelligence 知识主题图谱（25 节）

> 本文档把 Spatial Intelligence（空间智能）相关知识整理为 25 个主题节。每节包含：定义与要点、11 门调研课程中的覆盖位置（精确到 lecture / assignment / 研讨）、1–3 篇确认真实存在的代表论文。
>
> 课程代号约定与 `world_model_topics.md` 一致：
>
> | 代号 | 课程 |
> |---|---|
> | **CIS6280** | UPenn CIS 6280 World Models（Fall 2026，Jiatao Gu） |
> | **CS231A** | Stanford CS231A（Spring 2025，Savarese & Bohg） |
> | **CMU 16-825** | CMU Learning for 3D Vision（Tulsiani，26 讲） |
> | **MIT VNAV** | MIT 16.485 VNAV（Carlone，OCW Fall 2020） |
> | **VAMR** | ETH/UZH Vision Algorithms for Mobile Robotics（Scaramuzza） |
> | **UCSD WI22** | UCSD Machine Learning Meets Geometry（Hao Su，Winter 2022；本机仅链接记录，信息以课程主页为准） |
> | **Berkeley CS294-173** | UC Berkeley Learning for 3D Vision（Kanazawa，Fall 2020，seminar） |
> | **Cornell CS6672** | Cornell 3D Vision（Wei-Chiu Ma，Fall 2024） |
> | **TUM DL4SpatialAI** | TUM Deep Learning for Spatial AI（Cremers 组，SS2026） |
> | **Columbia Spatial AI** | Columbia GSAPP Spatial AI（建筑/计算设计视角） |
> | **Harvard SCI-6512** | Harvard GSD Spatial Intelligence（人本/智能环境视角） |
>
> 空间智能在本知识库中有两条互补线索：**几何-机器人线索**（CS231A / MIT VNAV / VAMR，从投影几何到 SLAM）与**学习-生成线索**（CMU 16-825 / Berkeley / Cornell / UCSD / TUM，从学习到神经表示到生成式 3D）；CIS6280 把两者收进 world model 框架；Columbia / Harvard 提供人本与建筑语境的对照。

---

## 1. Geometry（几何基础）

空间智能的数学起点：刚体变换、旋转表示（旋转矩阵/欧拉角/四元数）、Lie 群 SO(3)/SE(3)、齐次坐标与射影几何。要点：旋转参数化的奇异性、流形上的运算（指数/对数映射）、坐标系约定的纪律性。

- **覆盖课程**：MIT VNAV L02–L05（3D Geometric Basics、Lie Groups and Distances，数学深度最强）；CS231A L02–L05；VAMR L02–L03（含 Camera Notation Tutorial）；Cornell CS6672 W1–W2（image formation、epipolar geometry）；UCSD WI22（Curve/Surface Theory、Rotation and SO(3)）。
- **代表论文**：（本主题的公认参考为教材 Hartley & Zisserman《Multiple View Geometry in Computer Vision》(2004)，非单篇论文。）

## 2. Camera Model（相机模型）

世界到图像的观测模型：针孔模型、内参/外参、畸变、标定（DLT、棋盘格）、PnP 位姿求解。要点：投影矩阵的分解、标定的数值稳定性、从灭点/单视图线索恢复内参。

- **覆盖课程**：CS231A L02–L03（Camera Models、Calibration）与 PS1（仿射相机标定、灭点求内参）；VAMR L02–L03（透视投影、DLT、PnP/P3P）与 Ex01–Ex02；CMU 16-825 L03（Image Formation + PyTorch3D）；Cornell CS6672 W1。
- **代表论文**：Tsai (1987) *A Versatile Camera Calibration Technique for High-Accuracy 3D Machine Vision Metrology*；Zhang (2000) *A Flexible New Technique for Camera Calibration*。

## 3. Multi-view Geometry（多视图几何）

两个及以上视角之间的几何约束：对极几何、essential/fundamental matrix、八点法、triangulation、stereo rectification、P3P+RANSAC、Bundle Adjustment。要点：最小求解器（minimal solvers）、退化构型、全局优化（BA）的稀疏结构。

- **覆盖课程**：VAMR L07–L10（多视图几何四连讲，配 Ex05–Ex08 手写实现）；CS231A L05–L07 与 PS2（八点法、Tomasi-Kanade 因子分解、SfM 三角化）；MIT VNAV L14–L15（two-view geometry、Nistér 5-point、RANSAC）；Cornell CS6672 W1–W2。
- **代表论文**：Longuet-Higgins (1981) *A Computer Algorithm for Reconstructing a Scene from Two Projections*；Hartley (1997) *In Defense of the Eight-Point Algorithm*；Nistér (2004) *An Efficient Solution to the Five-Point Relative Pose Problem*。

## 4. Depth（深度）

从图像恢复逐像素深度：立体匹配、单目深度（监督/自监督/基础模型）、深度的尺度歧义。要点：视差-深度关系、光度一致性自监督、相对深度 vs 度量深度。

- **覆盖课程**：CS231A L06（Stereo）、L11–L12（Monocular Depth、学习型立体，含 Depth Anything / Foundation Stereo）与 PS3（有监督/无监督单目深度）；CMU 16-825 L04（Single-view 3D: Depth）；Berkeley CS294-173（Supervised 2.5D、Training with Multi-view 自监督深度）；Cornell CS6672（single image depth estimation）；Columbia Spatial AI（CV 周的 depth estimation 应用层）。
- **代表论文**：Eigen, Puhrsch & Fergus (2014) *Depth Map Prediction from a Single Image using a Multi-Scale Deep Network*；Godard et al. (2017) *Unsupervised Monocular Depth Estimation with Left-Right Consistency*；Ranftl et al. (2020) *Towards Robust Monocular Depth Estimation: Mixing Datasets for Zero-Shot Cross-Dataset Transfer*（MiDaS）。

## 5. Point Cloud（点云）

无序点集的表示与处理：PointNet 族的置换不变性、点云分类/分割/检测、采样与分组（FPS、ball query）、点云作为自动驾驶主传感器数据。

- **覆盖课程**：CMU 16-825 L18（PointNet、Point Transformer、VoteNet、PointPillars）与 A5（PointNet 分类/分割 + 鲁棒性分析）；UCSD WI22（Point Cloud Processing、3D Backbone Networks）；Berkeley CS294-173（Sensed 3D 点云检测）。
- **代表论文**：Qi et al. (2017) *PointNet: Deep Learning on Point Sets for 3D Classification and Segmentation*；Qi et al. (2017) *PointNet++: Deep Hierarchical Feature Learning on Point Sets in a Metric Space*。

## 6. Mesh（网格）

显式曲面表示：顶点-边-面结构、mesh 上的卷积与学习、可微网格渲染、从图像恢复 mesh（形变模板或直接预测）。

- **覆盖课程**：CMU 16-825 L19（SyncSpecCNN、MeshCNN）与 A2（单视图→mesh 重建）；UCSD WI22（Mesh and Point Cloud Representations、Learning-based Mesh Processing）；Berkeley CS294-173（Learning Meshes + Texture：CMR；Differentiable Renderers：Soft Rasterizer）。
- **代表论文**：Wang et al. (2018) *Pixel2Mesh: Generating 3D Mesh Models from Single RGB Images*；Kanazawa et al. (2018) *Learning Category-Specific Mesh Reconstruction from Image Collections*（CMR）。

## 7. Occupancy（占据表示）

把空间表示为"哪里被占据"：voxel grid、occupancy network 的连续隐式占据函数、动态占据（dynamic occupancy）。要点：分辨率 vs 内存权衡、占据与 free space 对导航/避障的直接可用性。

- **覆盖课程**：CMU 16-825 L02（3D 表示）与 L05（Occupancy Networks 单视图物体重建）、A2（voxel 重建）；CIS6280 L15–L16（occupancy、dynamic occupancy 作为 spatial world model 的表示选项）；MIT VNAV L25（Dense 3D Reconstruction 的体素管线）。
- **代表论文**：Mescheder et al. (2019) *Occupancy Networks: Learning 3D Reconstruction in Function Space*；Hornung et al. (2013) *OctoMap: An Efficient Probabilistic 3D Mapping Framework Based on Octrees*。

## 8. NeRF（神经辐射场）

用 MLP 表示场景的密度与颜色场，体渲染实现可微新视角合成。要点：positional encoding、体渲染方程的可微实现、每个场景一次优化（per-scene optimization）的局限。

- **覆盖课程**：CS231A L16；CMU 16-825 L08–L09（体渲染推导 + NeRF）与 A3（手写可微体渲染 + 训练 NeRF）；Berkeley CS294-173（View Synthesis：NeRF/NeRF-W，Matt Tancik 客串）；Cornell CS6672（NeRF + BARF 研讨）；UCSD WI22（NeRF 单元）。
- **代表论文**：Mildenhall et al. (2020) *NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis*。

## 9. Gaussian Splatting（高斯泼溅）

用各向异性 3D 高斯集合显式表示场景，可微光栅化实现实时渲染。要点：投影-排序-alpha blending 管线、自适应密度控制、相对 NeRF 的训练/渲染速度优势。

- **覆盖课程**：CS231A L17（2025 年新加入）；CMU 16-825 L11 与 A4（纯 PyTorch 手写 3DGS 光栅化器 + SDS 扩散引导优化）；Cornell CS6672（3DGS 研讨）；CIS6280 L15（Gaussians 作为 spatial world model 表示）。
- **代表论文**：Kerbl et al. (2023) *3D Gaussian Splatting for Real-Time Radiance Field Rendering*。

## 10. Neural Field（神经场）

更广义的连续场表示：以坐标为输入的神经网络表示任意信号（形状 SDF、颜色、密度）。要点：隐式表示的连续性优势、频谱偏差与编码、神经场作为"可微世界状态"的统一抽象。

- **覆盖课程**：CMU 16-825 L10（Neural Implicit Surfaces：NeuS、VolSDF、IDR）；Cornell CS6672（differentiable rendering、implicit neural nets；DeepSDF 研讨）；Berkeley CS294-173（Implicit Differentiable Renderers：SRN、DVR、IDR）；CIS6280 L15（radiance fields）。
- **代表论文**：Park et al. (2019) *DeepSDF: Learning Continuous Signed Distance Functions for Shape Representation*；Sitzmann et al. (2020) *Implicit Neural Representations with Periodic Activation Functions*（SIREN）。

## 11. 3D Reconstruction（三维重建）

从图像/传感器恢复场景 3D 结构的总问题：SfM、MVS、体素雕刻、单/多视图学习重建、前馈式重建基础模型。要点：经典管线（COLMAP）vs 学习管线（DUSt3R/VGGT）的范式迁移。

- **覆盖课程**：CS231A L07（SfM）、L08（Active/Volumetric Stereo）与 PS2/PS3（SfM 三角化、Space Carving）；CMU 16-825 L05–L07、L14–L15（单视图重建、多视图 Transformer：VGGT）；Berkeley CS294-173（COLMAP MVS、单视图重建）；Cornell CS6672（deep MVS、DUSt3R）；UCSD WI22（3D Reconstruction、Learning-based MVS）；TUM DL4SpatialAI（VGGT 3D/4D 重建）。
- **代表论文**：Schönberger & Frahm (2016) *Structure-from-Motion Revisited*（COLMAP）；Schönberger et al. (2016) *Pixelwise View Selection for Unstructured Multi-View Stereo*。

## 12. 4D Reconstruction（四维重建）

动态场景重建：3D + 时间。要点：非刚性形变建模（形变场）、动态场景的观测不足问题、从单目视频恢复动态几何。

- **覆盖课程**：Berkeley CS294-173（Non-rigid Reconstruction：DynamicFusion、ElasticFusion；参数化人体 SMPL/SPIN）；CMU 16-825 L13（Nerfies、Neural Scene Flow Fields）；TUM DL4SpatialAI（3D/4D reconstruction、BA-Track 动态场景 BA）；CIS6280 L16（4D 动态）。
- **代表论文**：Newcombe, Fox & Seitz (2015) *DynamicFusion: Reconstruction and Tracking of Non-Rigid Scenes in Real-Time*；Park et al. (2021) *Nerfies: Deformable Neural Radiance Fields*。

## 13. Dynamic Scene（动态场景）

场景中运动的理解：光流、scene flow、运动分割、动态物体跟踪与重建。要点：2D 光流与 3D scene flow 的关系、刚性与非刚性运动的分解、动态性对静态假设（SfM/SLAM）的挑战。

- **覆盖课程**：CS231A L13（Optical and Scene Flow）；CIS6280 L16（scene flow、tracking、dynamic occupancy）；TUM DL4SpatialAI（SpatialTracker 3D 跟踪、dynamic object segmentation、动态场景 BA）；Cornell CS6672（correspondence、optical flow）；UCSD WI22（Deformation Models）。
- **代表论文**：Vedula et al. (1999) *Three-Dimensional Scene Flow*；Horn & Schunck (1981) *Determining Optical Flow*。

## 14. Pose Estimation（位姿估计）

估计相机或物体的 6-DoF 位姿：PnP、ICP、学习型 6D 物体位姿（关键点/稠密对应/投票）。要点：旋转估计的奇异性、对称物体位姿的歧义、位姿精度的度量（ADD/ADD-S）。

- **覆盖课程**：UCSD WI22（6D Pose Estimation：ICP、Umeyama、DenseFusion、PVN3D、NOCS）；Cornell CS6672（localization、6-DoF pose estimation）；VAMR L03（PnP/P3P）与 Ex02/Ex07；MIT VNAV Lab 6/8.5（运动估计与物体定位）；TUM DL4SpatialAI（camera/object pose estimation）。
- **代表论文**：Lepetit, Moreno-Noguer & Fua (2009) *EPnP: An Accurate O(n) Solution to the PnP Problem*；Umeyama (1991) *Least-Squares Estimation of Transformation Parameters Between Two Point Patterns*。

## 15. Tracking（跟踪）

跨帧维持目标/特征身份：KLT 特征跟踪、稠密跟踪（SLAM 前端）、3D 点跟踪。要点：跟踪 vs 检测每帧重识别、遮挡与漂移处理、跟踪作为动态 state estimation。

- **覆盖课程**：VAMR L11（Optical Flow and KLT）与 Ex09（Lucas-Kanade tracker 手写实现）；CS231A L11（Feature Tracking）；MIT VNAV L12–L13（Feature Detection and Tracking）与 Lab 5；TUM DL4SpatialAI（SpatialTracker：tracking 2D pixels in 3D space）。
- **代表论文**：Lucas & Kanade (1981) *An Iterative Image Registration Technique with an Application to Stereo Vision*；Tomasi & Kanade (1991) *Detection and Tracking of Point Features*。

## 16. SLAM（同时定位与建图）

在未知环境中同时估计自身轨迹与环境地图：formulation（滤波 vs 平滑）、factor graph、marginalization、增量求解（iSAM2）、回环检测、可证明正确与鲁棒 SLAM。要点：稀疏性利用、一致性与漂移、语义 SLAM 前沿。

- **覆盖课程**：MIT VNAV L23–L24（SLAM formulations、factor graphs、marginalization）、L28（incremental solvers、certifiably correct SLAM）与 Lab 9/9.5（ORB-SLAM3 vs Kimera-VIO 对比）；VAMR L13–L14（VIO、SLAM）与 mini-project（完整 VO）；Cornell CS6672（SLAM 讲授 + DROID-SLAM 研讨）；TUM DL4SpatialAI（VGGT 重建与 SLAM）。
- **代表论文**：Cadena et al. (2016) *Past, Present, and Future of Simultaneous Localization and Mapping: Toward the Robust-Perception Age*；Mur-Artal, Montiel & Tardós (2015) *ORB-SLAM: A Versatile and Accurate Monocular SLAM System*；Teed & Deng (2021) *DROID-SLAM: Deep Visual SLAM for Monocular, Stereo, and RGB-D Cameras*。

## 17. VIO（视觉惯性里程计）

视觉与 IMU 融合的状态估计：紧耦合 vs 松耦合、预积分、可观测性（尺度/重力方向）、在线标定。要点：IMU 噪声与 bias 建模、滤波（MSCKF）vs 优化（keyframe bundle adjustment）路线。

- **覆盖课程**：MIT VNAV L20（Visual and Visual-Inertial Odometry）与 Lab 9.5（Kimera-VIO 实测）；VAMR L13（Visual-Inertial Fusion）与 Ex10。
- **代表论文**：Mourikis & Roumeliotis (2007) *A Multi-State Constraint Kalman Filter for Vision-aided Inertial Navigation*（MSCKF）；Qin, Li & Shen (2018) *VINS-Mono: A Robust and Versatile Monocular Visual-Inertial State Estimator*。

## 18. Mapping（建图）

环境地图的构建与维护：度量地图（点云/体素/占据栅格）、拓扑地图、语义地图（metric-semantic understanding）。要点：地图表示服务于下游任务（导航/规划）、在线增量建图、地图的内存与实时性约束。

- **覆盖课程**：MIT VNAV L25（Dense 3D Reconstruction）、Metric-Semantic Understanding 单元；Columbia Spatial AI（Metric Spaces、Positioning、way-finding：建筑尺度的空间建图与可读性）；Harvard SCI-6512（智能环境的空间数据采集）。
- **代表论文**：Hornung et al. (2013) *OctoMap: An Efficient Probabilistic 3D Mapping Framework Based on Octrees*。

## 19. Spatial Memory（空间记忆）

对"到过哪里"的记忆与检索：place recognition（Bag of Visual Words / DBoW）、回环检测、长时序地图维护。要点：外观不变性（光照/季节/视角）、检索召回率 vs 误检回环的代价。

- **覆盖课程**：MIT VNAV L21–L22（Place Recognition、Bag of Words + object detection）与 Lab 8；VAMR L12a（Place Recognition BoW，可选习题）；Columbia Spatial AI（way-finding 与空间认知对照）。
- **代表论文**：Gálvez-López & Tardós (2012) *Bags of Binary Words for Fast Place Recognition in Image Sequences*（DBoW2）；Cummins & Newman (2008) *FAB-MAP: Probabilistic Localization and Mapping in the Space of Appearance*。

## 20. Object-centric Representation（物体中心表示）

把场景分解为物体槽位/实体的表示：slot attention、物体级 3D 表示、部件结构。要点：无监督场景分解的难度、物体中心表示对组合泛化与交互预测的价值。

- **覆盖课程**：CMU 16-825 L05（单视图物体重建）；UCSD WI22（Part-based 3D Analysis、Zero-shot 3D Understanding）；Berkeley CS294-173（category-level reconstruction、canonical surface mapping）。
- **代表论文**：Locatello et al. (2020) *Object-Centric Learning with Slot Attention*。

## 21. Affordance（可供性）

空间结构"支持什么动作"：可抓取部位、可交互部件、部件 mobility。要点：affordance 连接感知与行动、从几何到功能的推理、数据集与标注的稀缺。

- **覆盖课程**：UCSD WI22（Part-based Generative Model、Mobility、Human and Hand Pose——Hao Su 组在 part-based/mobility 方向的特色覆盖，补其他课程空白）；Berkeley CS294-173（6-DoF grasping 应用单元）；Columbia Spatial AI（建筑语境的空间-行为关系）。
- **代表论文**：Mo et al. (2019) *PartNet: A Large-Scale Benchmark for Fine-Grained and Hierarchical Part-Level 3D Object Understanding*。

## 22. Navigation（导航）

在空间中有目的地移动：几何导航（VO/VIO + 规划）、学习型导航（视觉导航、语言引导导航）、认知地图。要点：定位-建图-规划的耦合、探索策略、sim-to-real 迁移。

- **覆盖课程**：MIT VNAV（整门课即视觉导航：VO/VIO + 轨迹优化 + 无人机/racecar 平台）；CIS6280 L18–L19（机器人学习）；Columbia Spatial AI（way-finding / way-signalling：人本导航对照）。
- **代表论文**：Gupta et al. (2017) *Cognitive Mapping and Planning for Visual Navigation*；Anderson et al. (2018) *Vision-and-Language Navigation: Interpreting Visually-Grounded Navigation Instructions in Real Environments*。

## 23. Manipulation（操作）

用空间感知驱动物理操作：6-DoF 抓取、稠密对应（Dense Object Nets）、桌面场景理解。要点：抓取姿态的采样与评分、物体姿态不确定性对操作的影响、感知-控制闭环。

- **覆盖课程**：Berkeley CS294-173（Applications in Robotics：6-DoF grasping——6-DOF GraspNet、Grasping in the Wild、GraspIt!；Dense Object Nets 单元）；UCSD WI22（6D pose、mobility 与操作相关）；CIS6280 L18–L19（机器人学习侧）。
- **代表论文**：Mousavian et al. (2019) *6-DOF GraspNet: Variational Grasp Generation for Object Manipulation*；Florence, Manuelli & Tedrake (2018) *Dense Object Nets: Learning Dense Visual Object Descriptors By and For Robotic Manipulation*。

## 24. Simulation（仿真）

构建可交互的人工环境：物理引擎、传感器仿真（neural sensor simulation）、合成数据。要点：仿真保真度 vs 速度、reality gap、仿真作为训练数据来源与评估环境。

- **覆盖课程**：CIS6280 L03（Environments, Simulators, Rollouts）；Cornell CS6672（UniSim 研讨：neural closed-loop sensor simulator）；MIT VNAV（TESSE 模拟器贯穿 labs）；CMU 16-825 A4（渲染管线即简化仿真器）。
- **代表论文**：Todorov, Erez & Tassa (2012) *MuJoCo: A Physics Engine for Model-Based Control*；Yang et al. (2023) *UniSim: Learning Interactive Real-World Simulators*（CVPR 2024）。

## 25. Embodied Intelligence（具身智能）

感知-决策-行动在物理身体中的闭环：具身感知（egocentric）、主动感知（active perception）、sim-to-real、VLA 与世界-动作模型。要点：身体形态决定感知与行动空间、交互数据的价值、具身智能是空间智能与世界模型的交汇点。

- **覆盖课程**：CIS6280 L18–L19（sim-to-real、VLA、world-action models；Resources 含 DayDreamer、DINO-WM、V-JEPA 2）；MIT VNAV（无人机/racecar 平台的 embodied perception 训练）；VAMR（火星直升机/Skydio 真实系统案例）；Berkeley CS294-173（机器人抓取应用）；Harvard SCI-6512（人-空间交互：以人为"具身者"的对照视角）。
- **代表论文**：Brohan et al. (2023) *RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control*；Anderson et al. (2018) *Vision-and-Language Navigation: Interpreting Visually-Grounded Navigation Instructions in Real Environments*。

---

## 附：主题 × 课程覆盖矩阵（粗粒度）

| 主题簇 | CS231A | CMU 16-825 | MIT VNAV | VAMR | UCSD | Berkeley | Cornell | TUM | CIS6280 | Columbia/Harvard |
|---|---|---|---|---|---|---|---|---|---|---|
| 几何/相机/多视图 | ●● | ● | ●● | ●● | ● | ● | ●● | – | ● | – |
| 深度/重建 | ●● | ●● | ● | ● | ●● | ●● | ●● | ●● | ● | – |
| 点云/网格/占据 | – | ●● | ● | – | ●● | ● | ● | ● | ● | – |
| NeRF/3DGS/神经场 | ●● | ●● | – | – | ● | ●● | ●● | ● | ● | – |
| 4D/动态场景 | ● | ●● | – | – | ● | ●● | ● | ●● | ●● | – |
| 位姿/跟踪/SLAM/VIO | ● | – | ●● | ●● | ●● | – | ●● | ●● | ● | – |
| 建图/空间记忆 | – | – | ●● | ●● | – | – | – | ● | ● | ●(Columbia) |
| 物体中心/可供性 | – | ● | – | – | ●● | ●● | – | – | ● | ● |
| 导航/操作/仿真/具身 | ● | ● | ●● | ●● | ● | ● | ●(UniSim) | ● | ●● | ●(人本对照) |

（●● = 系统覆盖，● = 部分覆盖，– = 基本不覆盖。）
