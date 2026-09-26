#!/usr/bin/env python3
"""从 metadata/courses.json 重新生成仓库根目录的 COURSE_INDEX.md。

每门课一节：名称、学校、教师、学期、官方链接、public_level、
材料可用性 emoji 表、本地目录链接（courses/<id>/README.md）；
开头为全部课程的总览表。输出内容稳定（幂等），可重复运行。

metadata/courses.json 缺失或为空时给出友好提示并以 0 退出（不崩溃）。

仅依赖标准库，直接运行：python3 scripts/update_index.py
"""

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COURSES_JSON = ROOT / "metadata" / "courses.json"
OUT_FILE = ROOT / "COURSE_INDEX.md"

# 材料可用性字段及其中文标签
MATERIALS = [
    ("slides", "讲义 Slides"),
    ("notes", "笔记 Notes"),
    ("assignments", "作业 Assignments"),
    ("labs", "实验 Labs"),
    ("code", "代码 Code"),
    ("videos", "视频 Videos"),
    ("reading_list", "阅读清单 Reading List"),
]


def emoji(value) -> str:
    return "✅" if value is True else ("❌" if value is False else "❓")


def semester_label(course: dict) -> str:
    year = str(course.get("year", "") or "")
    sem = str(course.get("semester", "") or "")
    return f"{sem} {year}".strip() or "—"


def text(value) -> str:
    value = str(value or "").strip()
    return value if value else "—"


def overview_table(courses: list) -> list:
    lines = [
        "| 课程 | 学校 | 学期 | 公开程度 | 官方链接 |",
        "| --- | --- | --- | --- | --- |",
    ]
    for c in courses:
        name = text(c.get("course_name"))
        url = str(c.get("official_url", "") or "").strip()
        link = f"[链接]({url})" if url else "—"
        lines.append(
            f"| {name} | {text(c.get('university'))} | {semester_label(c)} "
            f"| {text(c.get('public_level'))} | {link} |"
        )
    return lines


def course_section(c: dict) -> list:
    cid = str(c.get("course_id", "") or "")
    name = text(c.get("course_name"))
    number = str(c.get("course_number", "") or "").strip()
    title = f"{number} {name}".strip() if number != "—" else name
    url = str(c.get("official_url", "") or "").strip()
    materials = c.get("materials") or {}

    lines = [f"## {title}", ""]
    lines.append(f"- **学校**：{text(c.get('university'))}")
    lines.append(f"- **教师**：{text(c.get('instructor'))}")
    lines.append(f"- **学期**：{semester_label(c)}")
    lines.append(f"- **官方链接**：[{url}]({url})" if url else "- **官方链接**：—")
    lines.append(f"- **公开程度**：{text(c.get('public_level'))}")
    if c.get("license"):
        lines.append(f"- **许可**：{c['license']}")
    if cid:
        lines.append(f"- **本地目录**：[courses/{cid}/README.md](courses/{cid}/README.md)")
    lines.append("")
    lines.append("| 材料 | 可用性 |")
    lines.append("| --- | --- |")
    for key, label in MATERIALS:
        lines.append(f"| {label} | {emoji(materials.get(key))} |")
    lines.append("")
    return lines


def build_index(courses: list) -> str:
    lines = [
        "# 课程索引：World Models & Spatial Intelligence",
        "",
        f"共收录 {len(courses)} 门课程。本文件由 `scripts/update_index.py` "
        "根据 `metadata/courses.json` 自动生成，请勿手工编辑。",
        "",
        "## 总览",
        "",
    ]
    lines += overview_table(courses)
    lines.append("")
    lines.append("## 课程详情")
    lines.append("")
    for c in courses:
        lines += course_section(c)
    return "\n".join(lines).rstrip("\n") + "\n"


def main() -> int:
    if not COURSES_JSON.exists():
        print(f"未找到 {COURSES_JSON}。")
        print("请先运行 python3 scripts/extract_course_metadata.py 生成课程汇总，"
              "再运行本脚本。")
        return 0

    try:
        courses = json.loads(COURSES_JSON.read_text(encoding="utf-8"))
    except json.JSONDecodeError as e:
        print(f"错误：{COURSES_JSON} 不是合法 JSON：{e}", file=sys.stderr)
        print("请重新运行 python3 scripts/extract_course_metadata.py 生成。", file=sys.stderr)
        return 1

    if not isinstance(courses, list) or not courses:
        print(f"{COURSES_JSON} 为空或格式不正确（应为课程对象数组），暂无课程可索引。")
        print("请先在 courses/<course_id>/ 下补齐 metadata.json，"
              "并运行 python3 scripts/extract_course_metadata.py。")
        return 0

    # 按学校 + course_id 排序，保证输出稳定（幂等）
    courses = [c for c in courses if isinstance(c, dict)]
    courses.sort(key=lambda c: (str(c.get("university", "")), str(c.get("course_id", ""))))

    OUT_FILE.write_text(build_index(courses), encoding="utf-8")
    print(f"已生成 {OUT_FILE}（{len(courses)} 门课程）。")
    return 0


if __name__ == "__main__":
    sys.exit(main())
