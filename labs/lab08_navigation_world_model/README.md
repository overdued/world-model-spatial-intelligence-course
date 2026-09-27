# Lab 8 · Navigation World Model

**中文** | [English](README_EN.md)

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab08_navigation_world_model/notebook.ipynb)

## Goal

在 partial observability 的 2D grid world 中(agent 只能看到 5×5 局部视野,goal 位置未知),实现并正面对比三种 agent —— **Reactive**(只看当前观测)、**Memory**(occupancy map + BFS 规划)、**World Model**(记忆 + 学习型 forward model 的想象规划)—— 回答"导航到底需要多少内部状态"。全程自实现、零外部环境依赖,CPU 约 30 秒跑完。

## You Will Learn

- **Partial observability** 下当前观测为何不足以决策(POMDP 的最小实例);
- **State estimation**:用 odometry(动作积分 + 碰撞反馈)估计位姿,把局部观测"钉"到 allocentric 全局地图上;
- **Spatial memory**:occupancy map 如何支撑 BFS/frontier 探索,把成功率从 ~0.6 拉到 1.0;
- **学习型 forward model**:`(局部窗口, 动作) → 下一局部窗口` 的 MLP,同时学会窗口平移动力学与对未见 cell 的占据预测(map completion);
- **想象规划**:用模型预测给未知 cell 估通行代价,在"想象地图"上 Dijkstra,让规划穿越尚未见过的区域;
- **OOD**:世界统计改变时模型精度定量下滑,以及 closed-loop replanning 对 model error 的吸收与极限。

## Concept

导航智能的三层递进:reactive agent 的决策函数是 `π(o_t)` —— 没有状态,注定在角落振荡;加入 memory 后变成 `π(o_t, M_t)`,其中 `M_t` 是历史观测的压缩(spatial memory),frontier 探索 + 保守规划已能稳定到达 goal;world model 再进一步,对 `M_t` 中的未知区域做出有根据的猜测 `p̂(occupancy)`,让规划器在"想象地图"上度量距离、选择信息量大的 frontier —— 收益是步数,代价是 model error,而 model error 在分布偏移(OOD)时会放大。

## Architecture

```mermaid
flowchart LR
    A[Observation<br/>5×5 local window] --> B[State Estimation<br/>odometry 位姿积分]
    B --> C[Memory / Map<br/>occupancy map<br/>UNKNOWN·FREE·WALL]
    C --> D[World Model<br/>MLP: (window, action)<br/>→ next window / P&#40;free&#41;]
    D --> E[Planning<br/>Dijkstra on imagined cost map<br/>frontier scoring]
    C --> E
    E --> F[Action<br/>up·down·left·right]
    F --> A
```

## Run

**Local**

```bash
pip install -r requirements.txt
jupyter nbconvert --execute --to notebook --inplace notebook.ipynb
```

**Colab**

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab08_navigation_world_model/notebook.ipynb)

## Experiment

1. **三 agent 正面对比**(12 张相同测试地图 × 300 步上限):success rate / 平均步数 / 探索覆盖率 + 同图轨迹对比;
2. **模型质量检查**:held-out 窗口的整体 cell 准确率 vs "输入中不可见 cell"的补全准确率;predicted vs actual 下一观测可视化;
3. **OOD 实验**:模型在矩形障碍地图上训练,改到 salt-and-pepper 噪声障碍地图上测试 —— 8.1 定量测模型精度崩塌,8.2 测行为层面(closed-loop replanning 的吸收作用);
4. **地图填充动画**:memory agent 的 occupancy map 逐步生长 GIF(`assets/map_filling.gif`)。

## Expected Results

- 三 agent 对比(12 张 25×25 测试地图,实测):

  | agent | success | avg steps | coverage |
  |---|---|---|---|
  | Reactive | 0.58 | 211.5 | 0.56 |
  | Memory (BFS) | 1.00 | 105.2 | 0.67 |
  | World Model | 1.00 | 88.0 | 0.70 |

- Forward model(33k 参数 MLP,19200 样本,12 epochs):held-out 整体 cell 准确率 ~0.93,不可见 cell 补全 ~0.89(多数类基线 ~0.75);
- OOD(salt-and-pepper 障碍):模型 unseen-cell 精度 0.89 → 0.73,但 closed-loop replanning 下任务指标仍保持(WM 1.00 成功率 / 95.5 步 vs Memory 1.00 / 118.5 步)—— "模型变差"与"任务没崩"同时成立,正是本 Lab 想让你看到的张力;
- 同图轨迹:WM ~52 步直达,Memory ~146 步系统性探索,Reactive 大范围游走。

## Exercises

- ✏️ **改视野大小**:`R_VIEW` 从 2(5×5)改为 1(3×3)/ 3(7×7),重跑对比 —— 视野越小,memory 与 model 的相对收益越大(Exercise 1);
- ✏️ **odometry noise**:让 env 以 5% 概率"打滑"(动作无效但 `moved=True`),观察记忆地图漂移重影 —— SLAM 存在的理由(Exercise 2);
- ✏️ **更大地图 + 移动障碍物**:41×41 地图 + 随机游走的动态障碍 —— "见过即真"的记忆假设在动态世界失效,需要遗忘机制或时间戳(Exercise 3)。

## Advanced Extension

- **Neural map / 神经地图**:把 occupancy grid 换成可写的神经记忆(如 MapNet 的可微地图、或 Kanitscheider & Fiete 的 RNN 认知地图),位姿估计与建图端到端学习;
- **VSLAM 连接**:本 Lab 的 "odometry + mapping" 就是 SLAM 的骨架 —— 加上位姿图优化 / loop closure(如 RatSLAM、ORB-SLAM)即可处理 Exercise 2 的漂移;Active Neural SLAM 则把 frontier 探索也换成学习策略;
- **真实数据**:把本 Lab 的 mapping/planning 管线接到 EuRoC MAV Dataset(真实无人机视觉-惯性数据)上 —— 用双目深度投影生成局部占据栅格,其余规划代码可原样复用。

## Related Modules

- [/docs/spatial/10-navigation](/docs/spatial/10-navigation)
- [/docs/spatial/08-spatial-memory](/docs/spatial/08-spatial-memory)

## Related Papers

- Gupta et al. (2017), *Cognitive Mapping and Planning for Visual Navigation* (mapper + planner 的可微架构). https://arxiv.org/abs/1702.03920
- Chaplot et al. (2020), *Learning To Explore Using Active Neural SLAM* (neural map + 学习式 frontier 探索). https://arxiv.org/abs/2004.05155
- Savinov et al. (2018), *Semi-Parametric Topological Memory for Navigation* (拓扑记忆导航). https://arxiv.org/abs/1803.00653
- Henriques & Vedaldi (2018), *MapNet: An Allocentric Spatial Memory for Mapping Environments* (神经 allocentric 地图). https://arxiv.org/abs/1711.02505
- Ha & Schmidhuber (2018), *World Models* (在想象的 latent rollout 中训练策略). https://arxiv.org/abs/1803.10122

## Common Problems

- **WM agent 与 memory agent 步数差不多**:`gain_w` 太大时 frontier 信息增益项会让 agent 沉迷于"看新区域"而绕远;调小到 0.2–0.3,或检查 frontier 打分里想象距离项是否生效;
- **模型准确率看起来很高但 WM 没优势**:矩形世界里不可见 cell 大多是 free,先验就能拿高分 —— 真正的考验是 OOD 实验(8.1),别看 in-dist 数字自满;
- **Reactive 偶尔成功**:小地图上随机游走确实可能撞见 goal,这恰恰是为什么要用 12 张地图的 paired comparison 而不是单次演示;
- **GIF 太大 / 太慢**:把采帧间隔从 `% 2` 改成 `% 4`,或缩小 figsize;
- **Colab 上变慢**:全程 CPU 即可;GPU 对这种 33k 参数的小模型没有收益。
