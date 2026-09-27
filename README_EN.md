# World Models & Spatial Intelligence

**From Representation to Prediction, Planning and Physical Intelligence**

> 🏫 **CUHK(SZ) · SAI · BL&SP Research Group** — 香港中文大学（深圳）人工智能学院 BL&SP 课题组

An open course: from world representation to prediction, planning, and physical intelligence.

**English** (this page) | [中文版](README.md)

> 📖 **Course website (main entry)**: https://overdued.github.io/world-model-spatial-intelligence-course/
>
> This repository is the content source of the course. Start learning from the website — you do not need to understand the repository's directory structure.

![Overview](website/static/img/world-model-overview.svg)

## What is this

"World Model" is becoming the central concept connecting representation learning, generative models, reinforcement learning, and robotics; "Spatial Intelligence" is the key capability that brings it into the physical world. Yet no existing open course covers this chain end to end. This course reorganizes the public materials of 11 top university courses (UPenn, Stanford, CMU, MIT, ETH/UZH, UCSD, Berkeley, Cornell, TUM, Columbia, Harvard) into **two learning tracks you can start immediately**, with an interactive roadmap, a unified module template, and runnable Colab labs.

## Roadmap

```
Observation → World State → Representation → Dynamics → Prediction → Planning → Action
```

Interactive full roadmap (clickable nodes that link into modules): [Course Website Roadmap](https://overdued.github.io/world-model-spatial-intelligence-course/roadmap)

## Learning Tracks

| Track | Path | For whom |
|---|---|---|
| 🧩 **Foundations** | Math / PyTorch / CV / RL groundwork, consulted on demand | Everyone |
| 🧑‍🔬 **World Model Scientist** | POMDP → SSM → RSSM → Dreamer → Planning → Video WM → Evaluation | Researchers who want to build world models |
| 👷 **Spatial & Embodied Engineer** | Geometry → Depth/Point Cloud → NeRF/3DGS → SLAM/VIO → Navigation → VLA | Engineers who want to build spatial intelligence systems |

Every module follows a unified template: Why this matters → Visual Intuition → Core Idea → Key Concepts → Core Equations → University Lecture (traced back to a specific university lecture) → Papers (Must Read / Recommended / Optional) → Hands-on → Check Your Understanding → Takeaway → Next Module.

## Labs

All 11 labs are runnable (CPU only; one-click execution on the free Colab tier):

| Lab | Content | Runtime |
|---|---|---|
| [Lab 0 · Tiny World](labs/lab00_tiny_world/) | Build an environment from scratch: state/obs/action/transition/reward | CPU ~5s |
| [Lab 1 · Kalman Filter](labs/lab01_kalman_filter/) | Hand-written KF predict/update + uncertainty visualization | CPU ~3s |
| [Lab 2 · Latent Dynamics](labs/lab02_latent_dynamics/) | image→encoder→dynamics→decoder, rollout and error accumulation | CPU ~1min |
| [Lab 3 · Tiny RSSM](labs/lab03_tiny_rssm/) | deterministic h + stochastic z, prior/posterior/KL, imagination rollout | CPU ~3min |
| [Lab 4 · MPC / CEM Planning](labs/lab04_mpc_cem_planning/) | Planning with a learned model: candidate trajectories, receding horizon | CPU ~15s |
| [Lab 5 · NeRF / 3DGS](labs/lab05_nerf_gaussian_splatting/) | Hand-written tiny NeRF: rays→sampling→volume rendering→novel view | CPU ~3.5min |
| [Lab 6 · Dynamic 4D Worlds](labs/lab06_dynamic_4d_worlds/) | (x,y,z,t): ICP motion estimation, temporal interpolation, future prediction | CPU ~10s |
| [Lab 7 · Video World Model](labs/lab07_video_world_model/) | ConvGRU video prediction, 1/5/10-step degradation | CPU ~2min |
| [Lab 8 · Navigation World Model](labs/lab08_navigation_world_model/) | Partially observable navigation: Reactive vs Memory vs World-Model | CPU ~30s |
| [Lab 9 · World Model + Policy](labs/lab09_world_model_policy/) | Tiny Dreamer: training actor-critic in imagination | CPU ~45s |
| [Lab 10 · OOD / Drift Evaluation](labs/lab10_ood_drift_evaluation/) | ID/Mild/Strong OOD + Failure Gallery | CPU ~2.5min |

Every lab's README carries an **Open in Colab** badge. Lab status is maintained centrally in [`labs/manifest.json`](labs/manifest.json). For the final project see [capstone/](capstone/) (Build Your Own World Model).

## University Sources

Every knowledge point in the course modules is traced back to a university lecture. Full survey (index, comparison, public availability, and link status of the 11 courses):

- [COURSE_INDEX.md](COURSE_INDEX.md) · [COURSE_COMPARISON.md](COURSE_COMPARISON.md) · [MATERIAL_STATUS.md](MATERIAL_STATUS.md) · [LICENSES.md](LICENSES.md)
- Per-course materials: `courses/<course_id>/` (UPenn CIS 6280, Stanford CS231A, CMU 16-825, MIT VNAV, ETH/UZH VAMR, UCSD, Berkeley, Cornell, TUM, Columbia, Harvard)
- Course-system and topic analysis: `synthesis/`

> Due to copyright/licensing restrictions, course PDFs are not uploaded to this repository; only local research copies are kept. The original official links are recorded one by one in `courses/<course_id>/links.md`.

## Repository Structure

```
├── website/      ← Docusaurus course website (main entry, auto-deployed to GitHub Pages)
├── labs/         ← Runnable labs (Colab compatible)
├── courses/      ← Research archive: index and local materials of 11 university courses
├── synthesis/    ← Research archive: course-system analysis and course design V0.1
├── metadata/     ← Research archive: courses.json / courses.csv (auto-generated by scripts)
└── scripts/      ← Download / link-check / metadata / index-maintenance scripts
```

## Citation

```bibtex
@misc{wmsi-course,
  title  = {World Models \& Spatial Intelligence: An Open Course},
  author = {overdued},
  year   = {2026},
  url    = {https://github.com/overdued/world-model-spatial-intelligence-course}
}
```

## License

- Course content (website/docs, synthesis): **CC BY 4.0**
- Code (labs, scripts, website/src): **MIT**
- Third-party university course materials: copyright belongs to the original authors/universities (see [LICENSES.md](LICENSES.md)); this repository only indexes links and does not redistribute them

## Acknowledgements

All instructors and teaching-assistant teams of the included courses; template inspiration from [mlabonne/llm-course](https://github.com/mlabonne/llm-course) (Apache-2.0).
