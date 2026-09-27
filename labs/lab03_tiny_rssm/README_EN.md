# Lab 3 · Tiny RSSM

**English** | [中文](README.md)

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs/lab03_tiny_rssm/notebook.ipynb)

## Goal

Implement and train a minimal RSSM (deterministic `h_t` + stochastic `z_t`) from scratch in a few minutes on CPU, and use it for prior-only multi-step imagination in the random Moving-Ball world.

## You Will Learn

- The four components of an RSSM: the GRU deterministic path, diagonal-Gaussian prior / posterior, and decoder;
- The reparameterization trick and the closed-form KL between two Gaussians (all hand-written, no black boxes);
- The ELBO training objective: reconstruction + β·KL, and the trade-off controlled by β;
- Why a deterministic-only model degenerates into a blurry average on stochastic futures (with a controlled experiment);
- Why training uses the posterior while imagination uses the prior.

## Concept

The real world (even a small ball with random perturbations) is stochastic: the same history plus the same action sequence can correspond to many plausible futures. For a point-estimate model, the optimal solution under a pixel loss is the conditional mean — a blurry ghost image. The RSSM splits the state into "memory" (the GRU hidden state) and "uncertainty" (a sampled latent): the posterior looks at observations during training, the KL distills that knowledge into the prior, so that during imagination (when no observation is available) the model can still produce sharp and diverse futures.

## Architecture

```
           Training (teacher-forced)                  Imagination (open-loop)
                                                      
 x_t ──▶ Encoder ──▶ posterior q(z_t|h_t,x_t)          h_k ──▶ prior p(z_k|h_k)
                     │  z_t = μ_q + σ_q·ε                      z_k = μ_p + σ_p·ε
 h_t = GRU([z_{t-1},a_{t-1}], h_{t-1})  ◀── shared ──▶  h_{k+1} = GRU([z_k,a_k], h_k)
 prior p(z_t|h_t) ◀── h_t                                │
 KL(q‖p) distills into the prior                          ▼
 (h_t, z_t) ──▶ Decoder ──▶ x̂_t                    Decoder ──▶ x̂_k
 Loss = Σ BCE(x̂_t, x_t) + β·KL(q‖p)               (never sees real frames)
```

## Run

**Local**

```bash
pip install -r requirements.txt
jupyter nbconvert --execute --to notebook --inplace labs/lab03_tiny_rssm/notebook.ipynb
# or open the notebook and run cell by cell (working directory must be labs/lab03_tiny_rssm/)
```

**Colab**: click the badge above; the first cell auto-detects the environment and installs missing dependencies.

## Experiment

The notebook includes a controlled experiment: a deterministic-only baseline with exactly the same architecture as the RSSM (`stochastic=False`, z taken as the mean, KL replaced by MSE). Both models run a 15-step open-loop imagination from the same burn-in and action sequence, and are compared side by side with quantitative sharpness and cross-sample diversity metrics.

## Expected Results

- Training converges: reconstruction BCE (summed over pixels) drops from ~1000 to ~70–90, and KL stabilizes at ~15–20 nats (about 3–7 minutes total on CPU, depending on machine load).
- Posterior reconstructions are sharp; the prior's one-step predictions are mostly correct but slightly blurry.
- Imagination rollout: within 15 frames the ball stays sharp and moves plausibly, but need not match the ground truth pixel by pixel (the environment is stochastic).
- Three independent imaginations produce three different trajectories (diversity > 0); the spread of RSSM-predicted positions grows with the horizon (step 1 ≈ 2.4 px → step 15 ≈ 8.3 px), while the deterministic baseline stays at 0.
- Baseline comparison: the deterministic model can only output a single "average trajectory" (sharp, confident, but with a step-15 position error of ~31 px); a single RSSM sample has a similar error, but **best-of-8 drops to ~22 px** — the ground truth falls inside the distribution it predicts. Averaging the 8 dreams in pixel space degenerates into a blurry ghost (a visualization of the conditional mean).
- Artifacts: `assets/imagination_grid.png`, `assets/imagination_rollout.gif`, `assets/multi_dreams.png`, `assets/rssm_vs_deterministic.png`.

## Exercises

1. **Latent dimension**: `Z_DIM=4 / 32` — observe how KL, reconstruction, and imagination quality change.
2. **KL weight β**: `beta=0.0` (the prior lags behind, imagination collapses) and `beta=10.0` (posterior collapse, blurry reconstructions) — two failure modes.
3. **Sequence length / noise level**: `SEQ_LEN=4 vs 18`; when `NOISE_STD=0`, does the stochastic latent still have an advantage?

Each exercise comes with a hint in the notebook.

## Advanced Extension

- Replace `z_t` with discrete categoricals plus straight-through gradients (the DreamerV2 approach, [arXiv:2010.02193](https://arxiv.org/abs/2010.02193));
- Add a reward head and do CEM planning in imagination → Lab 4;
- Compare engineering tricks (free bits, KL balancing, symlog) against the RSSM implementation (~200 lines) in [dreamerv3-torch](https://github.com/NM512/dreamerv3-torch).

## Related Modules

- [Scientist 06 · RSSM](/docs/scientist/06-rssm)
- [Scientist 05 · Latent Dynamics](/docs/scientist/05-latent-dynamics)

## Related Papers

- Hafner et al. (2019), *Learning Latent Dynamics for Planning from Pixels* (PlaNet / RSSM). https://arxiv.org/abs/1811.04551
- Hafner et al. (2020), *Dream to Control: Learning Behaviors by Latent Imagination* (Dreamer). https://arxiv.org/abs/1912.01603
- Hafner et al. (2021), *Mastering Atari with Discrete World Models* (DreamerV2). https://arxiv.org/abs/2010.02193

## Common Problems

- **Reconstructions are all black/gray**: check whether the decoder output is used as logits (no sigmoid during training), and whether `pos_weight` takes effect.
- **KL → 0 with poor reconstructions**: posterior collapse. First check whether the BCE mistakenly uses `mean` over pixels (the true ELBO sums over pixels; otherwise the KL dimensionally overwhelms the reconstruction term); then consider lowering β or adding free bits.
- **Imagination collapses from the very first step**: check the action indexing of the burn-in — `a_fut` should start from `a_{BURN-1}`.
- **Imagined trajectories fly out of frame instantly**: insufficient training steps or too large a learning rate; 600 steps with lr=3e-3 is a verified configuration for this task.
