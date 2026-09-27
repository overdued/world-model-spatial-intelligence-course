# Capstone Report: Build Your Own World Model

> This template is organized around the course's "Ten Unified Design Questions"; fill in each section. Total report length: 4–8 pages (excluding References).
> Delete all `> Hint:` lines before submitting.

---

## Title Page

- **Title**:
- **Author / Team**:
- **Chosen direction**: Navigation / Robot Manipulation / Video Prediction / Dynamic 3D / Game Environment / Spatial Memory / Other (____)
- **Date**:
- **Code repository / Colab link**:
- **Reproduction notes**: environment dependencies, random seeds, one-command run instructions

## Abstract

> Hint: 150–250 words. Include: the application domain, a one-sentence version of the four elements, the core method, the main quantitative results (including OOD), and the most important failure mode.

(Fill in here)

---

## 1. What is the observation?

> Hint: What does the agent see? Give dimensions, modality (image / state vector / depth…), noise characteristics, and observation frequency. If the problem is partially observable (POMDP), state so explicitly.

(Fill in here)

## 2. What is the latent/world state?

> Hint: What is the model's internal state? Explicit (positions, occupancy grid, Gaussian field) or implicit (latent vector)? What is its dimension? Why this choice (and not another)?

(Fill in here)

## 3. What is the action?

> Hint: Dimension of the action space, discrete/continuous, physical semantics, execution frequency.

(Fill in here)

## 4. What is the transition model?

> Hint: Write the explicit form, e.g., the parameterization of $p_\theta(s_{t+1} \mid s_t, a_t)$ (GRU + Gaussian head / deterministic MLP / rendering-pipeline update rule…), and the training objective (negative log-likelihood / MSE / rendering loss…).

(Fill in here)

## 5. How is memory maintained?

> Hint: How does the state accumulate and update over time? (A KF's mean + covariance? An RNN hidden state? Occupancy updates of a persistent map?) What is kept, what is forgotten?

(Fill in here)

## 6. How is the future predicted?

> Hint: One-step or multi-step? How are open-loop rollouts generated? What is the prediction horizon, and on what basis was it chosen?

(Fill in here)

## 7. How is planning/policy performed?

> Hint: MPC/CEM, actor-critic in imagination, explicit geometric planning (e.g., A* on an occupancy map), or a hybrid? Give the key hyperparameters (horizon, number of candidates, iteration counts, etc.).

(Fill in here)

## 8. How is the model evaluated?

> Hint: Metric definitions (success rate, mean return, prediction error, PSNR/ATE…), test distribution, number of random seeds, confidence intervals. Which baselines are compared against?

(Fill in here)

## 9. What happens under OOD?

> Hint: Define your OOD setting (new dynamics parameters / new scenes / new disturbances / sensor drift), give a quantitative ID vs OOD comparison table (can be generated with evaluation_template.py), and analyze the magnitude and causes of the degradation.

(Fill in here)

## 10. What are the failure cases?

> Hint: At least three concrete failure cases. For each: the phenomenon (with figures/trajectories), triggering conditions, root-cause analysis, and possible directions for fixing it.

(Fill in here)

---

## System Architecture

> Hint: Insert a system diagram that must include the complete loop observation → state → transition → prediction → planning/policy → action, with each module's interface annotated (dimensions, data types). The diagram must match the code implementation.

[Insert architecture diagram here]

## Experiments

### Experimental Setup

| Item | Setting |
|------|---------|
| Environment / data | |
| Training budget (steps / wall time / hardware) | |
| Number of random seeds | |
| Baselines | |

### Main Results

| Method | Success Rate ↑ | Mean Return ↑ | 1-step Pred. Error ↓ | H-step Pred. Error ↓ | Other metrics |
|--------|----------------|---------------|----------------------|----------------------|---------------|
| Random policy | | | — | — | |
| Baseline (____) | | | | | |
| **Our system** | | | | | |

### ID vs OOD Comparison

| Metric | ID (mean ± std) | OOD (mean ± std) | Degradation |
|--------|-----------------|-------------------|-------------|
| Success Rate | | | |
| Mean Return | | | |
| 1-step Pred. Error | | | |
| H-step Pred. Error | | | |

> Hint: Attach training/evaluation curves and a visualization of at least one multi-step prediction rollout (compared against ground truth).

[Insert training/evaluation curves here]

[Insert prediction rollout visualization here]

## OOD & Failure Analysis

> Hint: Synthesizing Questions 9 and 10, put the full analysis here: quantitative patterns of OOD degradation, commonalities among failure cases (do they concentrate on a certain type of state/action/observation?), and how these results delimit the system's safe operating region.

(Fill in here)

## Limitations

> Hint: Honestly list the system's boundaries — simplifications forced by compute limits, blind spots of the evaluation protocol, uncovered scene types, and the gap to an ideal system.

(Fill in here)

## References

> Hint: List 3–5+ papers/resources directly related to this project, as well as the reused course lab components (e.g., "the CEM implementation from Lab 4").

1.
2.
3.
