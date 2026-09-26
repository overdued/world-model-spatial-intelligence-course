# Final Report — World Models & Spatial Intelligence Course Repository

生成时间：2026-09-26

## 1. 调研课程数量

**11 门大学课程**（UPenn、Stanford、CMU、MIT、ETH/UZH、UCSD、Berkeley、Cornell、TUM、Columbia、Harvard GSD）+ 1 个开源课程模板深度分析（mlabonne/llm-course，Apache-2.0，已克隆至 `references/llm_course_reference/`）。

## 2. 下载 PDF 数量

**127 个 PDF**（全部经 SHA256 校验去重，无重复内容）：

| 课程 | PDF |
|---|---|
| Stanford CS231A | 32（17 slides + 10 notes + 5 PS） |
| MIT VNAV | 30（25 lecture + 5 lab slides） |
| ETH/UZH VAMR | 25（15 slides + 4 讲义 + 5 习题 + 1 教材章节） |
| UPenn CIS 6280 | 10（L01–L09 slides + L04 手写笔记） |
| Berkeley CS294-173 | 9 |
| Cornell CS6672 | 9（研讨论文 readings） |
| TUM DL4SpatialAI | 8（预备会/kickoff slides + 5 篇论文） |
| Columbia Spatial AI | 4 |

另有 UPenn L01–L07 交互式 HTML 讲义（reveal.js deck）完整保存。

## 3. Lecture notes 数量

约 **30 份**：Stanford 10 篇自包含 course notes（全）、UPenn 7 份交互讲义、MIT 5 份 lab notes、ETH 4 份讲义、Berkeley 4 份页面快照；另有 Harvard/Columbia 的课程描述快照若干。

## 4. Assignments 数量

**16 项 + 11 个 labs**：

- Stanford CS231A：5 个 problem set PDF（含 starter code/Colab/LaTeX 模板链接）
- CMU 16-825：6 个公开 GitHub 作业 repo（A0–A5，含 starter code 与详细 README）
- ETH/UZH VAMR：5 份习题/项目 PDF（11 次编程习题含官方解答）
- MIT VNAV：11 个 lab handouts（HTML 快照 + slides）

## 5. Notebooks 数量

**0 个本地化 notebook**。各课程的 notebook 均为外链（Colab/Dropbox），按"不上传第三方材料"原则只记录链接；CS231A 的 Colab 链接在 `courses/stanford_cs231a/links.md`。

## 6. 代码仓库数量

**7 个 clone**：CMU 16-825 作业 A0–A5（6 个）+ mlabonne/llm-course（1 个，Apache-2.0，仅作模板参考，未修改）。

## 7. 公开程度最高的课程

**Very High**：Stanford CS231A、MIT VNAV（OCW, CC BY-NC-SA 4.0）、ETH/UZH VAMR、CMU 16-825。
**High**：UPenn CIS 6280（slides/讲义公开，作业在 Canvas）。

## 8. 资料不公开的课程

- **Harvard GSD**：仅公开课程描述页，教学材料在 Canvas（HarvardKey SSO）。
- **Cornell CS6672**：无公开 slides/作业，仅 schedule + 阅读论文。
- **UCSD ML Meets Geometry**：作业在 Piazza；本次采集网络受限仅记录链接。
- **Berkeley CS294-173**：学生研讨 slides 多数失效（410 Gone），录像仅限注册学生。

## 9. 失效 URL

在线复查（`scripts/check_links.py`，728 条 URL）：**25 条 404 + 8 条 410** 确认失效，另有 63 条 error/timeout 主要是本机网络拦截（Dropbox 等，浏览器大概率可达）。典型失效链接：

- UPenn：`lectures/lecture-08|09|10/` 交互 deck 页 404（PDF 正常，L10 后材料尚未发布）
- Stanford：`ps2_template_2025.zip`、`section7.pdf`、`section8.pdf` 404
- CMU：`spring24|spring25|fall25/pages/schedule.html` 404（正确路径去掉 `pages/`）
- MIT：`vnav.mit.edu/lectures`、`vnav.mit.edu/schedule` 404
- ETH：`vamr.ethz.ch` 域名下线；ETH vvz 旧 ID 404
- Berkeley：学生 slides 410 Gone ×8；PMVS/SPIN 旧链接 404
- Cornell：`syllabus.html`、`assignments.html` 404

完整清单见各课程 `links.md` 与 `logs/link_check.md`。

## 10. 需登录的资源（在线复查确认 24 项）

Canvas（UPenn、Harvard、CMU）、Piazza（CMU、UCSD、Berkeley）、UZH OLAT（VAMR 录像）、bCourses（Berkeley）、Ed Discussions（Cornell）、CourseWorks（Columbia）、github.mit.edu（VNAV starter code）、TUM Wiki/Matrix、my.harvard 课表等。全部只记录链接，未做任何绕过。

## 11. 磁盘占用

**本地总计约 1.5 GB**（courses/ 约 1.4 GB + CIS 6280 压缩包 61M + 参考仓库 1.7M）。GitHub 仓库仅含索引/元数据/文档（约 1 MB 级），PDF 等下载物经 `.gitignore` 排除。

## 12. 推荐优先阅读的 5 门课程

1. **UPenn CIS 6280 World Models** —— 唯一的 World Models 专题课，本项目的结构蓝本（Representation/Prediction/Interaction 三主线）。
2. **Stanford CS231A** —— 几何地基 + 全公开 notes/作业，自学友好度最高。
3. **CMU 16-825** —— Learning-based 3D 主线 + 公开作业标杆。
4. **MIT VNAV** —— 状态估计/SLAM 的数学地基，CC 许可可自由使用。
5. **ETH/UZH VAMR** —— 手写多视图几何，与 VNAV 互补。

## 13. 推荐优先阅读的 20 个 lecture

| # | Lecture | 课程 |
|---|---|---|
| 1 | L04 State-Space Models | CIS 6280 |
| 2 | L05–L06 Self-supervised Representation Learning | CIS 6280 |
| 3 | L08 Latent World Models | CIS 6280 |
| 4 | L09 Planning & Control with World Models | CIS 6280 |
| 5 | L10 Policy & Value Learning (Dreamer, TD-MPC) | CIS 6280 |
| 6 | L12–L13 Video World Models | CIS 6280 |
| 7 | L15 Spatial World Models I (3D) | CIS 6280 |
| 8 | L16 Spatial World Models II (4D) | CIS 6280 |
| 9 | L17 Neural Physics | CIS 6280 |
| 10 | L19 Robot Learning II (VLA & World-Action Models) | CIS 6280 |
| 11 | L20 LLMs as World Models | CIS 6280 |
| 12 | L23 Evaluating World Models | CIS 6280 |
| 13 | Epipolar Geometry | CS231A |
| 14 | Structure from Motion | CS231A |
| 15 | Optimal Estimation (Kalman/EKF/UKF) | CS231A |
| 16 | NeRF & Gaussian Splatting | CS231A |
| 17 | Volume Rendering → NeRF → VolSDF | CMU 16-825 |
| 18 | Multi-view Transformers (VGGT) | CMU 16-825 |
| 19 | Visual-Inertial Odometry / SLAM I–II | MIT VNAV |
| 20 | Multiple-view Geometry 1–4（八点法/P3P/BA） | ETH VAMR |

## 14. 课程 V0.1 已生成内容

`synthesis/proposed_course_v0_1.md`（约 780 行）已包含：

- 课程定位、目标读者、设计理念（llm-course 模板借鉴方案）
- Three Learning Tracks（Fundamentals / Scientist / Spatial & Embodied Engineer）
- 完整课程树 Part 0–VI（每节含定位、知识点、参考课程来源）
- Lab 0–10 + Capstone（每个含 Objective / Prerequisites / Framework / Dataset / GPU / Expected Output / Related Course / Papers）
- Roadmap 设计建议与开源维护策略（CC BY 4.0 + MIT、Colab notebook 策略、版本里程碑）

配套分析文档：`world_model_topics.md`（25 主题）、`spatial_intelligence_topics.md`（25 主题）、`curriculum_analysis.md`（课程链路与知识缺口）、`assignment_analysis.md`（作业设计对比与借鉴方案）、`course_design_lessons.md`（llm-course 模板分析）。

## 15. 下一阶段建议

1. **补下载**：在可访问 Dropbox 的网络下重跑 `scripts/download_materials.py`，补 CMU 全学期 slides 与 Columbia 作业文件（URL 已在 links.md 备好）。
2. **跟踪 CIS 6280**：Fall 2026 学期进行中，L10–L23 slides 与作业陆续发布，期末后重跑采集即可幂等补全。
3. **制作 Lab notebook**：按 V0.1 的 Lab 0–10 设计逐个实现 Colab notebook（课程的核心原创内容）。
4. **绘制 Roadmap 图**：把三轨 × 六 Part 结构做成图片（参照 llm-course 的 roadmap 图）。
5. **链接巡检 CI**：把 `scripts/check_links.py` 接入 GitHub Actions 定期跑。
6. **补新课程**（可选候选：如公开程度达标的 robot learning / MBRL 课程），放入 `courses/extra/`。
7. **仓库转公开**：内容就绪后在 GitHub Settings 将 private 改为 public。

## 附：GitHub 仓库

- 仓库：`overdued/world-model-spatial-intelligence-course`（当前 **private**）
- 仓库内只含：README、COURSE_INDEX、COURSE_COMPARISON、MATERIAL_STATUS、LICENSES、metadata、courses/*/README+metadata+links、synthesis、scripts
- 不能上传的文件（受版权/许可限制的 PDF 等）全部以原始官方链接形式记录在各课程 `links.md`
