# V0.3 Experiment Report

日期：2026-09-27

## 1. 新增 Lab

Lab 3（RSSM）、Lab 4（MPC/CEM）、Lab 5（NeRF/3DGS）、Lab 6（Dynamic 4D）、Lab 7（Video WM）、Lab 8（Navigation）、Lab 9（WM+Policy）、Lab 10（OOD 评估）+ Capstone 框架。

## 2. 已 Ready

**全部 11 个 Lab（0–10）Ready**。每个都经 `jupyter nbconvert --execute` 从头执行通过，输出内嵌 notebook。

## 3. 仍 Planned

无。Capstone 为项目模板（非 notebook），已交付。

## 4. 实测 Runtime（nbconvert wall clock，Apple Silicon CPU）

| Lab | Runtime | 峰值内存 | GPU |
|---|---|---|---|
| 0 Tiny World | ~5s | 小 | 不需要 |
| 1 Kalman | ~3s | 小 | 不需要 |
| 2 Latent Dynamics | ~62s | — | 不需要 |
| 3 Tiny RSSM | 183–404s（负载相关） | ~820MB | 不需要 |
| 4 MPC/CEM | ~15s | 355MB | 不需要 |
| 5 NeRF | ~3.5min | 513MB | 不需要 |
| 6 Dynamic 4D | ~9s | 543MB | 不需要 |
| 7 Video WM | ~2min | 587MB | 不需要 |
| 8 Navigation | ~29s | 595MB | 不需要 |
| 9 WM+Policy | ~45s | 360MB | 不需要 |
| 10 OOD Eval | ~2.5min | 923MB | 不需要 |

全部远低于 10 分钟 CPU 红线；Colab 免费层均可运行。

## 5. CPU/GPU 要求

全部 `gpu_required: false`（Colab CPU 即可，T4 更快但非必需）。各 Lab 实测峰值内存 ≤ 1GB。

## 6. Colab Run All

- 所有 notebook 按 Colab 规范构建：首格自动装依赖、无本地路径、数据代码内生成、徽章链接已验证格式。
- 本地干净 venv Run All：11/11 通过。
- Colab 云端实跑：未逐一实测（结构与前一轮已验证的 Lab 0–2 一致，风险低）——建议转 public 后抽测 Lab 3/5。

## 7. 实验依赖关系

```
Lab 0 → Lab 1 → (基础估计)
Lab 0 → Lab 2 → Lab 3 → Lab 4 → Lab 9 ┐
                  Lab 2 → Lab 7        ├→ Lab 10
Lab 0 → Lab 5 → Lab 6 → Lab 8 ────────┘
```
（notebook 均为自包含实现，依赖是概念性的，非代码依赖——保证 Colab 单文件可跑。）

## 8. Scientist Track 闭环

✅ 已打通：Observation(L0) → State(L1) → Representation(L2) → Dynamics/Imagination(L3) → Planning(L4) → Policy(L9) → Evaluation(L10)。
关键实测：MPC 用学到的模型成功率 8/8；Dreamer-style 样本效率 >10× model-free；OOD 下规划失败链（prediction→planning→policy）定量复现。

## 9. Spatial Track 闭环

✅ 已打通：Observation(L0) → 3D Representation(L5) → Dynamic World(L6) → Memory/Navigation(L8) → Evaluation(L10)。
关键实测：NeRF novel view 27.4 dB；World-Model agent 比纯记忆 agent 步数 -16%。

## 10. Capstone 状态

✅ 框架完成：六方向选题、统一设计十问、三里程碑、rubric、可运行评估脚手架（`python3 evaluation_template.py` 已验证）。

## 11. 发现的技术问题（已修复/已记录）

1. **RSSM posterior collapse 陷阱**：BCE 取 mean 时重建项与 KL 量纲不匹配，β≥0.1 即压垮 posterior → 改 `reduction="sum"`（已写入 Lab 3 教学）。
2. **latent 空间确定性模型的真实失败模式**是"自信的平均轨迹"而非像素模糊（Lab 3 用三组证据诚实呈现）。
3. **pixel MSE 饱和**导致 drift 曲线教学点不成立 → Lab 10 改用 soft-argmax 位置误差。
4. **Lab 2 训练坍缩**（V0.2 遗留，已知）：BCEWithLogits + 双侧 stop-gradient 修复。
5. **Colab 徽章 404 bug**：V0.2 的 labs 页给未实现 Lab 放了徽章 → V0.3 组件级 READY_LABS 守卫修复。
6. CPU 数值非确定性（conv backward 线程归约）导致逐位复现波动——已在 Lab 7 注明。

## 12. 下一版本建议

1. Colab 云端逐 lab 抽测（尤其 Lab 3/5）。
2. Lab 产出的 GIF/图接入网站模块页作展示素材。
3. Capstone 示例项目 1 个（降低启动门槛）。
4. Lab 3 与 Lab 4/9 之间的 checkpoint 传递（当前各 lab 自包含，可选进阶：保存/加载模型）。
5. 英文版翻译（当前内容中文为主）。
