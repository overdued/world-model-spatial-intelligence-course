# Lab 4 · MPC / CEM Planning

**English** | [中文](README.md)

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab04_mpc_cem_planning/notebook.ipynb)

## Goal

Use a world model for **decision-making** on Lab 0's Moving-Ball World: hand-write two gradient-free planners — Random Shooting **MPC** and **CEM** — and compare how a perfect model (analytic dynamics) versus a learned model (an MLP trained in one minute inside the notebook) affects planning performance. All on CPU, finished in a few minutes.

## You Will Learn

- The receding-horizon decision loop of Model Predictive Control: sample → rollout → rank → act → replan;
- Complete implementations of Random Shooting and CEM (elite selection + iterative Gaussian distribution update) — gradient-free, no differentiable model required;
- How to train a dynamics model in `Δs` residual form and plug it into a planner (swap the model without changing the planner);
- How to quantitatively characterize **model error → planning failure**: the return gap, predicted-vs-actual trajectory divergence, and the horizon scissors gap.

## Concept

A world model moves trial-and-error into "imagination": at the current state, sample N candidate action sequences of length H, batch-rollout them through the model to get predicted returns, execute the first action of the best sequence, then replan from the true next state. The planner itself learns nothing — all the intelligence comes from the accuracy of the model.

## Architecture

```
                 ┌─────────────────────────── replan every step ───────────────────────────┐
                 │                                                                          │
 current state ──┼─► sample N candidate action sequences (uniform / Gaussian for CEM)      │
   s_t, goal     │        │                                                                │
                 │        ▼                                                                │
                 │   world model rollout:  ŝ_{k+1} = f(ŝ_k, a_k)   (perfect or learned)    │
                 │        │                                                                │
                 │        ▼                                                                │
                 │   rank by Σ predicted reward   [CEM: elites → update μ, σ → iterate]    │
                 │        │                                                                │
                 │        ▼                                                                │
                 └────  execute a*_t in the REAL environment  ──►  observe s_{t+1} ────────┘
```

## Run

**Local**

```bash
pip install -r requirements.txt
jupyter nbconvert --execute --to notebook --inplace notebook.ipynb
```

**Colab**

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab04_mpc_cem_planning/notebook.ipynb)

## Experiment

1. **Four-agent comparison** (8 identical initial conditions × 60 steps): Random vs MPC (perfect) vs MPC (learned) vs CEM (learned) — return table + reward curves + trajectory comparison plots;
2. **Open-loop vs closed-loop**: plan 40 steps at t=0, then execute blindly to the end; compare the "actual vs model-promised" final distance of three models (perfect / learned / corrupted with deliberately wrong friction) under open-loop and closed-loop control — a direct demonstration of "model error → planning failure" and the corrective power of the receding horizon;
3. **Planning-horizon sweep**: `H ∈ {1, 2, 4, 8, 16, 32}` (N fixed at 200), swept once each for the perfect and the learned model, to observe the trade-off between horizon and sampling budget.

## Expected Results

- MPC (perfect model) significantly outperforms Random (return ≈ -5.7 vs -29), reaching the goal within ~13 steps in 8/8 episodes;
- MPC (learned model) nearly matches the perfect model in closed loop — model error is corrected by replanning;
- CEM (learned) is on par with or slightly better than MPC (learned) (same model, better optimizer);
- Open-loop check: the learned model's position error accumulates from ~5e-4 at 1 step to ~0.9 at 40 steps;
- Open vs closed: with perfect+open, actual = promised; with corrupted+open, actual ≈ 0.31 while the model promises ≈ 0.15 (failure); the same corrupted model in closed loop immediately falls back to ~0.01, matching the perfect model;
- Horizon sweep: short H is already sufficient; as H grows, both models slowly degrade because the fixed sampling budget gets diluted, and the learned model does not collapse any faster (closed-loop protection).

## Exercises

- ✏️ **Change the horizon**: Section 8 of the notebook already provides the sweep; try pushing `H_PLAN` beyond 32 — what happens to the learned model?
- ✏️ **Change the number of candidates**: reduce `N_SAMPLES` from 256 to 32 (Exercise 1) — which agent degrades the most?
- ✏️ **Noisy model**: add Gaussian noise to the output of `learned_step` (Exercise 2) and observe how model uncertainty erodes planning — this is exactly the problem PETS addresses with probabilistic ensembles.

## Advanced Extension

- **MPPI** (Model Predictive Path Integral): replace CEM's elite-mean update with a reward-weighted soft-max update `μ ← Σ wᵢ aᵢ, wᵢ ∝ exp(λ·Rᵢ)` for higher sampling efficiency;
- **Latent-space planning**: swap the state for Lab 3's RSSM latent `z_t` and predict rewards with a learned reward head; this lab's CEM then plans in latent space without changing a single line — that is essentially **PlaNet**;
- Add a learned value function (bootstrapping returns beyond H steps) and a policy prior (guiding the sampling distribution), and you arrive at **TD-MPC / Dreamer**.

## Related Modules

- [/docs/scientist/09-planning-with-world-models](/docs/scientist/09-planning-with-world-models)

## Related Papers

- Hansen et al. (2022), *Temporal Difference Learning for Model Predictive Control* (TD-MPC). https://arxiv.org/abs/2203.04955
- Chua et al. (2018), *Deep Reinforcement Learning in a Handful of Trials using Probabilistic Dynamics Models* (PETS). https://arxiv.org/abs/1805.12114
- Hafner et al. (2019), *Learning Latent Dynamics for Planning from Pixels* (PlaNet / RSSM + CEM). https://arxiv.org/abs/1811.04551
- Williams et al. (2017), *Information Theoretic MPC for Model-Based Reinforcement Learning* (MPPI). https://arxiv.org/abs/1707.02342

## Common Problems

- **CEM actions jitter everywhere after convergence**: `elite_frac` or `init_std` is too large, so the distribution never contracts; increase `n_iter` to 5–6 or reduce `init_std`.
- **MPC (learned) is worse than Random**: check whether the training data covers a sufficient region of the state space; look at the open-loop error in Section 5.1 first — planning is hopeless when the model itself is inaccurate.
- **The ball repeatedly overshoots near the goal**: a typical symptom of model error plus myopia; increasing `N_SAMPLES` or switching to CEM usually helps.
- **Slow on Colab**: this lab is pure CPU; a GPU runtime can actually be slower due to frequent small-batch transfers — stick with CPU.
