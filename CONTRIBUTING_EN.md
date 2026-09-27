# Contributing

**English** (this page) | [中文版](CONTRIBUTING.md)

Thanks for helping improve this course! These are the most common kinds of contribution. Please read the matching section before you open a pull request.

## Suggesting a paper

The paper list lives in [`website/src/data/papers.js`](website/src/data/papers.js), and the site's Papers page is generated from it.

- Only add **real, verifiable** public papers. Prefer arXiv abstract links (`https://arxiv.org/abs/...`).
- Fill in every field: `title`, `authors`, `year`, `venue`, `url`, `concept`, `level`.
- `concept` is one of `Representation` / `Dynamics` / `Planning` / `Video` / `3D` / `Robotics` / `Evaluation` / `Theory` / `Survey`.
- `level` is one of `Foundation` / `Must Read` / `Advanced`.
- In the PR description, say in a sentence or two why it belongs in the course.

## Editing a course module

The site is bilingual, so each module has two files:

| Language | Path |
|---|---|
| Chinese (default) | `website/docs/<track>/<module>.mdx` |
| English | `website/i18n/en/docusaurus-plugin-content-docs/current/<track>/<module>.mdx` |

Please **update both languages**. If you can only edit one, say so in the PR so someone else can add the translation.

## Adding or changing a lab

- The notebook must run top to bottom on CPU (the free Colab tier is enough). CI executes every lab on each pull request.
- List dependencies in the lab's `requirements.txt`.
- Update both `README.md` and `README_EN.md`, and the lab's status in [`labs/manifest.json`](labs/manifest.json).

## University course links

- Links are recorded in `courses/<course_id>/links.md`.
- **Do not commit course PDFs, slides, or other third-party material.** Only record the official source links (see [LICENSES.md](LICENSES.md)).
- Run `python scripts/check_links.py` to find dead links. CI also runs it every week.

## Previewing the site locally

You need Node.js 18 or newer:

```bash
cd website
npm ci
npm start                    # Chinese, http://localhost:3000/world-model-spatial-intelligence-course/
npm start -- --locale en     # English
npm run build && npm run serve   # full bilingual build, to test the language switcher
```

Make sure `npm run build` passes before opening a PR. CI checks it too.

## Opening a pull request

- Keep each PR to one change so it is easy to review.
- Fill in the checklist in the PR template.
- Code contributions are licensed under [MIT](LICENSE) and course content under [CC BY 4.0](LICENSE-CONTENT).
