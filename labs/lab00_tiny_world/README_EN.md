# Lab 0 — Build a Tiny World

**English** | [中文](README.md)

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab00_tiny_world/notebook.ipynb)

## Objective

Implement a minimal 2D "Moving-Ball World" from scratch with pure NumPy — no gym dependency. You will define the full environment loop yourself: `state = (x, y, vx, vy)`, discrete force actions `(ax, ay) ∈ {-1, 0, 1}²`, semi-implicit Euler integration with wall bounces and friction, noisy position observations plus a rendered 64×64 RGB image, and a distance-to-goal reward. By the end you will have run a random-policy rollout, rendered it as a GIF, and inspected a full trajectory table.

## Prerequisites

- Basic Python and NumPy (arrays, random numbers, plotting with Matplotlib).
- No prior RL background required — every concept (state, action, observation, reward) is introduced in the notebook.

## Recommended Framework

Pure NumPy + Matplotlib + imageio. No RL framework is needed; an *optional* final exercise sketches how the same class would be wrapped as a `gymnasium.Env` so you can see the standard API convention.

## Dataset

None. All data is generated in code by rolling out the simulator you build.

## Estimated GPU Requirement

CPU is sufficient — the whole lab runs in under a minute on any laptop CPU.

## Expected Output

- A working `MovingBallWorld` class with `reset()` / `step()` following the classic RL loop.
- A printed trajectory table (state / observation / action / reward) for a random-policy rollout.
- An inline animation of the rollout, also saved to `assets/rollout.gif`.
- A short written reflection on why `observation ≠ state` (the POMDP motivation).

## Related Course

World Models & Spatial Intelligence — Week 1: "What is a world model? States, observations, and dynamics."

## Related Papers

- Ha & Schmidhuber (2018), *World Models*. https://arxiv.org/abs/1803.10122
- Kaelbling, Littman & Cassandra (1998), *Planning and Acting in Partially Observable Stochastic Domains* (POMDPs). https://www.sciencedirect.com/science/article/pii/S000437029800023X

## Open in Colab

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab00_tiny_world/notebook.ipynb)
