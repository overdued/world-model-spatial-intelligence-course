# Lab 8 · Navigation World Model

**English** | [中文](README.md)

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab08_navigation_world_model/notebook.ipynb)

## Goal

In a partially observable 2D grid world (the agent sees only a 5×5 local window and the goal location is unknown), implement and directly compare three agents — **Reactive** (current observation only), **Memory** (occupancy map + BFS planning), and **World Model** (memory + imagination planning with a learned forward model) — to answer "how much internal state does navigation really need." Fully self-implemented with zero external environment dependencies; runs on CPU in about 30 seconds.

## You Will Learn

- Why the current observation is insufficient for decision-making under **partial observability** (a minimal POMDP instance);
- **State estimation**: estimating pose with odometry (action integration + collision feedback) and "pinning" local observations onto an allocentric global map;
- **Spatial memory**: how an occupancy map supports BFS/frontier exploration, pulling the success rate from ~0.6 to 1.0;
- **A learned forward model**: an MLP mapping `(local window, action) → next local window`, which learns both the window-shift dynamics and occupancy prediction for unseen cells (map completion);
- **Imagination planning**: using model predictions to estimate traversal costs for unknown cells and running Dijkstra on the "imagined map," letting plans cross regions not yet seen;
- **OOD**: quantified degradation of model accuracy when world statistics change, and how closed-loop replanning absorbs model error — and its limits.

## Concept

Navigation intelligence progresses through three levels: a reactive agent's decision function is `π(o_t)` — stateless, doomed to oscillate in corners; adding memory turns it into `π(o_t, M_t)`, where `M_t` is a compression of the observation history (spatial memory), and frontier exploration + conservative planning can already reach the goal reliably; the world model goes one step further by making informed guesses `p̂(occupancy)` about the unknown regions of `M_t`, letting the planner measure distances on the "imagined map" and choose informative frontiers — the payoff is fewer steps, the cost is model error, and model error amplifies under distribution shift (OOD).

## Architecture

```mermaid
flowchart LR
    A[Observation<br/>5×5 local window] --> B[State Estimation<br/>odometry pose integration]
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

1. **Head-to-head comparison of the three agents** (12 identical test maps × 300-step budget): success rate / average steps / exploration coverage + same-map trajectory comparison;
2. **Model-quality check**: overall cell accuracy on held-out windows vs completion accuracy on "cells invisible in the input"; visualization of predicted vs actual next observations;
3. **OOD experiment**: the model is trained on rectangular-obstacle maps and tested on salt-and-pepper noise-obstacle maps — 8.1 quantifies the collapse of model accuracy, 8.2 measures the behavioral level (the absorptive effect of closed-loop replanning);
4. **Map-filling animation**: a GIF of the memory agent's occupancy map growing step by step (`assets/map_filling.gif`).

## Expected Results

- Three-agent comparison (12 test maps of 25×25, measured):

  | agent | success | avg steps | coverage |
  |---|---|---|---|
  | Reactive | 0.58 | 211.5 | 0.56 |
  | Memory (BFS) | 1.00 | 105.2 | 0.67 |
  | World Model | 1.00 | 88.0 | 0.70 |

- Forward model (33k-parameter MLP, 19,200 samples, 12 epochs): held-out overall cell accuracy ~0.93, unseen-cell completion ~0.89 (majority-class baseline ~0.75);
- OOD (salt-and-pepper obstacles): the model's unseen-cell accuracy drops from 0.89 → 0.73, yet under closed-loop replanning the task metrics hold (WM 1.00 success / 95.5 steps vs Memory 1.00 / 118.5 steps) — "the model got worse" and "the task did not collapse" are true at the same time, which is exactly the tension this lab wants you to see;
- Same-map trajectories: WM goes nearly straight to the goal in ~52 steps, Memory explores systematically in ~146 steps, Reactive wanders over large areas.

## Exercises

- ✏️ **Change the field of view**: change `R_VIEW` from 2 (5×5) to 1 (3×3) / 3 (7×7) and rerun the comparison — the smaller the view, the greater the relative benefit of memory and model (Exercise 1);
- ✏️ **Odometry noise**: make the env "slip" with 5% probability (the action has no effect but `moved=True`) and observe ghosting drift in the memory map — the very reason SLAM exists (Exercise 2);
- ✏️ **Larger map + moving obstacles**: a 41×41 map with random-walking dynamic obstacles — the "seen is true" memory assumption fails in a dynamic world; forgetting mechanisms or timestamps are needed (Exercise 3).

## Advanced Extension

- **Neural maps**: replace the occupancy grid with a writable neural memory (e.g., MapNet's differentiable map, or Kanitscheider & Fiete's RNN cognitive map), learning pose estimation and mapping end to end;
- **VSLAM connection**: this lab's "odometry + mapping" is the skeleton of SLAM — add pose-graph optimization / loop closure (e.g., RatSLAM, ORB-SLAM) to handle the drift in Exercise 2; Active Neural SLAM additionally replaces frontier exploration with a learned policy;
- **Real data**: connect this lab's mapping/planning pipeline to the EuRoC MAV Dataset (real drone visual-inertial data) — generate local occupancy grids by projecting stereo depth; the rest of the planning code can be reused as-is.

## Related Modules

- [/docs/spatial/10-navigation](/docs/spatial/10-navigation)
- [/docs/spatial/08-spatial-memory](/docs/spatial/08-spatial-memory)

## Related Papers

- Gupta et al. (2017), *Cognitive Mapping and Planning for Visual Navigation* (differentiable mapper + planner architecture). https://arxiv.org/abs/1702.03920
- Chaplot et al. (2020), *Learning To Explore Using Active Neural SLAM* (neural map + learned frontier exploration). https://arxiv.org/abs/2004.05155
- Savinov et al. (2018), *Semi-Parametric Topological Memory for Navigation* (topological memory navigation). https://arxiv.org/abs/1803.00653
- Henriques & Vedaldi (2018), *MapNet: An Allocentric Spatial Memory for Mapping Environments* (neural allocentric map). https://arxiv.org/abs/1711.02505
- Ha & Schmidhuber (2018), *World Models* (training policies in imagined latent rollouts). https://arxiv.org/abs/1803.10122

## Common Problems

- **The WM agent takes about as many steps as the memory agent**: when `gain_w` is too large, the frontier information-gain term makes the agent addicted to "seeing new regions" and take detours; reduce it to 0.2–0.3, or check whether the imagined-distance term in the frontier scoring takes effect;
- **Model accuracy looks high but WM shows no advantage**: in a rectangular world most unseen cells are free, so a prior alone scores well — the real test is the OOD experiment (8.1); do not be complacent about in-distribution numbers;
- **Reactive occasionally succeeds**: on small maps a random walk can indeed stumble into the goal — this is exactly why we use a paired comparison over 12 maps rather than a single demo;
- **GIF too large / too slow**: change the frame-sampling interval from `% 2` to `% 4`, or shrink the figsize;
- **Slower on Colab**: the whole lab is CPU-only; a GPU brings no benefit for such a small 33k-parameter model.
