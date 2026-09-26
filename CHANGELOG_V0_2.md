# Changelog V0.2 — From Knowledge Repository to Interactive Open Course

日期：2026-09-26

V0.2 把项目从"资料仓库"重构为"可立即开始学习的在线课程"。V0.1 的全部调研成果保留，降级为 Research / Source Archive（`courses/`、`synthesis/`、`metadata/`、`COURSE_*.md`、`FINAL_REPORT.md` 等路径不变，不再作为课程主入口）。

## 新增

### 课程网站（website/，Docusaurus 3）
- 新首页：Hero（Start Learning / Explore Roadmap）→ Choose Your Path 三轨卡片 → Course Matrix（Module | Learn | Watch | Read | Build）→ Labs 预览（Colab 徽章）
- 交互式 Roadmap 页：Mermaid 课程总图，全部节点可点击进模块
- 统一模块模板：Why this matters → Visual Intuition → Core Idea → Key Concepts → Core Equations → University Lecture → Papers（Must Read/Recommended/Optional）→ Hands-on → Check Your Understanding（折叠答案）→ Takeaway → Next Module
- 学习进度：`ModuleProgress` checkbox + localStorage（`wmsi-progress`）+ Track 页进度条与 Continue Learning
- 功能：dark/light、全文搜索（本地索引）、KaTeX、Mermaid、代码高亮、折叠内容、上一页/下一页导航、sidebar、Edit this page
- Resources：University Courses 卡片页（11 门课）、Papers 过滤页（44 篇，按概念/等级前端过滤）

### 课程内容（website/docs/）
- Start Here 门户页
- Track A · World Model Scientist：13 个模块（a01–a13，含 Capstone）
- Track B · Spatial & Embodied Intelligence：13 个模块（b01–b13，含 Capstone）
- Foundations：5 个回查短页（线代/概率/PyTorch/DL/RL）
- 每模块溯源到具体大学 lecture（UPenn CIS6280、Stanford CS231A、MIT VNAV、ETH VAMR、CMU 16-825 等官方链接）

### 视觉资产（website/static/img/，17 张手写 SVG）
world-model-overview、scientist-roadmap、spatial-roadmap、world-model-taxonomy、observation-vs-state、state-space-model、kalman-filter、latent-dynamics、rssm、dreamer、mpc、video-world-model、nerf、gaussian-splatting、slam、spatial-memory、vla-world-action。统一学术风配色（1280×720）。

### Labs（labs/，全部从头执行测试通过）
- Lab 0 Build a Tiny World：自实现 Moving-Ball World（state/obs/action/transition/reward + rollout GIF 动画）
- Lab 1 Kalman Filter：从零 predict/update + 真值/观测/滤波/不确定带可视化 + Q/R 噪声交互实验
- Lab 2 Latent Dynamics：PyTorch image→encoder→z→dynamics→decoder，recon/one-step/open-loop rollout/误差累积曲线
- 每个 lab：README + notebook.ipynb（含执行输出）+ requirements.txt + Colab 徽章

### 工程
- `.github/workflows/deploy.yml`：push main 自动构建并部署 GitHub Pages
- README 重构为约 150 行的课程门户（完整内容全部进网站）
- 自动生成文件加 `AUTO-GENERATED — DO NOT EDIT` 头（generated_at + data source）

## 变更
- COURSE_INDEX.md 改由 `scripts/update_index.py` 自动生成（含头部标记）
- `.gitignore` 增加 website 构建产物与 notebook 临时文件

## 保留
- courses/、synthesis/、metadata/、references/、scripts/、FINAL_REPORT.md、MATERIAL_STATUS.md、COURSE_COMPARISON.md、LICENSES.md 全部保留（研究档案）

## 验证
- `npm run build` 严格模式（onBrokenLinks: throw）通过，32+ 页面
- 浏览器 E2E：roadmap 节点点击跳转、进度勾选持久化、论文过滤、移动端响应式
- 三个 notebook 用 `jupyter nbconvert --execute` 在干净 venv 从头执行成功（Lab0 ~5s / Lab1 ~3s / Lab2 ~62s CPU）
