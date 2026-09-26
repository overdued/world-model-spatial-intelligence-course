# 课程作业与实验设计分析

> 本文档逐课分析 11 门调研课程的作业/实验设计：数量、coding/theory 比例、notebook 使用、GPU 需求、数据集与模拟器、是否训练模型、是否涉及 3D 重建与机器人实验、是否有 final project、设计思想。最后总结哪些设计最适合我们自己的课程借鉴。
>
> 数据来源：各课程 `courses/<id>/metadata.json` 与 `README.md`（课程公开页面采集）。标注"未公开/需登录"的部分不做臆测。
>
> **版权说明**：MIT VNAV 讲义为 CC BY-NC-SA 4.0、lab handouts 为 CC BY 4.0；其余课程材料均未标注许可证。本文所有借鉴建议均针对**作业的结构与设计思想**，不复制任何题目内容。

---

## 1. 总览对比表

| 课程 | 作业数量 | coding/theory | Notebook | GPU 需求 | 数据集 | 模拟器 | 训练模型 | 3D 重建 | Robot 实验 | Final Project | 公开度 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **UPenn CIS6280** | 3 次 + project | 推测 coding 为主（未公开） | 有（外链 dynamax/Gymnasium/MBRL notebook） | 未公开 | 未公开 | Gymnasium 等（外链） | 大概率是 | 否（L15 后才涉及） | 否（理论） | ✅ 显式定义 state/transition/action/evaluation | 作业在 Canvas，不公开 |
| **Stanford CS231A** | 5 个 PS（PS0–PS4） | PS1 约 1:2，PS2–PS4 几乎全 coding + 书面分析 | ✅ .ipynb（Colab） | Colab 级即可（PS3 小网络） | 雕像 SfM 数据、CLEVR-D、Fashion-MNIST | 否 | ✅ PS3 训练深度模型 | ✅ PS2 三角化 / PS3 Space Carving | 否（PS4 为机器人场景仿真） | ✅ proposal→milestone→poster→report | PS 公开，starter code 公开链接 |
| **CMU 16-825** | 6 个（A0–A5） | ≈100% coding（仅 A3 有 10 分推导） | ❌（.py + main.py 约定） | 分级：A1 可 CPU，A2 可降级，A4 需 6–15.5GB 显存 | R2N2/ShapeNet、nerf_materials、点云（HuggingFace） | 否 | ✅ A2/A3/A4/A5 均训练 | ✅ A2/A3/A4 核心即重建/渲染 | 否 | ✅ proposal + poster + report | ✅ GitHub 全公开（含 starter code 与评分细则） |
| **MIT VNAV** | 9+2 个 labs（理论题 individual + 编程题 team） | 理论题（Gradescope/LaTeX）+ 编程题约 1:1 | ❌ | 否（CPU + Docker） | EuRoC、TUM RGB-D | ✅ TESSE | 否（YOLO 仅调用） | ✅ Lab 8.5 物体定位 / Lab 9.5 SLAM 对比 | ✅ 无人机/racecar 平台背景 | ✅ ICRA 格式报告 + demo | labs handouts CC BY 4.0 公开；starter code 仅 MIT 内部 |
| **ETH/UZH VAMR** | 11 编程 + 2 数值 + 1 可选 | 几乎全 coding（附官方解答） | ❌（Matlab/Python 脚本） | 否 | parking / KITTI 05 / Malaga 07 | 否 | ❌（仅 Ex12 数值题涉深度学习概念） | ✅ 习题模块最终组装成 VO | ❌（真实数据但无硬件） | 可选 mini-project（+0.5 总评） | ✅ 习题+解答+项目任务书全公开 |
| **UCSD WI22** | HW0–3（4 个）+ project | 未公开（Piazza） | 未公开 | 未公开 | 未公开 | 未公开 | 未公开 | 未公开 | 否 | ✅（35%） | ❌ 仅链接记录 |
| **Berkeley CS294-173** | 33 篇 paper review + project | 全 theory/阅读，零编程作业 | ❌ | 仅 project 自选需要 | 否 | 否 | 仅 project | 仅 project | 否 | ✅（50%，含 2 分钟 teaser video） | grading/policy 公开；review 在 bCourses |
| **Cornell CS6672** | 无公开作业 | — | ❌ | — | — | — | — | — | 否 | ✅ 按 workshop 论文标准（idea→proposal→check-in→展示） | ❌ 仅里程碑日期公开 |
| **TUM DL4SpatialAI** | 无传统作业，一学期一个研究项目 | 项目全 coding | 未公开 | ✅ 项目通常需要 | 项目相关 | 否 | ✅（复现+改进 SOTA） | ✅（VGGT 3D/4D 重建为首选方向） | 否 | ✅（中期+期末报告+书面报告，10 ECTS） | 项目主题公开，材料内部 |
| **Columbia Spatial AI** | 5 个轻 coding 作业 | 轻 coding + 概念 | ✅（Colab） | 否（Teachable Machine/HuggingFace，不训练模型） | 自带/在线 | 一次 robotics simulation workshop | ❌ 不训练 | 提及后删减 | ❌ 仅一次 workshop | 未公开 | 中（作业不公开） |
| **Harvard SCI-6512** | 未公开（Canvas 需 HarvardKey） | — | — | — | 传感器环境数据 | 否 | 未公开 | 否 | 否 | 未公开 | ❌ 仅课程描述 |

---

## 2. 逐课分析

### 2.1 UPenn CIS6280（World Models）

3 次作业（A1: Sep 10→24，A2: Sep 30→Oct 19，A3: Oct 21→Nov 18）+ final project，规格均在 Canvas 不公开。从发布时间对应进度推断：A1 覆盖 L1–L8（环境/SSM/表示学习/生成模型）、A2 覆盖 L9–L13（规划/Dreamer/diffusion/视频）、A3 覆盖 L14–L19（flows/3D/机器人），即**每个作业恰好缝合一个单元块**。课程 Resources 区外链 probml dynamax Kalman notebook、Gymnasium 教程、MBRL 教程，强烈暗示作业为 coding 为主。

**设计思想的公开可见部分在 final project**：要求学生"在一个应用领域探索一种世界建模方法，**显式说明 modeled state、transition、action interface 与 evaluation criteria**"，四个建议方向（physical systems / video & spatial worlds / robot learning / language & digital agents）对齐课程后三个单元。里程碑为 proposal → checkpoint（要求 working system + early evidence + risks）→ presentation → report+code。这是把模糊的世界模型概念落成可评估系统的约束模板——**接口显式化本身就是评分对象**。

### 2.2 Stanford CS231A

5 个 problem set，双轨提交：**Gradescope autograder 查代码 + 人工评 PDF 书面报告**，提供 .py starter code、.ipynb（Colab）与 LaTeX 模板。节奏上每个 PS 紧跟当周 lecture：PS1 射影几何证明 + 标定（理论:coding ≈ 1:2）→ PS2 八点法/Tomasi-Kanade/三角化（几乎全 coding，真实雕像数据重建）→ PS3 Space Carving + 表征学习 + 有/无监督单目深度（Colab GPU 可完成的小网络训练）→ PS4 EKF 跟踪 + 滤波融合 + 带学习逆观测模型的线性 KF。

设计思想有三层：(1) **手写核心算法**——八点法、三角化、space carving、EKF 都是从头实现而非调库；(2) **几何→学习→估计的平滑过渡**，PS4"滤波 + 学习观测模型"直接把课程两条后半主线缝合在一道题里；(3) **双轨制平衡了批改成本与理论深度**，并明确禁止把答案 push 到公开 GitHub，保护题目复用。

### 2.3 CMU 16-825

6 个作业全部公开在 GitHub（learning3d/assignment0–5），每 repo 自含 starter code、requirements.txt、按小题给分的 README。提交物 = 代码 zip（Canvas）+ **自建结果网页**（图文/GIF 可视化）。

递进结构：A0 网页流程练习 → A1 PyTorch3D 渲染基础（无训练）→ A2 单视图→voxel/point/mesh 三种表示重建（训练 ResNet18 编码器+解码器，手写 BCE/Chamfer/smoothness loss，**明确禁止用 PyTorch3D 现成 chamfer**）→ A3 手写可微体渲染 + NeRF + VolSDF sphere tracing → A4 纯 PyTorch 手写 3DGS 光栅化器 + SDS 扩散引导优化（6–15.5GB 显存，A5000 基准计时，附 unit test）→ A5 PointNet 分类/分割 + 鲁棒性分析。

设计思想：(1) **手写管线核心、库只做外围**——可微体渲染、sphere tracing、3DGS 光栅化全部手写；(2) **GPU 分级透明**——A1 可 CPU、A2 提供预提取特征降级、A4 明确标注显存档位；(3) **结果网页作为交付物**强迫可视化与失败案例分析（A5 要求 failure case 分析）；(4) 开放性加分题（"Do something fun"）留出创造空间。几乎 100% coding，理论深度通过"实现即理解"达成。

### 2.4 MIT VNAV

无独立 problem set；成绩 = labs 60% + project 25% + 参与 10% + 互评 5%。9+2 个 labs 全部 C++/ROS(2)/OpenCV/GTSAM 栈，每个 lab 含 **individual 理论题**（Gradescope，LaTeX 排版：Nistér 5-point 推导、Lie 群练习、信息矩阵稀疏模式分析"Spy Game"）与 **team 编程题**（github.mit.edu 提交）。

核心设计是**理论单元与 SOTA 系统 lab 的一一配对**：讲 5-point → Lab 6 做 2D-2D 运动估计并用 RPE 评估；讲 factor graph → Lab 7 用 GTSAM 建模；讲 place recognition → Lab 8 跑 DBoW + YOLO；讲 SLAM → Lab 9.5 在 EuRoC 上对比 ORB-SLAM3 与 Kimera-VIO 并用 evo 定量评估轨迹。平台真实（无人机/racecar/TESSE 模拟器），数据集真实（EuRoC、TUM RGB-D），评估定量（evo/RPE）。**学生用的不是玩具代码而是学界正在用的开源系统**，这是该课最独特的作业品质。

### 2.5 ETH/UZH VAMR

11 次编程习题 + 2 次数值练习 + 1 可选，全部公开且**附官方解答**（Matlab/Python，2025 起有 Python 模板），无 GPU 需求。习题与当周 lecture 一一对应：Ex01 投影立方体 → Ex02 PnP → Ex03/04 Harris/SIFT → Ex05 stereo → Ex06 八点法 → Ex07 P3P+RANSAC → Ex08 BA → Ex09 Lucas-Kanade → Ex10 VIO → Ex11 event camera contrast maximization。

设计思想是**脚手架式累积**：11 次习题各自是当周算法的手写实现，同时恰好是完整单目 VO 流水线的全部模块；期末可选 mini-project（parking/KITTI/Malaga 三个真实数据集）就是把这些模块组装成系统，最多提升总评 0.5——**平时作业即期末项目的零件**，学习动机闭环极佳。笔试压轴保证理论不被 coding 稀释。

### 2.6 UCSD WI22

HW0（5%）+ HW1–3（各 20%）+ final project（35%）+ 参与 5%，无期末考。先修要求强编程（Linux/Python/NumPy/PyTorch），课程目标是"能阅读和复现顶级 CV/CG 会议的 3D 论文"，故作业大概率是论文复现型 coding，但**全部发布于 Piazza 需登录，公开信息不足以分析题目细节**。

### 2.7 Berkeley CS294-173

**零编程作业**。唯一书面任务是 33 篇 paper reviews（去掉最低 10 篇计分，每次研讨课前提交，Overleaf 模板，≤2 页，4 档评分）。编程能力全部压到占 50% 的自选 project 上（要求 PyTorch/TensorFlow 高阶能力，能复现并扩展最新论文）。

设计思想：seminar 制把"作业"重新定义为**阅读纪律**——lead presenter 免交 review 的机制保证角色轮换公平；project 全流程（pitch → 2 页 CVPR proposal + 互评 → 中期 demo → final presentation → 4–6 页报告 + **2 分钟 teaser video**）中，teaser video 是明确写进课程目标的传播能力训练，明确鼓励学生学 Premiere/After Effects/iMovie。

### 2.8 Cornell CS6672

无任何公开作业。可见的只有 project 里程碑：W5 idea → W9 proposal → W12 check-in → W15 展示。项目按"**可被 workshop/conference 接收的技术论文**"标准设计。周四的 role-playing 论文研讨（学生扮演作者/审稿人讨论 BARF/DROID-SLAM/3DGS/DUSt3R/DreamFusion/UniSim）承担了其他课程作业的概念巩固功能。对自学者而言，其公开价值是选题脉络与论文清单，而非可执行的练习。

### 2.9 TUM DL4SpatialAI

无传统作业，一学期一个研究项目（10 ECTS，≤3 人组 + advisor）。项目选题由导师提出并**经同行评审**，方向围绕 VGGT/Bolt3D/SpatialTracker/RayZer/BA-Track 等 SOTA 开源模型。评估 = 中期 presentation（5 月）+ 期末 presentation（7 月）+ 书面报告（9 月底）。容量有限（SS2025 上限 30 人，需 CV + 成绩单申请）。

设计思想：**把作业升级为真实研究**——不做练习题，直接站在前沿代码库上做改进，目标产出是可发表级结果或硕士论文雏形。这种模式只对有完备先修（课程明确列出 CV II/III、ML for 3D Geometry 等先修课）的高年级学生可行。

### 2.10 Columbia Spatial AI

5 个轻 coding 作业：Teachable Machine（无需代码训练分类器）、Colab notebook、HuggingFace 模型调用等。**不训练模型、不需要 GPU、不调参**——作业目标是让建筑/设计背景学生体验"空间数据 → 模型 → 应用"的完整链路（分割/检测/深度/VLM/LLM agents），而非掌握模型内部。一次 robotics simulation / Physical AI workshop 是唯一的具身触点。

设计思想：**降低技术门槛以保留概念完整性**。对非 CS 受众，这是合理的取舍；它证明空间智能课程可以按受众裁剪作业的技术深度而不丢失主题结构。

### 2.11 Harvard SCI-6512

几乎无公开材料（作业在 Canvas 需 HarvardKey）。从课程描述推断，作业围绕传感器数据采集、多模态数据分析与设计研究展开，服务于"空间条件 → 人类结果"的预测与设计干预。作为对照样本即可，无作业设计可分析。

---

## 3. 借鉴总结：五种最值得引入我们自己课程的机制

综合各课分析，以下五种作业机制最适合借鉴。**注意：借鉴的是结构与思想，不复制题目内容**——除 MIT OCW（CC BY-NC-SA）与 vnav.mit.edu（CC BY 4.0）外，各课程材料均未标注开源许可证，题目文本、数据、代码不可直接使用；以下每条都可以也必须在自命题的前提下实施。

### 3.1 CMU 16-825：GitHub 公开 starter code + 结果网页机制

- **借什么**：每个作业一个独立公开 repo（starter code + requirements + 按小题给分的 README）；提交物包含自建结果网页（图文/GIF 可视化 + failure case 分析）；手写核心算法并明确禁用现成库实现；GPU 需求分级标注（CPU 可降级路径 + 显存档位）。
- **为什么值得借**：公开 repo 使课程可复用、可 fork、可社区维护；结果网页把"跑通"升级为"理解并展示"，且天然产出学生的个人作品集；GPU 分级让课程对无高端硬件的学习者开放。
- **如何落地**：我们自己的每个作业配一个 starter repo 与单元测试（仿 A4 的 unit_test），要求结果网页而非 PDF 报告，在 README 中写明显存/算力基准。

### 3.2 MIT VNAV："理论单元配 SOTA 系统动手 lab"

- **借什么**：每个理论 lecture 配对一个小 lab，lab 直接操作学界在用的开源系统（GTSAM/ORB-SLAM3/Kimera-VIO 级别的真实代码而非玩具实现），并要求定量评估（evo/RPE 式的轨迹误差指标）。
- **为什么值得借**：它同时训练"推导得来"与"跑得起来"两种能力，且让学生建立对 SOTA 系统真实行为（漂移、失败模式）的直觉——这正是 world model 课程最缺的评估文化。
- **如何落地**：在我们的课程中，为 dynamics/prediction/planning 单元各配一个"调用真实开源世界模型（如 Dreamer 式实现）+ 定量评估 rollout 误差/drift"的 lab；理论题与编程题分离提交（个人理论 + 团队编程的分制也可借鉴）。

### 3.3 Stanford CS231A：autograder + 书面报告双轨

- **借什么**：代码走 autograder（Gradescope 式，即时反馈、零批改成本），理论推导与分析走人工评 PDF；配 LaTeX 模板与 Colab notebook，Colab 级 GPU 上限作为硬件约束设计目标。
- **为什么值得借**：开源课程没有助教团队，autograder 是唯一可扩展的批改方式；书面轨保留了 autograder 无法评的理论深度；双轨让两种作业基因共存。
- **如何落地**：核心算法的正确性用单元测试/autograder 判定，"为什么这样设计/失败案例分析/结果解读"用短文报告人工（或同行互评）判定；所有作业以 Colab 免费档可完成为算力上限。

### 3.4 ETH/UZH VAMR：脚手架式习题组装成期末系统

- **借什么**：N 次平时习题各自实现一个算法模块，且这些模块恰好拼成期末项目（完整 VO 系统）的全部零件；习题附官方解答，mini-project 可选、加分制。
- **为什么值得借**：它把"作业—项目"两张皮变成一条流水线，学生在期末项目时已经握有全部模块，项目时间花在集成、调试与真实数据的行为分析上——这是系统能力最高效的训练路径；附解答的公开习题对自学者极其友好。
- **如何落地**：设计我们自己的作业序列时，先定义期末系统（例如"一个在模拟环境中做 latent-space MPC 的 world model agent"），再倒推出每次作业实现的模块（encoder / dynamics / planner / evaluator），最后一次作业即组装与端到端评估。

### 3.5 UPenn CIS6280：显式接口定义的 final project

- **借什么**：final project 的约束不是题目而是接口——必须显式定义 modeled state、transition、action interface、evaluation criteria；里程碑含 checkpoint（要求 working system + early evidence + risks）。
- **为什么值得借**：世界模型领域的概念泛滥（什么都被叫 world model）源于缺少接口纪律；把接口显式化作为评分对象，直接训练学生把模糊概念落成可评估系统的能力。checkpoint 要求"early evidence + risks"迫使学生在中期就直面可行性。
- **如何落地**：我们课程的 final project rubric 第一栏即为"state/transition/action/evaluation 四接口定义是否显式且自洽"，中期检查要求可运行系统与风险清单，而非仅文献综述。

### 3.6 组合建议

五种机制可以无冲突地组合进同一门课：

- **平时作业**：3.1 的 repo/网页机制 + 3.3 的双轨提交 + 3.4 的模块累积结构；
- **单元实验**：3.2 的"理论 + SOTA 系统 + 定量评估"lab；
- **期末项目**：3.4 组装成型的系统 + 3.5 的显式接口 rubric，选题池可参考 TUM 的"导师提出 + 同行评审"与 Berkeley 的"teaser video"作为可选加分项。

受众为研究生时保留 CS231A 式的理论题与 VAMR 式的手写实现；若需向非 CS 受众开放，可参考 Columbia 的轻 coding 作业形态做平行的"应用轨道"，但不应替代主轨道的技术深度。
