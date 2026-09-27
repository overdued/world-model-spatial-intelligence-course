# Lab 1 — Kalman Filter

**中文** | [English](README_EN.md)

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab01_kalman_filter/notebook.ipynb)

## Objective

Implement a Kalman filter from scratch in NumPy for a constant-velocity model, and use it to track a moving ball from noisy position measurements (the same motion style as Lab 0). You will write the `predict` / `update` equations yourself, visualize the filtered trajectory against ground truth with a ±2σ uncertainty band, and interactively explore how process noise (Q) and measurement noise (R) shape the filter's behavior.

## Prerequisites

- Lab 0 (recommended): you should be comfortable with the state / observation distinction.
- Basic linear algebra: matrix multiplication, inverses, covariance matrices.
- NumPy and Matplotlib.

## Recommended Framework

Pure NumPy for the filter math (no `filterpy` — the point is to derive every line), Matplotlib for plots, and ipywidgets for interactive Q/R sliders (with static fallback figures so the notebook is fully reproducible anywhere).

## Dataset

None. Ground-truth trajectories and Gaussian-noise observations are generated in code at the top of the notebook.

## Estimated GPU Requirement

CPU 即可 — a few seconds of NumPy linear algebra.

## Expected Output

- A working `KalmanFilter` class (`predict`, `update`) for a 2D constant-velocity model.
- A plot with ground truth (green), noisy observations (gray scatter), the filtered estimate (blue), and the ±2σ uncertainty band.
- An error-comparison plot: raw observation error vs. filtered state error.
- An interactive Q/R widget, plus a static 3-panel comparison (low noise / high noise / mismatched model) as fallback.
- A written discussion of process noise vs. measurement noise and what happens under model mismatch.

## Related Course

World Models & Spatial Intelligence — Week 2: "State estimation: from observations to beliefs."

## Related Papers

- Kalman (1960), *A New Approach to Linear Filtering and Prediction Problems*. https://doi.org/10.1115/1.3662552
- Thrun, Burgard & Fox (2005), *Probabilistic Robotics* (Ch. 3, Gaussian filters).
- Ha & Schmidhuber (2018), *World Models* — the Kalman filter is the classical ancestor of learned latent-state estimation. https://arxiv.org/abs/1803.10122

## Open in Colab

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab01_kalman_filter/notebook.ipynb)
