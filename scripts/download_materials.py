#!/usr/bin/env python3
"""清单驱动的幂等课程资料下载器。

读取 metadata/materials.json（可用 --manifest 覆盖），逐条下载到指定位置：
- 下载前先 HEAD 检查（拿不到信息时继续尝试 GET）；
- 目标已存在且大小 > 0 时跳过；
- 超过 --max-size-mb 的文件拒绝下载；
- 下载后计算 SHA256，与本次会话及清单中已记录的 hash 去重，重复则删除；
- 每次尝试向 logs/download.log 追加一行：
  [ISO时间] [course_id] [OK/FAIL/SKIP] [http状态] [url] -> [dest或原因]

仅依赖标准库，直接运行：python3 scripts/download_materials.py
"""

import argparse
import hashlib
import json
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_MANIFEST = ROOT / "metadata" / "materials.json"
LOG_FILE = ROOT / "logs" / "download.log"

# 伪装成浏览器，避免部分站点拒绝默认 UA
USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/126.0.0.0 Safari/537.36"
)

# manifest 不存在时生成的示例模板
TEMPLATE = [
    {
        "course_id": "example_course_a",
        "url": "https://example.org/course-a/lectures/L01_introduction.pdf",
        "dest": "courses/example_course_a/lectures/L01_introduction.pdf",
        "license_status": "unknown",
    },
    {
        "course_id": "example_course_b",
        "url": "https://example.org/course-b/notes/week01.pdf",
        "dest": "courses/example_course_b/lectures/week01_notes.pdf",
        "license_status": "unknown",
    },
]


def iso_now() -> str:
    """本地时区 ISO 时间戳。"""
    return datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds")


def append_log(course_id: str, status: str, http_status: str, url: str, tail: str) -> None:
    LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
    line = f"[{iso_now()}] [{course_id}] [{status}] [{http_status}] [{url}] -> [{tail}]\n"
    with LOG_FILE.open("a", encoding="utf-8") as f:
        f.write(line)


def sha256_of(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def head_request(url: str, timeout: int = 15):
    """HEAD 检查，返回 (http状态, content-length 或 None)。失败返回 (None, None)。"""
    req = urllib.request.Request(url, method="HEAD", headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            length = resp.headers.get("Content-Length")
            return str(resp.status), int(length) if length and length.isdigit() else None
    except urllib.error.HTTPError as e:
        # 有些服务器不支持 HEAD（405 等），状态码仍然是有用信息
        return str(e.code), None
    except (urllib.error.URLError, OSError):
        return None, None


def download_one(entry: dict, max_bytes: int, dry_run: bool, session_hashes: set) -> str:
    """处理单条记录，返回 OK / FAIL / SKIP。"""
    course_id = str(entry.get("course_id", "unknown"))
    url = str(entry.get("url", ""))
    dest_rel = str(entry.get("dest", ""))
    if not url or not dest_rel:
        append_log(course_id, "FAIL", "-", url or "-", "manifest 条目缺少 url 或 dest")
        return "FAIL"

    dest = ROOT / dest_rel

    # 幂等：已存在且非空则跳过，同时把其 hash 纳入会话去重池
    if dest.exists() and dest.stat().st_size > 0:
        try:
            session_hashes.add(sha256_of(dest))
        except OSError:
            pass
        append_log(course_id, "SKIP", "-", url, f"{dest_rel} 已存在，跳过")
        return "SKIP"

    head_status, content_length = head_request(url)

    if content_length is not None and content_length > max_bytes:
        append_log(
            course_id, "FAIL", head_status or "-", url,
            f"超过大小限制（{content_length} 字节 > {max_bytes} 字节）",
        )
        return "FAIL"

    if dry_run:
        size_hint = f"，Content-Length={content_length}" if content_length else ""
        print(f"[DRY-RUN] 将下载 {url} -> {dest_rel}（HEAD 状态 {head_status or '未知'}{size_hint}）")
        return "SKIP"

    dest.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    tmp = dest.with_suffix(dest.suffix + ".part")
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            status = str(resp.status)
            written = 0
            with tmp.open("wb") as f:
                while True:
                    chunk = resp.read(1024 * 256)
                    if not chunk:
                        break
                    written += len(chunk)
                    if written > max_bytes:
                        raise OverflowError(f"下载超过大小限制（>{max_bytes} 字节）")
                    f.write(chunk)
    except urllib.error.HTTPError as e:
        tmp.unlink(missing_ok=True)
        append_log(course_id, "FAIL", str(e.code), url, f"HTTP 错误：{e.reason}")
        return "FAIL"
    except OverflowError as e:
        tmp.unlink(missing_ok=True)
        append_log(course_id, "FAIL", locals().get("status", "-"), url, str(e))
        return "FAIL"
    except (urllib.error.URLError, OSError) as e:
        tmp.unlink(missing_ok=True)
        append_log(course_id, "FAIL", head_status or "-", url, f"网络/写入错误：{e}")
        return "FAIL"

    # SHA256 去重：与本次会话及 manifest 中已记录的 hash 比较
    digest = sha256_of(tmp)
    known_hashes = session_hashes | {
        str(e.get("sha256")) for e in MANIFEST_HASHES_SOURCE if e.get("sha256")
    }
    if digest in known_hashes:
        tmp.unlink(missing_ok=True)
        append_log(course_id, "SKIP", status, url, f"内容重复（sha256={digest[:12]}…），已删除")
        return "SKIP"

    tmp.replace(dest)
    session_hashes.add(digest)
    append_log(course_id, "OK", status, url, dest_rel)
    return "OK"


# 在 main 中赋值，供 download_one 读取 manifest 里已记录的 hash
MANIFEST_HASHES_SOURCE: list = []


def main() -> int:
    parser = argparse.ArgumentParser(description="清单驱动的幂等课程资料下载器")
    parser.add_argument("--manifest", default=str(DEFAULT_MANIFEST),
                        help="材料清单 JSON 路径（默认 metadata/materials.json）")
    parser.add_argument("--dry-run", action="store_true",
                        help="只做 HEAD 检查并打印计划，不下载、不写日志")
    parser.add_argument("--max-size-mb", type=float, default=50,
                        help="单文件大小上限（MB，默认 50）")
    args = parser.parse_args()

    manifest_path = Path(args.manifest)
    if not manifest_path.is_absolute():
        manifest_path = ROOT / manifest_path

    # 清单不存在：生成模板并退出
    if not manifest_path.exists():
        manifest_path.parent.mkdir(parents=True, exist_ok=True)
        manifest_path.write_text(
            json.dumps(TEMPLATE, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
        print(f"未找到材料清单，已生成示例模板：{manifest_path}")
        print("请按模板填写真实条目后重新运行本脚本。")
        return 0

    try:
        entries = json.loads(manifest_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as e:
        print(f"错误：清单 {manifest_path} 不是合法 JSON：{e}", file=sys.stderr)
        return 1
    if not isinstance(entries, list):
        print(f"错误：清单 {manifest_path} 顶层应为 JSON 数组。", file=sys.stderr)
        return 1
    if not entries:
        print(f"清单 {manifest_path} 为空，没有需要下载的材料。")
        return 0

    global MANIFEST_HASHES_SOURCE
    MANIFEST_HASHES_SOURCE = [e for e in entries if isinstance(e, dict)]

    max_bytes = int(args.max_size_mb * 1024 * 1024)
    session_hashes: set = set()
    counts = {"OK": 0, "FAIL": 0, "SKIP": 0}

    for entry in entries:
        if not isinstance(entry, dict):
            append_log("unknown", "FAIL", "-", "-", "manifest 条目不是对象，已忽略")
            counts["FAIL"] += 1
            continue
        result = download_one(entry, max_bytes, args.dry_run, session_hashes)
        counts[result] += 1

    mode = "（dry-run，未实际下载）" if args.dry_run else ""
    print(f"完成{mode}：OK={counts['OK']}，SKIP={counts['SKIP']}，FAIL={counts['FAIL']}")
    if not args.dry_run:
        print(f"日志见 {LOG_FILE}")
    return 0 if counts["FAIL"] == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
