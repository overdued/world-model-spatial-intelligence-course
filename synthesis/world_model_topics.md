# World Model 知识主题图谱（25 节）

> 本文档把 World Model（世界模型）相关知识整理为 25 个主题节。每节包含：定义与要点、11 门调研课程中的覆盖位置（精确到 lecture / assignment）、1–3 篇确认真实存在的代表论文。
>
> 课程代号约定：
>
> | 代号 | 课程 |
> |---|---|
> | **CIS6280** | UPenn CIS 6280 World Models（Fall 2026，Jiatao Gu，23 讲） |
> | **CS231A** | Stanford CS231A Computer Vision: From 3D Perception to 3D Reconstruction（Spring 2025，Savarese & Bohg） |
> | **CMU 16-825** | CMU 16-825 Learning for 3D Vision（Tulsiani） |
> | **MIT VNAV** | MIT 16.485 Visual Navigation for Autonomous Vehicles（Carlone，OCW Fall 2020） |
> | **VAMR** | ETH/UZH Vision Algorithms for Mobile Robotics（Scaramuzza） |
> | **UCSD WI22** | UCSD Machine Learning Meets Geometry（Hao Su，Winter 2022） |
> | **Berkeley CS294-173** | UC Berkeley Learning for 3D Vision（Kanazawa，Fall 2020，seminar 制） |
> | **Cornell CS6672** | Cornell 3D Vision（Wei-Chiu Ma，Fall 2024） |
> | **TUM DL4SpatialAI** | TUM Deep Learning for Spatial AI（Cremers 组，SS2026，项目制） |
> | **Columbia Spatial AI** | Columbia GSAPP ARCH A6956 Spatial AI（建筑视角） |
> | **Harvard SCI-6512** | Harvard GSD Spatial Intelligence（人本视角） |
>
> CIS6280 是本图谱的直接结构蓝本：其三条主线 **Representation / Prediction / Interaction** 与四单元组织（Latent World Models → Generative & Video → Spatial & Physical → Robotics & Agents）覆盖了本图谱绝大多数主题；其余课程提供几何、空间表示与具身实现层的支撑。

---

## 1. State（状态）

世界模型建模的对象：环境在某一时刻的完整描述。要点包括 Markov 性质（state 是未来的充分统计量）、state 与 observation 的区分、belief state（部分可观下对 state 的概率分布）。经典地基是 Markov decision process / state estimation 理论。

- **覆盖课程**：CIS6280 L02（History, Foundations, Probabilistic Formulation：trajectory distribution、partial observability）、L04（State-Space Models：LGSSM、Kalman filtering、belief-state inference）；CS231A L14–L15（Optimal Estimation：把 state 作为滤波估计对象）；MIT VNAV L16（ML/MAP Estimation：状态作为估计变量）。
- **代表论文**：Kalman (1960) *A New Approach to Linear Filtering and Prediction Problems*。

## 2. Observation（观测）

智能体实际收到的信号：从 state 到 observation 的映射（observation model）、观测噪声、部分可观性（partial observability）与信息缺失下的 belief 维护。观测模型在经典滤波（观测方程）与 latent world model（decoder / observation likelihood）中是同一个抽象。

- **覆盖课程**：CIS6280 L02（partial observability 形式化）、L04（observation model）；CS231A L02–L03（相机模型是最基本的"世界→图像"观测模型）、PS4（带学习逆观测模型的 Kalman filter）；VAMR L13（Visual-Inertial Fusion：多传感器观测融合）；Harvard SCI-6512（sensors 与多模态数据采集，人本观测视角）。
- **代表论文**：Kaelbling, Littman & Cassandra (1998) *Planning and Acting in Partially Observable Stochastic Domains*。

## 3. Latent State（潜状态）

当真实 state 不可直接观测或维度太高时，用一个低维、学习出的 latent state 近似充分统计量。要点：latent 的可推断性（encoder/amortized inference）、latent 的可预测性（在 latent 空间 rollout）、latent 的信息瓶颈（保留什么、丢弃什么）。

- **覆盖课程**：CIS6280 L04（belief state 是经典 latent state）、L07（Latent-Variable & Adversarial Models：VAE/ELBO）、L08（Latent World Models：latent state + action-conditioned transition）；MIT VNAV L24（SLAM factor graphs 与 marginalization：结构化的 latent state 推断框架）。
- **代表论文**：Ha & Schmidhuber (2018) *World Models*；Hafner et al. (2019) *Learning Latent Dynamics for Planning from Pixels*（PlaNet）。

## 4. Representation Learning（表示学习）

学习 state/observation 的紧凑表示，使其保留预测与控制所需信息。要点：对比学习（contrastive）、自监督预测（masked prediction）、联合嵌入预测（JEPA：在表示空间而非像素空间预测）。"学什么是好表示"是 world model 的第一性问题。

- **覆盖课程**：CIS6280 L05–L06（Self-supervised Representation Learning I/II：contrastive、JEPA、masked latent prediction）；CS231A L10（Representations & Representation Learning，含 DINO 系列自监督）；CS231A PS3（Fashion-MNIST 自监督旋转预测小题）；Columbia Spatial AI（Computer Vision 周：分割/检测/深度作为表示工具）。
- **代表论文**：He et al. (2022) *Masked Autoencoders Are Scalable Vision Learners*（MAE）；Assran et al. (2023) *Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture*（I-JEPA）。

## 5. State Space Model（状态空间模型）

经典动态系统形式化：state transition + observation 两个方程，linear-Gaussian 情形（LGSSM）下 Kalman filter 给出闭式最优推断。要点：filtering / smoothing / prediction 三种推断、非线性扩展（EKF/UKF/particle filter）、与学习式 dynamics 的对照关系。

- **覆盖课程**：CIS6280 L04（State-Space Models：LGSSM、Kalman filtering、belief-state inference，附手写推导笔记）；CS231A L14–L15（Optimal Estimation：KF/EKF/UKF，flipped format）与 PS4（EKF 跟踪、KF+学习观测模型，是滤波与学习结合的直接训练）；MIT VNAV L16–L19（估计理论与非线性最小二乘是 SSM 推断的优化视角）。
- **代表论文**：Kalman (1960) *A New Approach to Linear Filtering and Prediction Problems*；Gu, Goel & Ré (2022) *Efficiently Modeling Long Sequences with Structured State Spaces*（S4，深度学习侧的 SSM 复兴）。

## 6. Dynamics Model（动力学模型）

条件分布 p(s' | s, a)：给定当前状态与动作，预测下一状态。要点：确定性 vs 随机 dynamics、解析模型（物理方程）vs 学习模型、one-step 误差与 compounding error、模型偏差（model bias）。

- **覆盖课程**：CIS6280 L08（Latent World Models：action-conditioned autoregressive prediction）、L10（model bias 显式讨论）、L17（Neural Physics：学习的物理动力学）；MIT VNAV L06（Quadrotor Dynamics：解析动力学模型的对照案例）。
- **代表论文**：Deisenroth & Rasmussen (2011) *PILCO: A Model-Based and Data-Efficient Approach to Policy Search*。

## 7. Predictive Model（预测模型）

更广义的预测器：预测未来观测、未来 reward、未来事件。要点：one-step vs multi-step vs rollout 目标、预测的时空分辨率权衡、预测作为自监督信号（"预测即学习"）。

- **覆盖课程**：CIS6280 L02（one-step vs rollout objective 形式化）、L08、L12–L13（Video World Models：帧级/视频级预测）、L05–L06（预测作为表示学习目标）；CS231A L13（Optical and Scene Flow：像素/点级的近期未来预测）。
- **代表论文**：Oh et al. (2015) *Action-Conditional Video Prediction using Deep Networks in Atari Games*。

## 8. Model-based RL（基于模型的强化学习）

用学到的 dynamics model 辅助策略学习：model 用于规划、用于生成想象轨迹（imagination）、或作为 policy 训练的 differentiable simulator。要点：DynA 式架构、model 与 value/policy 的耦合、model bias 对策略的毒害。

- **覆盖课程**：CIS6280 L09（Planning and Control with World Models）、L10（Policy & Value Learning with World Models：Dreamer、TD-MPC、model bias）。注：CIS6280 明确声明"这不是一门 RL 课程"，MBRL 只作为使用 world model 的机制讲授。
- **代表论文**：Sutton (1991) *Dyna, an Integrated Architecture for Learning, Planning, and Reacting*；Hafner et al. (2020) *Dream to Control: Learning Behaviors by Latent Imagination*（Dreamer）。

## 9. Planning（规划）

给定模型与目标，搜索动作序列。要点：搜索（tree search、MCTS）vs 轨迹优化（shooting）、离散 vs 连续动作空间、planning horizon 与计算预算。

- **覆盖课程**：CIS6280 L09（MPC、CEM、MPPI）；MIT VNAV L08–L10（Trajectory Optimization：minimum-snap 多项式轨迹，连续空间规划的经典形式）；VAMR 习题与 MIT VNAV Lab 4（轨迹优化动手实现）。
- **代表论文**：Kocsis & Szepesvári (2006) *Bandit Based Monte-Carlo Planning*（UCT/MCTS 的理论奠基）。

## 10. MPC（模型预测控制）

Receding-horizon 控制：每步用模型向前 rollout 有限时域、执行第一个动作、重新规划。要点：MPC 对模型误差的鲁棒性、采样式 MPC（CEM/MPPI）在 learned model 上的普适性、与 value learning 的结合（TD-MPC）。

- **覆盖课程**：CIS6280 L09（MPC、CEM、MPPI 与 world model 的结合）、L10（TD-MPC）；MIT VNAV L06–L07（Quadrotor geometric control：控制端的对照）。
- **代表论文**：Williams et al. (2017) *Information Theoretic MPC for Model-Based Reinforcement Learning*（MPPI）。

## 11. Latent Planning（潜空间规划）

在学习到的 latent state 空间中规划，而非在原始观测或真实 state 上。要点：latent rollout 的计算效率、latent 空间距离与 reward 的对齐、value equivalence（模型只需对 value 正确，不需对观测正确）。

- **覆盖课程**：CIS6280 L09–L10（Dreamer 在 imagination 中学 policy/value；TD-MPC 在 latent 空间做 MPC）；L08（latent rollout 的架构前提）。
- **代表论文**：Hafner et al. (2019) *Learning Latent Dynamics for Planning from Pixels*（PlaNet）；Schrittwieser et al. (2020) *Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model*（MuZero）；Hansen, Wang & Su (2022) *Temporal Difference Learning for Model Predictive Control*（TD-MPC2 的前身 TD-MPC）。

## 12. Generative World Model（生成式世界模型）

把世界模型表述为观测与生成的联合分布：VAE/GAN/diffusion 作为环境分布的模型。要点：生成模型的采样即"想象"、likelihood 与 sample quality 的张力、条件生成（以 action/history 为条件）。

- **覆盖课程**：CIS6280 L07（VAE、ELBO、GAN）、L08（World Models 2018 的 MDN-RNN）、L11（Diffusion & Flow Matching）、L14（Normalizing/Autoregressive Flows：TARFlow、STARFlow）；CMU 16-825 L16–L17（Generative 3D Modeling：3D-GAN、Trellis、SAM3D，3D 域的生成式世界先验）。
- **代表论文**：Kingma & Welling (2014) *Auto-Encoding Variational Bayes*；Goodfellow et al. (2014) *Generative Adversarial Nets*；Ho, Jain & Abbeel (2020) *Denoising Diffusion Probabilistic Models*。

## 13. Video World Model（视频世界模型）

以视频生成为世界模型：时空生成架构、action-conditioned 视频预测、长程 rollout 与 closed-loop drift。要点：视频模型是否"理解"物理与因果、交互性（可干预的视频生成）、生成长度与一致性。

- **覆盖课程**：CIS6280 L12–L13（Video World Models I/II：generation、prediction、interaction、long-horizon rollouts、drift）；Cornell CS6672（UniSim 研讨：neural closed-loop sensor simulator 本质是自动驾驶视频世界模型）。
- **代表论文**：Brooks et al. (2024) *Video Generation Models as World Simulators*（Sora 技术报告）；Bruce et al. (2024) *Genie: Generative Interactive Environments*。

## 14. Spatial World Model（空间世界模型）

把空间结构（几何、布局、可导航性）纳入世界模型的 state。要点：3D 归纳偏置 vs 纯 2D 像素模型、空间一致性（multi-view consistency）作为 world model 的检验、Fei-Fei Li / World Labs 提出的 spatial intelligence 议程。

- **覆盖课程**：CIS6280 L15（Spatial World Models I：3D 表示、坐标系、深度、点云、occupancy、radiance fields、Gaussians；Resources 收录 World Labs taxonomy 与 TED 2024 spatial intelligence 演讲）；TUM DL4SpatialAI（整门课即 Spatial AI）；Cornell CS6672（DUSt3R 研讨：学习式世界几何先验）。
- **代表论文**：（该方向尚无单一公认奠基论文，见 §15/§16 的具体表示与重建论文。）

## 15. 3D World Model（3D 世界模型）

以显式/隐式 3D 表示作为 world state：radiance fields、Gaussians、occupancy、pointmap。要点：表示的可渲染性（支持新视角预测）、表示的可推断性（前馈式 3D 重建模型作为"世界几何先验"）。

- **覆盖课程**：CIS6280 L15；CMU 16-825 全课（NeRF、3DGS、VGGT、Trellis/SAM3D 及 A3/A4 手写实现）；CS231A L16–L17（NeRF、Gaussian Splatting）；Cornell CS6672（3DGS、DUSt3R 研讨）；TUM DL4SpatialAI（VGGT、Bolt3D、RayZer）。
- **代表论文**：Wang et al. (2024) *DUSt3R: Geometric 3D Vision Made Easy*；Wang et al. (2025) *VGGT: Visual Geometry Grounded Transformer*。

## 16. 4D World Model（4D 世界模型）

3D + 时间：动态场景的表示与预测。要点：scene flow、dynamic occupancy、接触与交互建模、tracking 作为动态 state estimation。

- **覆盖课程**：CIS6280 L16（Spatial World Models II / 4D：scene flow、tracking、dynamic occupancy、contact）；CMU 16-825 L13（Dynamic 3D Representations：Nerfies、Neural Scene Flow Fields）；TUM DL4SpatialAI（3D/4D reconstruction and SLAM、SpatialTracker 3D 跟踪、BA-Track 动态场景 BA）；CS231A L13（Optical and Scene Flow）。
- **代表论文**：Park et al. (2021) *Nerfies: Deformable Neural Radiance Fields*。

## 17. Physical World Model（物理世界模型）

学习物理动力学：粒子/网格/流体模拟、接触、可形变体。要点：graph networks 作为物理归纳偏置、neural operators 对 PDE 的逼近、学习模拟器相对解析模拟器的速度与可微性优势。

- **覆盖课程**：CIS6280 L17（Neural Physics and Learned Physical Dynamics：particle/mesh/fluid 模拟器、graph networks、neural operators）。
- **代表论文**：Battaglia et al. (2016) *Interaction Networks for Learning about Objects, Relations and Physics*；Sanchez-Gonzalez et al. (2020) *Learning to Simulate Complex Physics with Graph Networks*。

## 18. Robot World Model（机器人世界模型）

世界模型在真实机器人上的落地：sim-to-real、domain randomization、系统辨识、在物理机器人上做 imagination 训练。要点：sim 与 real 的模型差距、真实数据稀缺下的样本效率、安全约束。

- **覆盖课程**：CIS6280 L18（Robot Learning I：sim-to-real、domain randomization、system identification；Resources 含 DayDreamer——物理机器人上的 world model）；MIT VNAV（TESSE 模拟器 + 真实无人机/racecar 平台的理论-实验闭环，是经典侧对照）。
- **代表论文**：Wu et al. (2022) *DayDreamer: World Models for Physical Robot Learning*；Tobin et al. (2017) *Domain Randomization for Transferring Deep Neural Networks from Simulation to the Real World*。

## 19. World-Action Model（世界-动作模型）

把动作纳入统一模型的双向推广：VLA（vision-language-action）从世界理解输出动作，world-action model 从动作预测世界演化（latent actions、动作的可学习抽象）。要点：latent action 的无监督发现、video pretraining 到 robot policy 的迁移。

- **覆盖课程**：CIS6280 L19（Robot Learning II：VLA、latent actions、world-action models；Resources 含 DINO-WM、V-JEPA 2）。
- **代表论文**：Brohan et al. (2023) *RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control*；Black et al. (2024) *π₀: A Vision-Language-Action Flow Model for General Robot Control*。

## 20. LLM World Model（语言模型世界模型）

LLM 是否内隐地学到了世界模型：simulation（用文本模拟环境）、state tracking（追踪实体状态）、grounding（语言到物理状态的接地）。要点：LLM 世界模型的边界（物理、空间、因果上的失败模式）、LLM 作为规划器与作为世界模型的分工。

- **覆盖课程**：CIS6280 L20（LLMs as World Models：simulation、state tracking、grounding）；Columbia Spatial AI（Generative AI/LLM agents 周：用 LLM agent 构建空间模拟，是建筑语境下的同类尝试）。
- **代表论文**：Wong et al. (2023) *From Word Models to World Models: Translating from Natural Language to the Probabilistic Language of Thought*。

## 21. Memory（记忆）

世界模型的时间维度：recurrent state 作为短期记忆、episodic/external memory 作为长期记忆、空间记忆（地图、地点识别）作为结构化记忆。要点：记忆容量与遗忘、记忆的可检索性（place recognition 即记忆检索）。

- **覆盖课程**：CIS6280 L04（belief state 递推）、L21（Reasoning：recurrence 与 test-time computation）；MIT VNAV L21–L22（Place Recognition / Bag of Visual Words：空间记忆检索的经典机制）；Columbia Spatial AI（Metric Spaces 与 way-finding：人类空间记忆对照）。
- **代表论文**：Graves, Wayne & Danihelka (2014) *Neural Turing Machines*；Wayne et al. (2018) *Unsupervised Predictive Memory in a Goal-Directed Agent*（MERLIN）。

## 22. OOD（分布外泛化）

世界模型在训练分布外的行为：OOD 状态下的预测可靠性、外推失败、对抗鲁棒性。要点：OOD 检测 vs OOD 下的优雅退化、模型在 OOD 时的"自知之明"（与 uncertainty 联动）。

- **覆盖课程**：CIS6280 L23（Evaluating World Models：robustness、OOD 为显式评估维度）；MIT VNAV L30（Outlier-Robust Perception：经典侧的鲁棒性对应物）。
- **代表论文**：Hendrycks & Gimpel (2017) *A Baseline for Detecting Misclassified and Out-of-Distribution Examples in Neural Networks*。

## 23. Uncertainty（不确定性）

世界模型对自身预测的置信度：aleatoric（环境固有随机）vs epistemic（模型知识不足）不确定性、calibration、不确定性在规划中的传播（risk-aware planning）。

- **覆盖课程**：CIS6280 L23（calibration 为显式评估维度）、L04（belief-state inference 的协方差即不确定性的经典表达）；MIT VNAV L16–L18（ML/MAP 估计与协方差加权：估计理论的不确定性量化）；CS231A L14–L15（KF/EKF/UKF 的协方差传播）。
- **代表论文**：Gal & Ghahramani (2016) *Dropout as a Bayesian Approximation: Representing Model Uncertainty in Deep Learning*；Kendall & Gal (2017) *What Uncertainties Do We Need in Bayesian Deep Learning for Computer Vision?*。

## 24. Drift（漂移）

长程 rollout 中误差累积导致的状态漂移：closed-loop drift、误差补偿机制、重接地（re-grounding / loop closure）。要点：one-step 训练目标与长程部署的失配、漂移的定量度量。

- **覆盖课程**：CIS6280 L12–L13（long-horizon rollouts 与 closed-loop drift 为显式主题）、L23（drift 为评估维度）；MIT VNAV L20（VIO 漂移）、L21/L23–L24（place recognition 与 loop closure 正是对抗漂移的机制）；VAMR L12a（BoW 位置识别）。
- **代表论文**：Cadena et al. (2016) *Past, Present, and Future of Simultaneous Localization and Mapping: Toward the Robust-Perception Age*（SLAM 综述，漂移与回环的系统讨论）。

## 25. Evaluation（评估）

如何评估一个世界模型：utility（下游任务收益）、controllability、calibration、OOD、intervention、drift、latency、failure mode。要点：生成质量指标 ≠ 决策有用性、评估协议的标准化是开放问题。

- **覆盖课程**：CIS6280 L23（Evaluating World Models 独立一讲，本图谱评估维度的直接来源）；Cornell CS6672（Data & Evaluation 周：metrics、human alignment）；MIT VNAV（evo 轨迹评估、RPE 指标的定量评估文化）；CIS6280 final project（要求显式给出 evaluation criteria）。
- **代表论文**：（世界模型评估尚无公认奠基论文；经典侧可参考上节 SLAM 综述的评估讨论。）

---

## 附：主题 × 课程覆盖矩阵（粗粒度）

| 主题 | CIS6280 | CS231A | CMU 16-825 | MIT VNAV | VAMR | Cornell | TUM | 其余 |
|---|---|---|---|---|---|---|---|---|
| State/Observation/SSM | ●● | ●● | – | ●● | ● | – | – | Harvard(传感器) |
| 表示学习 | ●● | ● | – | – | ●(L12b) | – | ●(RayZer) | Columbia |
| Dynamics/预测 | ●● | ●(flow) | ●(动态3D) | ●(动力学) | – | – | ● | – |
| MBRL/规划/MPC | ●● | – | – | ●(轨迹优化) | – | – | – | – |
| 生成式 WM | ●● | – | ●● | – | – | ● | ●(Bolt3D) | – |
| 视频 WM | ●● | – | – | – | – | ●(UniSim) | – | – |
| 空间/3D/4D WM | ●● | ● | ●● | ● | – | ●● | ●● | UCSD/Berkeley |
| 物理 WM | ●● | – | – | – | – | – | – | – |
| 机器人/VLA | ●● | – | – | ●(平台) | ●(VO) | – | – | – |
| LLM/数字智能体 | ●● | – | – | – | – | – | – | Columbia |
| 评估/OOD/不确定性/漂移 | ●● | ●(滤波) | – | ●● | ● | ● | – | – |

（●● = 系统覆盖，● = 部分覆盖，– = 基本不覆盖。）
