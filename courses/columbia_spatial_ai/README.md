# Spatial AI

> **定位说明**：本课程属于 **Architecture / Computational Design** 方向（哥伦比亚大学建筑学院 GSAPP 的研究型研讨课），面向建筑师、城市设计师等"空间设计师"，讲授如何把 AI 应用于空间推理（spatial reasoning）。它**不是** Robotics 方向的 Spatial Intelligence 课程：没有机器人硬件实验、没有 SLAM、没有控制理论，robotics simulation 仅在课程描述中提及。请勿与 robotics 类课程混淆。

## University

Columbia University — Graduate School of Architecture, Planning and Preservation (GSAPP)

## Instructor

William Martin（设计技术专家，Spatial Pixel 联合创始人，曾任 Consensys AI 总监；Yale 建筑学硕士）。个人主页：https://awmartin.xyz/ ，邮箱 william.martin@columbia.edu 。2026 春季学期 TA：Sebastian Schloesser（据学生 LinkedIn 帖子）。

## Semester / Year

- 最近开课：2026 Spring（ARCH A6956-1，周三 11AM–1PM，Fayerweather 209）与 2026 Fall（Avery 115，2026-09-10 → 12-03）
- 历史开课：Spring 2024 / Spring 2025 等（课程编号均为 ARCH6956-1，3 学分，Full Semester）

## Official URL

- GSAPP 课程主页（2026 Fall section）：https://www.arch.columbia.edu/courses/12445-5933
- GSAPP 课程主页（其他 section）：https://www.arch.columbia.edu/courses/11389-5175 、https://www.arch.columbia.edu/courses/14172-4740 、https://www.arch.columbia.edu/courses/10593-6423
- 教师公开课程页（含 syllabus 与 materials，**本知识库的主要来源**）：https://awmartin.xyz/spatial-ai/course/
- Columbia CourseWorks (Canvas) 大纲页（公开可读）：https://courseworks2.columbia.edu/courses/237859/assignments/syllabus

## Course Description

研究型研讨课（research seminar）。"Spatial AI" 指应用于空间推理的人工智能——即导航、设计、使用和运营空间的逻辑。课程探讨 3D、physical 与 generative AI 如何为涉及高层空间推理的问题提供洞察、决策与预测。学生将：探究 generative / discriminative AI 的定义、能力与内部机制；研读关于"空间"概念的技术、建筑与计算理论经典文献；实验 LLM、计算机视觉、robotics simulations 等快速演化的 AI 方法；构建由 LLM 解释的语义模型与空间本体（spatial ontologies）；建立对技术的批判性与技术性理解；在人体、建筑与城市尺度上设想新的 spatial AI 方法。每周通过开放平台（Python、HuggingFace、OpenAI、Google AI Studio / Vertex AI）引入新的 AI 方法；每节课 = 短 lecture + 高强度 workshop + 学生展示；课程以 final project 收尾。2026 Fall 学期进一步聚焦："如何为 AI agent 赋予空间推理能力"，全学期用 AI agent 框架（Claude Code 等）逐步构建一个空间模拟（spatial simulation）。

## Major Topics

来自两个学期真实课表的 session 主题：

**2026 Spring（12 次课）**：What is Spatial AI?（Teachable Machine 城市观察）→ What is space? → What is AI? → Generative AI + Python（Colab）→ Depth Estimation（HuggingFace）→ Image Segmentation + Object Detection → Spatial Reasoning + LLM（Static Spatial Reasoning / Spatial & Vision Language Models）→ LLM Function Calling → Scene Reconstruction（划去，未实际进行）→ AI Agents → Semantic Models → Physical AI

**2026 Fall（12 次课）**：What is Spatial AI? → What is space?（Semantic models / "All the World's a Game"）→ What is AI?（prompting / context / skills / 部署到 GitHub Pages）→ Location + Occupancy（agents + obstacles）→ Agents + Traversal → Distance + Proximity → Position + Positioning → Topographies（Hindrances + Affordances）→ Perception（computer vision、spatial VLMs、depth estimation、object detection）→ Connectivity → Way-finding and way-signalling → Demo day

核心概念线：空间语义与本体（space concepts、semantic models、spatial ontology）、度量空间（metric spaces）、计算机视觉（分割、深度估计、VLM）、LLM 智能体（function calling、multi-modal agents）、空间模拟与寻路。

## Public Materials

| Material | Status | Local Path | Original URL |
|---|---|---|---|
| 课程大纲 2026 Fall（教师站，HTML→text） | Downloaded | syllabus/SpAI-syllabus-2026Fall.txt | https://awmartin.xyz/spatial-ai/course/syllabus/ |
| 课程大纲 2026 Spring（Canvas 公开页，HTML→text） | Downloaded | syllabus/SpAI-syllabus-2026Spring-canvas.txt | https://courseworks2.columbia.edu/courses/237859/assignments/syllabus |
| 课程进度+材料清单 2026 Fall | Downloaded | syllabus/SpAI-course-materials-schedule-2026Fall.txt | https://awmartin.xyz/spatial-ai/course/materials/ |
| 课程进度+材料清单 2026 Spring | Downloaded | syllabus/SpAI-course-materials-schedule-2026Spring.txt | https://awmartin.xyz/spatial-ai/course/materials2026sp/ |
| Workshop slides: Neural Network Playground（Google Slides→PDF） | Downloaded | lectures/SpAI-Workshop-Neural-Network-Playground.pdf | https://docs.google.com/presentation/d/1Vh-ARZckf5xauH5bN9RcMY7hC1pTfUcy2IiEsvQsqVo/edit |
| Reading: Space: A History — Space in Ancient Times (pgs 11-36) | Downloaded | readings/Space-A-History-Space-in-Ancient-Times.pdf | https://drive.google.com/file/d/1eK3jNrQrDJYa0QqeXmNSJDYlZ29rVv2r/view |
| Reading: Quartz 2018, Japanese words for "space" | Downloaded | readings/Quartz-2018-Japanese-Words-for-Space.pdf | https://drive.google.com/file/d/1picOg0YXpQTB9arNHPHP0STpd7pJ9mr9/view |
| Reading: Thrift 2003, Space: The Fundamental Stuff of Human Geography | Downloaded | readings/Thrift-2003-Space-Fundamental-Stuff-of-Human-Geography.pdf | https://drive.google.com/file/d/13LIfvHJdqhlx20tkOyGvELqv-LVqidZg/view |
| Reading: Russell & Norvig, AIMA 4ed Ch.1 | Public-Link-Only | —（Dropbox 被本机网络拦截，下载失败已记录） | https://www.dropbox.com/scl/fi/08dmwz16x1jxv6l758p3w/AI-A-Modern-Approach-4th-Edition-Chapter-01.pdf |
| Reading: Turing 1950 原文扫描版 | Public-Link-Only | —（同上，Dropbox 拦截） | https://www.dropbox.com/scl/fi/2hqmjazni0axuzlx4exkq/Computing-Machinery-and-Intelligence-Alan-Turing-SCAN.pdf |
| Reading: Turing 1950 OCR 版 | Public-Link-Only | —（同上） | https://www.dropbox.com/scl/fi/kivpl5gvueuty6lkwom8z/Turing-Computing-Machinery-and-Intelligence-1950-OCR-CLEAN.pdf |
| Reading: Algorithms for Decision Making Ch.1 | Public-Link-Only | —（同上） | https://www.dropbox.com/scl/fi/pjcravhoue61c0k217wf8/Algorithms-for-Decision-Making-Chapter-01.pdf |
| Assignment 1: Teachable Machine Images | Public-Link-Only | —（Dropbox 拦截） | https://www.dropbox.com/scl/fi/r166xpodpbpxgy9y2mros/SpAI-Assignment-Teachable-Machine-Images.pdf |
| Assignment 2: Depth Estimation + Colab Practice (PDF) | Public-Link-Only | —（Dropbox 拦截） | https://www.dropbox.com/scl/fi/frnp564zwo2m1vhz32b5z/SpAI-2026Sp-Depth-Estimation-Assignment.pdf |
| Assignment 2 配套 Notebook: depth_estimation.ipynb | Public-Link-Only | —（Dropbox 拦截） | https://www.dropbox.com/scl/fi/216m7k8yi10bigjssbpuw/SpAI_2026Sp_depth_estimation.ipynb |
| Assignment 3: Metric Spaces with SVLMs (PDF) | Public-Link-Only | —（Dropbox 拦截） | https://www.dropbox.com/scl/fi/kl1twfz2tcl5su575jylo/SpAI-2026Sp-Assignment-SVLM.pdf |
| Assignment 3 配套 Notebook: Spatial_VLM_Assignment.ipynb | Public-Link-Only | —（Dropbox 拦截） | https://www.dropbox.com/scl/fi/3ryxxg9ludkg07iubime9/SpAI_2026Sp_Spatial_VLM_Assignment.ipynb |
| Assignment 4: Function-Calling and AI Agents | Public-Link-Only | —（Dropbox 拦截） | https://www.dropbox.com/scl/fi/80perb0qien5w50wm7up5/SpAI-2026Sp-Assignment-Function-Calling.pdf |
| Assignment 5: Multi-Modal AI Agent Scaffold | Public-Link-Only | —（Dropbox 拦截） | https://www.dropbox.com/scl/fi/rri2qsc9qwlkfdz02jy4n/SpAI-2026Sp-Assignment-Multi-Modal-Agent-Scaffold.pdf |
| Assignment 5 配套代码: function_definitions.txt | Public-Link-Only | —（Dropbox 拦截） | https://www.dropbox.com/scl/fi/hkw70ie1qf2nzvxyb8b5x/function_definitions.txt |
| Reading: Taxonomy of Computable Space for Spatial AI（教师本人文章） | Public-Link-Only | —（网页，无 PDF） | https://awmartin.xyz/computable-space/ |
| CourseWorks 课程（作业提交、文件区等） | Login-Required | — | https://courseworks2.columbia.edu/courses/237859 |
| 课程 Discord | Public-Link-Only | — | https://discord.gg/5YDtupfwbH |
| 学生作品展示（如 Spring 2025 "Studio-In-Flux"） | Public-Link-Only | — | https://www.arch.columbia.edu/student-work/13322-studio-in-flux |
| 各周 lecture  slides（What is space? / What is AI? / Static Spatial Reasoning 等） | Not-Public | — | 材料页仅列出标题，未放出文件 |

注：`labs/`、`projects/` 子目录为空——该课无独立 lab 手册，project 为学生自主 final project（公开页只有学生作品展示链接）；`notebooks/`、`code/`、`assignments/` 目录暂为空，原因是 Dropbox 域名被本机网络中间盒拦截（TLS 连接重置 / 证书替换），12 个文件全部下载失败并已在 logs/download.log 记录 FAIL；这些链接本身是公开分享的，换网络环境后可按上表 URL 直接补下载。

## Course Structure

每学期 12 次课（每周一次，3 小时），固定三段式：**短 lecture + 高强度技术 workshop + 学生展示**，课间有 readings 与 tech prep。两条主线交织：

1. **空间概念线**：从"What is space?"出发，逐周引入 location/occupancy、distance/proximity、position/positioning、topography（hindrances/affordances）、connectivity、way-finding 等空间本体概念（2026 Fall 课表体现最完整）；
2. **AI 技术线**：Teachable Machine → 神经网络原理 → Python/Colab → HuggingFace 深度估计 → 图像分割/目标检测 → spatial VLM → LLM function calling → AI agents →（2026 Fall）全学期用 agent 框架搭建空间模拟，demo day 收尾。

## Assignments

2026 Spring 共 **5 个 assignment**（均有公开 PDF 说明，但 PDF 托管于 Dropbox，本次未能下载）：

1. **Teachable Machine Images**：用 Google Teachable Machine 做城市观察图像分类，无需编程；
2. **Depth Estimation + Colab Practice**：Colab notebook + HuggingFace 预训练深度估计模型，附 `.ipynb`；
3. **Metric Spaces with SVLMs**：用 spatial/vision language model 做度量空间判断，附 Colab notebook；
4. **Function-Calling and AI Agents**：LLM function calling 实践；
5. **Multi-Modal AI Agent Scaffold**：多模态 agent 脚手架，附 `function_definitions.txt` 代码文件。

特点：全部偏 **应用/轻型 coding**（调平台、改 notebook），无从零训练模型；理论部分通过 readings（AIMA、Turing、空间地理学文献）承担。2026 Fall 改为每周 workshop 累积式作业 + 期末 demo。

## Labs

无独立 labs。workshop 即课内实验（Neural Network Playground、深度估计、分割、SVLM、function calling、semantic models 等），依赖 Google Colab（学生可申请免费 Colab Pro）、HuggingFace、Claude Pro、Teachable Machine。

## Project

有 final project：课程"culminates in a final project that combines the methods introduced throughout the course"；2026 Fall 明确为全学期渐进构建一个 **AI agent 驱动的空间模拟**，最后一次课为 Demo day。学生作品公开展示于 GSAPP student-work 栏目（如 Spring 2025 的 "Studio-In-Flux"、"Trash to Breath" 等）。

## License

课程页面与教师站点**均未标注任何许可证**。license_status: **unknown**。所有材料仅保留本地研究副本，**不重新分发**。Readings 中 AIMA 章节、Turing 论文扫描件等为第三方版权材料的课程副本，尤其不可再分发。

## Relevance to World Models

**中低**。课程涉及"用 AI agent 构建空间模拟"（2026 Fall 主线）、"All the World's a Game" workshop 等与世界模型思想相近的元素，但完全不涉及 world models 文献脉络（Ha & Schmidhuber、视频预测、model-based RL），simulation 停留在 LLM agent 驱动的语义层面。

## Relevance to Spatial Intelligence

**高（但偏建筑/设计视角）**。整门课就是围绕 spatial reasoning 组织的：空间概念本体（location、distance、position、topology、connectivity、way-finding）、metric spaces、spatial VLM、深度估计与分割等空间感知技术，以及教师本人的 "Taxonomy of Computable Space" 框架。是理解"空间智能如何在非机器人领域（建筑/城市）被概念化"的稀缺样本。

## Relevance to Embodied AI

**低-中**。课程描述提到 robotics simulations 与 Physical AI（2026 Spring 最后一次 workshop 主题为 Physical AI），但无实体机器人实验、无嵌入式智能体训练；agents 是软件/模拟层面的 LLM agents。embodiment 只以"建成环境中的 AI"（自动驾驶、机器狗测绘、传感器）作为讨论背景出现。

## What We Can Learn from This Course

- 一种**以空间概念本体为主轴**组织 AI 教学的方式：每周一个空间概念（distance、position、connectivity、way-finding…）配一个 AI 技术 workshop，技术与概念互相激发，值得《World Models & Spatial Intelligence》课程借鉴其 syllabus 结构。
- **低门槛技术栈设计**：Teachable Machine → Colab + HuggingFace 预训练模型 → LLM function calling → agent scaffold，全程无需本地 GPU、无需训练模型，适合设计类学生；说明空间智能教学可以完全不依赖机器人硬件。
- **Spatial ontology + LLM 的结合**：用语义模型/空间本体让 LLM"理解"空间命题（computable space），是连接符号主义空间推理与现代 LLM 的实用路径。
- 批判性视角：把 AI 基础设施的环境代价、数据标注劳动、算法刻板印象等纳入 readings（TheVerge、Rest of World），技术课与媒介批判并重。
