# CIS 6280: World Models

## University
University of Pennsylvania（宾夕法尼亚大学），Department of Computer and Information Science

## Instructor
- Instructor: **Jiatao Gu**（https://jiataogu.me/，jgu32@seas.upenn.edu）
- TAs: Mutian Tong、Yong-Hyun Park、Enxin Song（https://www.enxinsong.com/）、Xinyue Ai
- 上课时间：Tuesdays & Thursdays 12:00–1:29 PM，Room AGH 105A & 105B（Amy Gutmann Hall）
- Office hours: Thursdays 4:30–5:30 PM, AGH 423
- Section 001 · CRN 90075

## Semester / Year
Fall 2026（2026 秋季学期，首次开课的新课程）

## Official URL
- 课程主页（教师自建，公开）：https://jiataogu.me/cis6280-world-models/
- 学校课程目录（确认 CIS 6280 World Models 已列入）：https://catalog.upenn.edu/courses/cis/
- 注册系统条目（JS 动态页）：https://courses.upenn.edu/?details&srcdb=202630&crn=90075

## Course Description
官方简介（译）："本课程介绍世界模型（world models）——环境动态的学习表示与预测器，用于感知、规划与决策。我们研究它们如何在强化学习、视频与 3D、多模态智能体和机器人中支持控制与推理。"

课程明确声明"这不是一门 RL 课程"：教授理解和使用学习型世界模型所需的 RL 与控制机制，但覆盖范围还包括表示学习、生成建模、视频与 3D、机器人、语言与数字智能体。推荐先修：CIS 5190 / CIS 5200 或同等研究生级机器学习经验。

## Major Topics
课程以 **Representation（表示）/ Prediction（预测）/ Interaction（交互）** 三条主线贯穿（官方原话："recurring themes, not sequential phases"），按内容分为四个单元：

- **Latent World Models（L3–L10）**：环境与模拟器接口、状态空间模型（SSM/LGSSM/Kalman filtering）、自监督表示学习（对比学习、JEPA、掩码潜变量预测）、潜变量与对抗模型（VAE/ELBO/GAN）、Latent World Models（World Models 2018、自回归预测、动作条件）、用世界模型做规划与控制（MPC/CEM/MPPI）、Dreamer 式 imagination 中的 policy/value 学习、TD-MPC、model bias。
- **Generative & Video Models（L11–L14）**：Diffusion 与 Flow Matching、视频世界模型 I/II（时空生成架构、动作条件、长程 rollout、closed-loop drift）、Normalizing/Autoregressive Flows（TARFlow、STARFlow）。
- **Spatial & Physical Models（L15–L17）**：几何与 3D 表示（坐标系、深度、点云、occupancy、radiance fields、Gaussians）、4D 动态与交互（scene flow、tracking、dynamic occupancy、contact）、神经物理与学习物理动态（particle/mesh/fluid 模拟器、graph networks、neural operators）。
- **Robotics & Agents（L18–L22）**：机器人学习 I（sim-to-real、domain randomization、系统辨识）、机器人学习 II（VLA、latent actions、world-action models）、LLM as World Model（simulation、state tracking、grounding）、推理模型（deliberation、recurrence、test-time compute）、数字智能体世界模型（games、GUIs、software、multi-agent）。
- **收尾（L23–L25）**：世界模型评估（utility、controllability、calibration、OOD、intervention、drift、latency、failure）、期末项目展示、期末考。

## Public Materials

| Material | Status | Local Path | Original URL |
|---|---|---|---|
| Course homepage (snapshot HTML) | Downloaded | syllabus/course_homepage_snapshot.html | https://jiataogu.me/cis6280-world-models/ |
| Course calendar (.ics) | Downloaded | syllabus/cis6280_fall_2026_calendar.ics | https://jiataogu.me/cis6280-world-models/cis6280-fall-2026.ics |
| L01 World Models: An Overview (slides) | Downloaded | lectures/L01_world_models_overview.pdf | https://jiataogu.me/cis6280-world-models/lectures/lecture-01-world-models-overview.pdf |
| L02 History, Foundations, Probabilistic Formulation (slides) | Downloaded | lectures/L02_history_foundations_probabilistic_formulation.pdf | https://jiataogu.me/cis6280-world-models/lectures/lecture-02-world-models-history-foundations-probabilistic-formulation.pdf |
| L03 Environments, Simulators, and Rollouts (slides) | Downloaded | lectures/L03_environments_simulators_rollouts.pdf | https://jiataogu.me/cis6280-world-models/lectures/lecture-03-environments-simulators-rollouts.pdf |
| L04 State-Space Models (slides) | Downloaded | lectures/L04_state_space_models.pdf | https://jiataogu.me/cis6280-world-models/lectures/lecture-04-state-space-models.pdf |
| L04 LGSSM Handwritten Notes | Downloaded | lectures/L04_lgssm_handwritten_notes.pdf | https://jiataogu.me/cis6280-world-models/lectures/lecture-04-lgssm-handwritten-notes.pdf |
| L05 Self-supervised Representation Learning I (slides) | Downloaded | lectures/L05_representation_learning_i.pdf | https://jiataogu.me/cis6280-world-models/lectures/lecture-05-representation-learning-i.pdf |
| L06 Self-supervised Representation Learning II (slides) | Downloaded | lectures/L06_representation_learning_ii.pdf | https://jiataogu.me/cis6280-world-models/lectures/lecture-06-representation-learning-ii.pdf |
| L07 Latent-Variable and Adversarial Models (slides) | Downloaded | lectures/L07_generative_models_i.pdf | https://jiataogu.me/cis6280-world-models/lectures/lecture-07-generative-models-i.pdf |
| L08 Latent World Models (slides) | Downloaded | lectures/L08_latent_world_models.pdf | https://jiataogu.me/cis6280-world-models/lectures/lecture-08-latent-world-models.pdf |
| L09 Planning and Control with World Models (slides) | Downloaded | lectures/L09_planning_control_world_models.pdf | https://jiataogu.me/cis6280-world-models/lectures/lecture-09-planning-control-world-models.pdf |
| L01–L07 Interactive HTML decks (reveal.js) | Downloaded | lectures/interactive/L01–L07_interactive_deck.html | https://jiataogu.me/cis6280-world-models/lectures/lecture-01/ … lecture-07/ |
| L08/L09 interactive decks | Not-Found | —（仅 PDF 公开，deck 页面 404） | https://jiataogu.me/cis6280-world-models/lectures/lecture-08/ |
| L10–L23 slides/notes | Not-Found | —（尚未发布，课程进行中，随学期更新） | — |
| Syllabus（独立 PDF） | Not-Public | —（所有信息在主页，无单独 syllabus PDF；评分细则标注 "to be announced"） | https://jiataogu.me/cis6280-world-models/#logistics |
| Assignments 1–3 题目文件 | Login-Required | —（"Specifications and grading weights are posted before each release"，推测在 Canvas 发布） | https://canvas.upenn.edu/ |
| Final project rubric/格式 | Login-Required | —（"The rubric, team policy, and submission format are posted before proposals are due"） | https://canvas.upenn.edu/ |
| Lecture videos | Not-Public | —（无公开视频；Zoom 链接发在 Canvas） | — |
| UPenn catalog 课程条目 | Public-Link-Only | — | https://catalog.upenn.edu/courses/cis/ |

空目录说明：`assignments/`、`labs/`、`notebooks/`、`code/`、`projects/` 当前为空——作业/项目规格需登录 Canvas，L10 之后材料尚未发布；`readings/` 为空，因为课程 reading list 全部为外链（见 links.md），未批量镜像第三方版权材料。

## Course Structure
- 共 **25 个 session**：23 讲 + 1 次期末项目展示（Dec 01）+ 1 次期末考（Dec 03），另有 4 个确认的停课日（秋假、COLM 2026 会议、感恩节）和 1 个暂定取消日。
- 内容分 4 个单元块（见 Major Topics），三条主线 Representation / Prediction / Interaction 贯穿全学期，后期应用单元（3D、机器人）把三条线重新汇合。
- 每周 2 次课（周二/周四），每次 90 分钟。
- 已发布材料：L01–L09 PDF slides、L01–L07 交互式 HTML 讲义（reveal.js deck，含图片外链）、L04 手写笔记。

## Assignments
3 次作业（规格均未公开，发布在 Canvas，需登录）：
- **Assignment 1**：Out Sep 10 → Due Sep 24
- **Assignment 2**：Out Sep 30 → Due Oct 19
- **Assignment 3**：Out Oct 21 → Due Nov 18

从发布时间对应进度推断（A1 对应 L1–L8：环境/SSM/表示学习/生成模型；A2 对应 L9–L13：规划/Dreamer/diffusion/视频；A3 对应 L14–L19：flows/3D/机器人），大概率为 coding 为主（课程 heavily 引用 Gymnasium、dynamax 等 notebook 资源），但无法在未登录情况下确认题型、coding/theory 比例、是否需 GPU。

## Labs
无独立 lab 章节。课程 Resources 区提供多个公开 notebook/tutorial 作为动手材料：probml dynamax 的 Kalman Filter tracking notebook、Gymnasium basic usage、MBRL 教程等（见 links.md）。

## Project
期末项目（公开信息）：
- 主题："Explore a world-modeling method in one application domain, making the modeled state, transition, action interface, and evaluation criteria explicit."（在一个应用领域探索一种世界建模方法，显式说明 modeled state、transition、action interface 与评估标准）
- 四个建议方向：**Physical systems / Video & spatial worlds / Robot learning / Language & digital agents**
- 里程碑：Proposal Oct 14 → Checkpoint Nov 16（working system + early evidence + risks）→ Presentations Dec 01 → Report + code Dec 14
- Rubric、组队政策、提交格式：未公开（Canvas）。

## License
课程网站及 slides **未标注任何许可证** → `license_status: unknown`。本地副本仅供研究学习使用，**不重新分发**。外链 readings 各自受其来源许可约束（如 Sutton 论文 arXiv、Lilian Weng 博客等）。

## Relevance to World Models
**极高（high）**——这是目前已知全球第一门以 "World Models" 为整门课主题的研究生课程，从概率形式化（trajectory distribution、latent state、partial observability）到 SSM、表示学习、latent world models、规划、视频/3D/物理/机器人/LLM 世界模型全覆盖，且以 Representation / Prediction / Interaction 三主线组织，是本知识库最直接的结构蓝本。

## Relevance to Spatial Intelligence
**高（high）**——L15–L17 三个 lecture 专门讲 Spatial World Models（3D 表示、4D 动态、neural physics），且 Resources 区收录 Fei-Fei Li "From Words to Worlds"、World Labs taxonomy、Marble、TED 2024 spatial intelligence 演讲等，明确把 spatial intelligence 纳入 world model 框架。

## Relevance to Embodied AI
**高（high）**——L18–L19 覆盖 sim-to-real、VLA、world-action models、video pretraining for robots；L22 数字智能体；Resources 收录 DayDreamer（物理机器人 world model）、DINO-WM、V-JEPA 2 等 embodied 系统。

## What We Can Learn from This Course
1. **课程组织范式**：以"表示/预测/交互"三主线而非技术栈顺序组织世界模型课程，四个单元块（latent → generative/video → spatial/physical → robotics/agents）可直接借鉴为本开源课程的骨架。
2. **概率化起手**：L2 从 trajectory distribution、partial observability、one-step vs rollout objective 形式化世界模型，L4 用 LGSSM/Kalman 建立经典基准——避免了一上来就堆深度学习模型的常见缺陷。
3. **经典与现代并置**：World Models (2018) 与 Dreamer/TD-MPC、VAE/GAN 与 Diffusion/Flow、LGSSM 与 learned latent dynamics 的对比教学路径清晰。
4. **评估独立成讲**：L23 把 utility、calibration、OOD、drift、latency、failure mode 作为独立一讲，呼应本课程关注的 evaluation 专题。
5. **项目设计**：final project 要求"显式说明 state/transition/action interface/evaluation"，是训练学生把模糊的世界模型概念落成可评估系统的良好约束模板。
6. **互动讲义形式**：reveal.js 交互式 HTML slides 是开源课程材料发布的好形式（本地已存档 L01–L07）。
7. **资源整合**：Resources 区分四类（essays / tutorials / talks / systems & demos），是世界模型领域优质外链的策展清单。
