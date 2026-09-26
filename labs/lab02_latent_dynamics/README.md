# Lab 2 — Latent Dynamics

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab02_latent_dynamics/notebook.ipynb)

## Objective

Build a miniature *learned world model* in PyTorch: encode 64×64 images of a moving ball into a 16-dimensional latent state `z`, learn an MLP transition model `(z_t, a_t) → ẑ_{t+1}`, and decode predicted latents back into images. Training uses a reconstruction loss plus a one-step latent prediction loss and finishes in a few minutes on CPU. You will then run an **open-loop multi-step rollout** — feeding only the initial frame and an action sequence into the learned dynamics — and watch prediction error compound over time.

## Prerequisites

- Lab 0 and Lab 1 (recommended): the simulator and the state-estimation mindset carry over directly.
- Basic PyTorch: `nn.Module`, optimizers, training loops.
- Understanding of autoencoders is helpful but not required — the architecture is explained in the notebook.

## Recommended Framework

PyTorch (CPU build is sufficient), NumPy, Matplotlib, imageio. This mirrors the encoder–dynamics–decoder structure of modern world models (Dreamer / RSSM) at toy scale.

## Dataset

Generated in code: ~2,000 frames of a 64×64 moving-ball sequence with random force actions and wall bounces (100 episodes × 20 steps). No downloads.

## Estimated GPU Requirement

CPU 即可 — a small convolutional autoencoder, batch size 64, 1000 training steps; total runtime is about a minute.

## Expected Output

- A trained ConvEncoder → MLP dynamics → ConvDecoder pipeline.
- A reconstruction comparison grid (input vs. reconstructed images).
- One-step prediction examples: decoded `ẑ_{t+1}` next to the true next frame.
- An open-loop 10-step rollout (initial frame + action sequence only) shown side by side with ground truth, saved to `assets/openloop_rollout.gif` and `assets/openloop_grid.png`.
- A curve of prediction error vs. rollout horizon — the visible signature of compounding drift, motivating posterior correction (RSSM) in the next lab.

## Related Course

World Models & Spatial Intelligence — Week 3: "Learning latent dynamics: from pixels to predictive state."

## Related Papers

- Ha & Schmidhuber (2018), *World Models*. https://arxiv.org/abs/1803.10122
- Hafner et al. (2019), *Dream to Control: Learning Behaviors by Latent Imagination* (Dreamer). https://arxiv.org/abs/1912.01603
- Hafner et al. (2019), *Learning Latent Dynamics for Planning from Pixels* (PlaNet / RSSM). https://arxiv.org/abs/1811.04551
- Watter et al. (2015), *Embed to Control (E2C)*. https://arxiv.org/abs/1506.07365

## Open in Colab

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab02_latent_dynamics/notebook.ipynb)
