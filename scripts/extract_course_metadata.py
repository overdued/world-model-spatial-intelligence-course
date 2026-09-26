#!/usr/bin/env python3
"""汇总各课程的 metadata.json，生成 metadata/courses.json 与 metadata/courses.csv。

遍历 courses/*/metadata.json（跳过 extra/ 等空目录），JSON 校验失败的文件
打印警告后继续处理其余文件。CSV 列：
course_id,university,course_number,course_name,instructor,year,semester,
official_url,public_level,license,topics,slides,notes,assignments,labs,code,
videos,reading_list

仅依赖标准库，直接运行：python3 scripts/extract_course_metadata.py
"""

import csv
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COURSES_DIR = ROOT / "courses"
OUT_DIR = ROOT / "metadata"
OUT_JSON = OUT_DIR / "courses.json"
OUT_CSV = OUT_DIR / "courses.csv"

# 材料可用性字段（来自每门课 metadata.json 的 materials 对象）
MATERIAL_KEYS = ["slides", "notes", "assignments", "labs", "code", "videos", "reading_list"]

CSV_COLUMNS = (
    ["course_id", "university", "course_number", "course_name", "instructor",
     "year", "semester", "official_url", "public_level", "license", "topics"]
    + MATERIAL_KEYS
)


def load_course_metadata() -> tuple:
    """返回 (有效记录列表, 警告列表)。目录缺失或为空时返回空列表。"""
    records, warnings = [], []
    if not COURSES_DIR.is_dir():
        warnings.append(f"courses 目录不存在：{COURSES_DIR}")
        return records, warnings

    for course_dir in sorted(p for p in COURSES_DIR.iterdir() if p.is_dir()):
        meta_file = course_dir / "metadata.json"
        if not meta_file.is_file():
            # extra/ 等没有 metadata.json 的空目录直接跳过
            continue
        try:
            data = json.loads(meta_file.read_text(encoding="utf-8"))
        except json.JSONDecodeError as e:
            warnings.append(f"警告：{meta_file.relative_to(ROOT)} JSON 校验失败，已跳过：{e}")
            continue
        except OSError as e:
            warnings.append(f"警告：{meta_file.relative_to(ROOT)} 读取失败，已跳过：{e}")
            continue
        if not isinstance(data, dict):
            warnings.append(f"警告：{meta_file.relative_to(ROOT)} 顶层不是对象，已跳过")
            continue
        # 缺 course_id 时用目录名兜底
        data.setdefault("course_id", course_dir.name)
        records.append(data)

    return records, warnings


def flatten_for_csv(record: dict) -> dict:
    """把嵌套的 metadata 记录压平成一行 CSV。"""
    materials = record.get("materials") or {}
    topics = record.get("topics") or []
    if isinstance(topics, list):
        topics = ";".join(str(t) for t in topics)
    row = {col: record.get(col, "") for col in CSV_COLUMNS}
    row["topics"] = topics
    for key in MATERIAL_KEYS:
        value = materials.get(key)
        row[key] = "yes" if value is True else ("no" if value is False else "")
    return row


def main() -> int:
    records, warnings = load_course_metadata()
    for w in warnings:
        print(w, file=sys.stderr)

    if not records:
        print("未找到任何有效的 courses/*/metadata.json。")
        print("请先在 courses/<course_id>/ 下补齐 metadata.json 后再运行本脚本。")
        return 0

    # 按 course_id 排序，保证输出稳定（幂等）
    records.sort(key=lambda r: str(r.get("course_id", "")))

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(
        json.dumps(records, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    with OUT_CSV.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_COLUMNS)
        writer.writeheader()
        for record in records:
            writer.writerow(flatten_for_csv(record))

    print(f"已汇总 {len(records)} 门课程：")
    print(f"  - {OUT_JSON}")
    print(f"  - {OUT_CSV}")
    if warnings:
        print(f"（{len(warnings)} 条警告，详见上方 stderr 输出）")
    return 0


if __name__ == "__main__":
    sys.exit(main())
