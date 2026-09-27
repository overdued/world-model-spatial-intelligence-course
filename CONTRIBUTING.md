# 贡献指南

**中文版**（本页） | [English Version](CONTRIBUTING_EN.md)

感谢你愿意改进这门课程！下面是最常见的几类贡献方式。提交前请先阅读对应小节。

## 推荐论文

论文列表的数据源是 [`website/src/data/papers.js`](website/src/data/papers.js)，网站的 Papers 页面由它自动生成。

- 只收录**真实、可验证**的公开论文，优先使用 arXiv 摘要页链接（`https://arxiv.org/abs/...`）。
- 填写全部字段：`title`、`authors`、`year`、`venue`、`url`、`concept`、`level`。
- `concept` 取值：`Representation` / `Dynamics` / `Planning` / `Video` / `3D` / `Robotics` / `Evaluation` / `Theory` / `Survey`。
- `level` 取值：`Foundation` / `Must Read` / `Advanced`。
- 在 PR 描述里用一两句话说明它为什么值得加入。

## 修改课程模块

网站是中英双语的，同一个模块有两个文件：

| 语言 | 路径 |
|---|---|
| 中文（默认） | `website/docs/<track>/<module>.mdx` |
| English | `website/i18n/en/docusaurus-plugin-content-docs/current/<track>/<module>.mdx` |

请**同时更新两种语言**。如果只能改一种，请在 PR 中注明，方便其他人补上翻译。

## 新增或修改 Lab

- Notebook 必须能在 CPU 上从头到尾运行（Colab 免费层即可）。CI 会在每个 PR 中自动执行所有 Lab。
- 依赖写入该 Lab 的 `requirements.txt`。
- 同时更新 `README.md` 与 `README_EN.md`，以及 [`labs/manifest.json`](labs/manifest.json) 中的状态。

## 大学课程链接

- 链接记录在 `courses/<course_id>/links.md`。
- **不要提交课程 PDF、slides 等第三方材料**，只记录官方原始链接（见 [LICENSES.md](LICENSES.md)）。
- 可以运行 `python scripts/check_links.py` 检查链接是否失效（CI 每周也会自动运行）。

## 本地预览网站

需要 Node.js 18 或更高版本：

```bash
cd website
npm ci
npm start                    # 中文版，http://localhost:3000/world-model-spatial-intelligence-course/
npm start -- --locale en     # 英文版
npm run build && npm run serve   # 双语完整构建，可测试语言切换
```

提交 PR 前请确认 `npm run build` 能通过，CI 也会自动检查。

## 提交 PR

- 每个 PR 只做一件事，便于审阅。
- 填写 PR 模板中的检查清单。
- 贡献的代码按 [MIT](LICENSE) 授权，课程内容按 [CC BY 4.0](LICENSE-CONTENT) 授权。
