# Changelog V0.3 — Hands-on World Models & Spatial Intelligence

日期：2026-09-27

V0.3 把课程从"理论 + 3 个实验"升级为完整可动手课程：**Lab 0–10 全部实现并实测跑通**，新增 Capstone 框架，建立统一 Lab 状态管理。网站框架未大改。

## 新增

### Labs（labs/，全部 nbconvert --execute 实测通过，CPU 可运行）
- **Lab 3 · Tiny RSSM**：GRU h_t + 随机 z_t，prior/posterior/KL 全手写；imagination rollout GIF；deterministic baseline 对比（发现 latent 空间确定性模型的真实失败模式是"自信的平均轨迹"而非像素模糊）；修复了 BCE mean/sum 量纲导致 posterior collapse 的坑
- **Lab 4 · MPC / CEM Planning**：random shooting + CEM 手写实现；Random/MPC(perfect)/MPC(learned)/CEM 四对比（-29.1 / -5.7 / -5.9 / -5.4）；open-loop vs closed-loop 实验证明 replanning 可吸收 model bias
- **Lab 5 · NeRF / 3DGS**：零下载 tiny NeRF（19k 参数），novel view PSNR 27.4 dB，360° orbit GIF；2D splatting 演示作 Advanced Extension
- **Lab 6 · Dynamic 4D Worlds**：手写 ICP + scene flow + MLP dynamics；3 个 4D 动画；MLP vs 恒速基线的 OOD 外推教学点
- **Lab 7 · Video World Model**：手写 ConvGRU（68k 参数）Moving Shapes 预测；1/5/10 步退化 3.6×→5.5×
- **Lab 8 · Navigation World Model**：部分可观测 grid world；Reactive 58% vs Memory 100% vs World-Model 100%（步数 -16%）；OOD 障碍噪声下模型精度 0.89→0.73 的诚实讨论
- **Lab 9 · World Model + Policy**：Tiny Dreamer 闭环；5,000 真实步 success 1.0 vs model-free 10× 预算仍不及；model bias 复现（imagined 43 vs real 1）
- **Lab 10 · OOD / Drift Evaluation**：ID/Mild/Strong 三级偏移；one-step 0.0087 vs Strong 0.19；12 步 drift ×7.1；ensemble disagreement 与真实误差 r=0.686；Failure Gallery 自动生成

### Capstone（capstone/）
README（六方向、统一设计十问、三里程碑、rubric）+ template/（report_template.md、可运行的 evaluation_template.py、project_structure.md）

### Lab 状态管理
- `labs/manifest.json`：11 个 Lab 的统一数据源（status/runtime/依赖/模块映射），含实测 runtime 与峰值内存
- `ColabBadge` 组件加 `READY_LABS` 守卫：未上线 Lab 显示 🚧 占位，杜绝 404 Colab 链接
- Labs 页：状态列 + Mermaid 依赖图（Scientist/Spatial/Video 三条链路）
- 15 个模块页 Hands-on 节与 Lab 双向链接

## 修复
- V0.2 遗留 bug：labs 页面给未实现的 Lab 3–10 放了可点击 Colab 徽章（用户实测 404）→ 组件级修复

## 验证
- 11 个 notebook 全部在干净 venv 从头 `Run All` 通过（CPU，最长 Lab 3 约 3 分钟）
- `npm run build` 严格模式通过
- 闭环路径打通：Observation(L0) → State Estimation(L1) → Representation(L2) → Dynamics+Imagination(L3) → Planning(L4) → Policy(L9) → Evaluation(L10)；Spatial：L0 → 3D(L5) → 4D(L6) → Navigation(L8) → Evaluation(L10)
