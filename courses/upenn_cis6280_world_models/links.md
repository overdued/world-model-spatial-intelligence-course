# CIS 6280: World Models — 链接清单

抓取日期：2026-09-26。状态为当时实测 HTTP 状态；"未验证" 指 curl 被拦截（TLS/bot 防护）但浏览器大概率可访问。

## 官方

| URL | 状态 | 备注 |
|---|---|---|
| https://jiataogu.me/cis6280-world-models/ | 200 | 课程主页（教师自建），已存快照 |
| https://jiataogu.me/ | 200 | 教师 Jiatao Gu 主页 |
| https://jiataogu.me/cis6280-world-models/cis6280-fall-2026.ics | 200 | 课程日历，已下载 |
| https://catalog.upenn.edu/courses/cis/ | 202/200 | 学校课程目录，含 "CIS 6280 World Models" 条目（curl 202，FetchURL 可读） |
| https://courses.upenn.edu/?details&srcdb=202630&crn=90075 | 200 (JS 动态页) | 注册系统条目，内容需 JS 渲染 |
| https://canvas.upenn.edu/ | login-required | 作业规格、Zoom 链接、评分细则发布处 |
| https://almanac.upenn.edu/penn-academic-calendar | 200 | Penn 校历 |
| https://catalog.upenn.edu/pennbook/code-of-academic-integrity/ | 202 | 学术诚信守则 |
| https://facilities.upenn.edu/maps/locations/amygutmannhall | 未验证 | 上课地点 Amy Gutmann Hall |
| https://weingartencenter.universitylife.upenn.edu/disability-services/ | 未验证 | 无障碍服务 |
| mailto:jgu32@seas.upenn.edu | — | 课程联系邮箱 |

## Lecture slides（PDF，全部 200，已下载）

| URL | 状态 |
|---|---|
| https://jiataogu.me/cis6280-world-models/lectures/lecture-01-world-models-overview.pdf | 200 |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-02-world-models-history-foundations-probabilistic-formulation.pdf | 200 |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-03-environments-simulators-rollouts.pdf | 200 |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-04-state-space-models.pdf | 200 |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-04-lgssm-handwritten-notes.pdf | 200 |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-05-representation-learning-i.pdf | 200 |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-06-representation-learning-ii.pdf | 200 |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-07-generative-models-i.pdf | 200 |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-08-latent-world-models.pdf | 200 |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-09-planning-control-world-models.pdf | 200 |

## Interactive slides（reveal.js HTML decks）

| URL | 状态 |
|---|---|
| https://jiataogu.me/cis6280-world-models/lectures/lecture-01/ | 200，已下载 |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-02/ | 200，已下载 |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-03/ | 200，已下载 |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-04/ | 200，已下载 |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-05/ | 200，已下载 |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-06/ | 200，已下载 |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-07/ | 200，已下载 |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-08/ | 404（仅 PDF 公开） |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-09/ | 404（仅 PDF 公开） |
| https://jiataogu.me/cis6280-world-models/lectures/lecture-10/ | 404（尚未发布） |

## Readings（课程页面逐讲外链）

| URL | 状态 | 关联 |
|---|---|---|
| https://loqmansamani.github.io/articles/model_based_rl/index.html | 200 | L2 MBRL History |
| https://gymnasium.farama.org/introduction/basic_usage/ | 200 | L3 Gymnasium |
| https://probml.github.io/dynamax/notebooks/linear_gaussian_ssm/kf_tracking.html | 200 | L4 Kalman Filter tracking notebook |
| https://lilianweng.github.io/posts/2021-05-31-contrastive/ | 200 | L5 Contrastive Representation Learning |
| https://rohitbandaru.github.io/blog/JEPA-Deep-Dive/ | 200 | L6 JEPA Deep Dive |
| https://lilianweng.github.io/posts/2018-08-12-vae/ | 200 | L7 From Autoencoder to Beta-VAE |
| https://arxiv.org/abs/1606.05908 | 200 | L7 Tutorial on VAEs (Carl Doersch) |

## Resources — Essays & perspectives

| URL | 状态 | 备注 |
|---|---|---|
| https://worldmodels.github.io/ | 200 | World Models (Ha & Schmidhuber) |
| https://openreview.net/forum?id=BZ5a1r-kVsf | 200 | A Path Towards Autonomous Machine Intelligence (LeCun) |
| https://drfeifei.substack.com/p/from-words-to-worlds-spatial-intelligence | 未验证（curl/Fetch 均被拦，浏览器可访问） | From Words to Worlds (Fei-Fei Li) |
| https://www.worldlabs.ai/blog/taxonomy-of-world-models | 200 | A Functional Taxonomy of World Models (World Labs) |
| https://deepmind.google/blog/agents-that-imagine-and-plan/ | 200 | Agents That Imagine and Plan (DeepMind) |
| https://incompleteideas.net/papers/RLDM22-quest-common-model.pdf | 200（curl 被拦，FetchURL 确认可下载） | The Quest for a Common Model (Sutton, RLDM 2022) |

## Resources — Tutorials & collections

| URL | 状态 | 备注 |
|---|---|---|
| https://world-model-tutorial.github.io/ | 200 | From Video Generation to World Model (CVPR 2025) |
| https://world-model-mila.github.io/ | 200 | World Modeling Workshop (Mila 2026) |
| https://github.com/JiahuaDong/Awesome-World-Models | 200 | Awesome World Models (Dong et al.) |
| https://clearlab-sustech.github.io/WorldModelSurvey/ | 200 | From World Models to World Action Models (survey) |
| https://www.cs.cmu.edu/~mgormley/courses/10423/slides/lecture26-world-models.pdf | 200（curl 被拦，FetchURL 确认可下载） | World Models (CMU 10-423 Generative AI, L26) |
| https://web.stanford.edu/class/cs234/slides/ShaneGuCS234_2026.pdf | 200 | The World of World Modeling (Stanford CS234) |

## Resources — Talks & seminars

| URL | 状态 | 备注 |
|---|---|---|
| https://www.nvidia.com/en-us/on-demand/session/gtcspring23-s52092/ | 未验证 | Sutskever × Huang fireside (GTC 2023) |
| https://news.berkeley.edu/2023/03/24/berkeley-talks-jitendra-malik/ | 200 | Sensorimotor Road to AI (Berkeley 2023) |
| https://www.ted.com/talks/fei_fei_li_with_spatial_intelligence_ai_will_understand_the_real_world | 未验证 | Fei-Fei Li TED 2024 |
| https://www.youtube.com/watch?v=OKkEdTchsiE | 未验证（YouTube 不返回简单状态码） | LeCun fireside (RAISE 2026) |
| https://www.youtube.com/watch?v=EvSe0ktD95k | 未验证 | LeCun AFOSR 2024 |
| https://www.youtube.com/watch?v=iDpPFAXmcZc | 未验证 | LeCun IHES 2023 |

## Resources — Systems & demos

| URL | 状态 | 备注 |
|---|---|---|
| https://danijar.com/project/dreamerv3/ | 200 | DreamerV3 |
| https://ai.meta.com/research/vjepa/ | 未验证（DNS/bot 拦截，浏览器可访问） | V-JEPA 2 (Meta AI) |
| https://deepmind.google/models/genie/ | 200 | Genie (DeepMind) |
| https://www.worldlabs.ai/blog/marble-world-model | 200 | Marble (World Labs) |
| https://wayve.ai/thinking/gaia-4/ | 200 | GAIA-4 (Wayve) |
| https://genbio.ai/aido-cell-simulator/ | 403（bot 拦截） | AIDO Cell Simulator |
| https://danijar.com/project/daydreamer/ | 200 | DayDreamer: Physical Robot Learning |
| https://proceedings.mlr.press/v267/zhou25t.html | 200 | DINO-WM (ICML 2025) |

## TA / staff 主页

- https://oriontmt.github.io/ （Mutian Tong）
- https://keely-ai.github.io/ （Yong-Hyun Park）
- https://www.enxinsong.com/ （Enxin Song）
- https://enkeejunior1.github.io/ （Xinyue Ai）

## 需登录 / 未公开

- Canvas（作业规格、评分权重、Zoom 链接、final project rubric）：https://canvas.upenn.edu/ — login-required
- L10–L23 slides：尚未发布（课程进行中，随学期更新，建议后续重跑抓取）
