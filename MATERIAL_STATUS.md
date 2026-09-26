# Material Status

采集时间：2026-09-26。逐课明细见 `courses/<course_id>/README.md` 与 `links.md`；下载日志见 `logs/download.log`（本地，不上传）。

## 总量

| 指标 | 数量 |
|---|---|
| 调研课程 | 11 |
| 下载 PDF 总数 | 127 |
| Lecture notes / 讲义（含 HTML 交互讲义） | 30+ |
| Assignments / 习题（PDF + 公开 repo） | 16（5 Stanford PS + 6 CMU repos + 5 ETH 习题/项目） |
| Labs（MIT VNAV 讲义） | 11 |
| Notebooks（本地化） | 0（各课程 notebook 均为外链/Colab，未镜像） |
| 代码仓库（clone） | 7（CMU A0–A5 共 6 + llm-course 参考 1） |
| 记录 dead links | 在线复查：728 条 URL 中 25 条 404 + 8 条 410（详见 logs/link_check.md） |
| 需登录资源 | 在线复查确认 24 项（Canvas/Piazza/OLAT/bCourses/Ed/CourseWorks 等） |
| Pending verification | UCSD slides；CMU/Columbia Dropbox 链接；54 条 error + 9 条 timeout 多为本机网络拦截（Dropbox 等），浏览器大概率可达 |

> **链接复查（2026-09-26，scripts/check_links.py）**：728 条 URL → 559 正常（200/202）、25 条 404、8 条 410（Berkeley 学生 slides）、38 条 redirect（多为正常跳转）、24 条 login-required、10 条 403、63 条 error/timeout（以本机网络拦截为主，非链接失效）。逐条结果：logs/link_check.md（本地，不上传）。

## 磁盘占用（本地，含 gitignore 排除项）

约 **~1.0 GB**（各课程目录合计，最大：CMU 189M、Berkeley 178M、Stanford 166M、Cornell 153M、ETH 97M、UPenn 81M、MIT 78M、TUM 74M、Columbia 32M）。

## 逐课下载结果

| 课程 | PDF | Notes | Assignments | Dead links | 需登录 | 占用 |
|---|---|---|---|---|---|---|
| UPenn CIS 6280 | 10 | 7 | 0 | 3 | 2 | 81M |
| Stanford CS231A | 32 | 10 | 5 | 3 | 1 | 166M |
| CMU 16-825 | 0* | 0 | 6 repos | 3 | 2 | 189M |
| MIT VNAV | 30 | 5 | 11 labs | 2 | 1 | 78M |
| ETH/UZH VAMR | 25 | 4 | 5 | 2 | 1 | 97M |
| UCSD ML Meets Geometry | 0 | 0 | 0 | 0 | 1 | <1M |
| Berkeley CS294-173 | 9 | 4 | 0 | 4 | 4 | 178M |
| Cornell CS6672 | 9 | 0 | 0 | 2 | 2 | 153M |
| TUM DL4SpatialAI | 8 | 0 | 0 | 0 | 1 | 74M |
| Columbia Spatial AI | 4 | 0 | 0 | 0 | 1 | 32M |
| Harvard GSD | 0 | 0 | 0 | 0 | 1 | 20K |

\* CMU slides（每学期 22–25 份 PDF）为 Dropbox 公开链接，采集时本机网络 TLS 被重置，全部 URL 已记录在 `courses/cmu_16825_learning_for_3d_vision/links.md`，网络可达时可用 `scripts/download_materials.py` 补下。

## 已知网络受限（非链接失效）

- Dropbox 域名（CMU slides、Columbia 作业文件）在本机网络被拦截；链接本身公开有效。
- 个别站点对 curl 反爬（ETH vvz、szeliski.org 等），浏览器可正常访问，已在 links.md 标注。
