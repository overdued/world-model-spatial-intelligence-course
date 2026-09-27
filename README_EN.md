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

## Further Resources

**Reference implementations** (the next step after each lab)

- Lab 2 → [lucas-maes/le-wm](https://github.com/lucas-maes/le-wm) (LeWorldModel, a JEPA world model trained from pixels on one GPU)
- Lab 3 / Lab 9 → [danijar/dreamerv3](https://github.com/danijar/dreamerv3) (official DreamerV3)
- Lab 4 → [nicklashansen/tdmpc2](https://github.com/nicklashansen/tdmpc2) (TD-MPC2) · [gaoyuezhou/dino_wm](https://github.com/gaoyuezhou/dino_wm) (DINO-WM)
- Lab 5 → [nerfstudio-project/nerfstudio](https://github.com/nerfstudio-project/nerfstudio) · [nerfstudio-project/gsplat](https://github.com/nerfstudio-project/gsplat)
- Lab 7 → [simchowitzlabpublic/nano-world-model](https://github.com/simchowitzlabpublic/nano-world-model) (minimal video world model) · [eloialonso/diamond](https://github.com/eloialonso/diamond) (diffusion world model)
- Lab 8 → [facebookresearch/habitat-lab](https://github.com/facebookresearch/habitat-lab) (embodied navigation simulator)

**Blogs and articles**

*Introductions to world models*
- [World Models, interactive paper](https://worldmodels.github.io/) (Ha & Schmidhuber, 2018)
- [World Models](https://rohitbandaru.github.io/blog/World-Models/) (Rohit Bandaru)
- ['World Models,' an Old Idea in AI, Mount a Comeback](https://www.quantamagazine.org/world-models-an-old-idea-in-ai-mount-a-comeback-20250902/) (Quanta Magazine, 2025)
- [The Dream Machines: Learning to Simulate and Act in the Physical World](https://richardcsuwandi.github.io/blog/2025/dream-machines/) (Richard Cornelius Suwandi, 2025)
- [Beyond the Hype: How I See World Models Evolving in 2025](https://knightnemo.github.io/blog/posts/wm_2025/) (Nemo)
- [A Path Towards Autonomous Machine Intelligence](https://openreview.net/forum?id=BZ5a1r-kVsf) (Yann LeCun, the JEPA position paper)

*JEPA and latent world models*
- [Deep Dive into Yann LeCun's JEPA](https://rohitbandaru.github.io/blog/JEPA-Deep-Dive/) (Rohit Bandaru)
- [SIGReg from First Principles: A Step-by-Step Construction of an Anti-Collapse Regularizer for JEPAs](https://rezabyt.github.io/blogposts/sigreg-tutorial.html) (Reza Bayat, 2026)

*Video and interactive world models*
- [Towards Video World Models](https://www.xunhuang.me/blogs/world_model.html) (Xun Huang)
- [Diffusion Models for Video Generation](https://lilianweng.github.io/posts/2024-04-12-diffusion-video/) (Lilian Weng, 2024)
- [Genie 2: A Large-Scale Foundation World Model](https://deepmind.google/discover/blog/genie-2-a-large-scale-foundation-world-model/) (Google DeepMind)
- [Genie 3: A New Frontier for World Models](https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/) (Google DeepMind)

*Model-based RL and agents*
- [DreamerV3 project page](https://danijar.com/project/dreamerv3/) (Hafner et al.)
- [Model-Based Reinforcement Learning: Theory and Practice](https://bair.berkeley.edu/blog/2019/12/12/mbpo/) (Michael Janner, BAIR Blog, 2019)
- [Do Agents Need a World Model?](https://richardcsuwandi.github.io/blog/2025/agents-world-models/) (Richard Cornelius Suwandi, 2025)

*Mechanistic world models and science*
- [World Models for Scientific Discovery](https://richardcsuwandi.github.io/blog/2026/wm-discovery/) (Richard Cornelius Suwandi, 2026)

*Spatial intelligence and 3D*
- [From Words to Worlds: Spatial Intelligence is AI's Next Frontier](https://drfeifei.substack.com/p/from-words-to-worlds-spatial-intelligence) (Fei-Fei Li)
- [Marble: A Multimodal World Model](https://www.worldlabs.ai/blog/marble-world-model) (World Labs)
- [NeRF Tutorial, ECCV 2022](https://sites.google.com/berkeley.edu/nerf-tutorial/home)
- [Introduction to 3D Gaussian Splatting](https://huggingface.co/blog/gaussian-splatting) (Hugging Face)
- [Road to 3D Gaussian Splatting](https://nazirnayal.xyz/blog/2024/road-to-3dgs/) (Nazir Nayal, 2024)

**Related awesome lists**

- [knightnemo/Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models): broad world model paper list
- [leofan90/Awesome-World-Models](https://github.com/leofan90/Awesome-World-Models): world models for embodied AI and driving
- [mll-lab-nu/Awesome-Spatial-Intelligence-in-VLM](https://github.com/mll-lab-nu/Awesome-Spatial-Intelligence-in-VLM): spatial reasoning in VLMs
- [opendilab/awesome-model-based-RL](https://github.com/opendilab/awesome-model-based-RL): model-based reinforcement learning
- [MrNeRF/awesome-3D-gaussian-splatting](https://github.com/MrNeRF/awesome-3D-gaussian-splatting): 3D Gaussian Splatting

The full filterable paper list, including surveys and mechanistic world model papers, is on the course website: [Papers](https://overdued.github.io/world-model-spatial-intelligence-course/en/docs/resources/papers).

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
