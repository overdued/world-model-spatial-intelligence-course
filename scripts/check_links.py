#!/usr/bin/env python3
"""课程链接完整性检查。

扫描 courses/*/links.md、courses/*/README.md 以及仓库根目录 *.md 中的
http(s) URL，HEAD 检查（失败回退 GET，超时 10 秒，8 线程并发），
结果写入 logs/link_check.md：按文件分组列出 URL 与状态，末尾给出统计。

--offline 模式只提取 URL，不联网。

仅依赖标准库，直接运行：python3 scripts/check_links.py [--offline]
"""

import argparse
import re
import socket
import sys
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REPORT_FILE = ROOT / "logs" / "link_check.md"
TIMEOUT = 10
WORKERS = 8

USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/126.0.0.0 Safari/537.36"
)

# 从 Markdown 文本中提取 http(s) URL（含裸链接与 [text](url) 形式）
URL_RE = re.compile(r"https?://[^\s)\]\"'<>]+")
# URL 末尾常见的误捕标点
TRAILING_PUNCT = ".,;:!?)"
# 需要登录的特征（出现在最终 URL 中）
LOGIN_HINTS = ("sso", "login", "signin", "sign-in", "shibboleth", "oauth", "auth")


def collect_markdown_files() -> list:
    """收集待扫描的 Markdown 文件：根目录 *.md + 各课程的 links.md/README.md。"""
    files = sorted(ROOT.glob("*.md"))
    courses_dir = ROOT / "courses"
    if courses_dir.is_dir():
        for course in sorted(p for p in courses_dir.iterdir() if p.is_dir()):
            for name in ("links.md", "README.md"):
                f = course / name
                if f.is_file():
                    files.append(f)
    return files


def extract_urls(path: Path) -> list:
    """提取文件内全部 URL，保持出现顺序并去重。"""
    try:
        text = path.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return []
    urls = []
    seen = set()
    for m in URL_RE.finditer(text):
        url = m.group(0).rstrip(TRAILING_PUNCT)
        if url not in seen:
            seen.add(url)
            urls.append(url)
    return urls


class _NoRedirect(urllib.request.HTTPRedirectHandler):
    """不自动跟随跳转，以便识别 redirect 状态。"""

    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


_opener = urllib.request.build_opener(_NoRedirect)


def _request(url: str, method: str):
    """发一次请求，返回 (状态码, 最终 Location 或 None)。"""
    req = urllib.request.Request(url, method=method, headers={"User-Agent": USER_AGENT})
    with _opener.open(req, timeout=TIMEOUT) as resp:
        return resp.status, resp.headers.get("Location")


def check_url(url: str) -> str:
    """返回状态标签：200 / 404 / redirect / login-required / timeout / 其他。"""
    for method in ("HEAD", "GET"):
        try:
            status, _ = _request(url, method)
            return str(status)
        except urllib.error.HTTPError as e:
            location = e.headers.get("Location", "") if e.headers else ""
            if 300 <= e.code < 400:
                # 未跟随跳转，直接拿到 3xx 与 Location
                if any(h in location.lower() for h in LOGIN_HINTS):
                    return f"login-required(重定向到 {location})"
                return f"redirect({e.code} -> {location})" if location else f"redirect({e.code})"
            if e.code in (401, 403):
                haystack = f"{url} {location}".lower()
                if any(h in haystack for h in LOGIN_HINTS):
                    return f"login-required({e.code})"
                return str(e.code)
            if e.code in (405, 501) and method == "HEAD":
                continue  # 服务器不支持 HEAD，回退 GET
            return str(e.code)
        except socket.timeout:
            return "timeout"
        except urllib.error.URLError as e:
            reason = getattr(e, "reason", e)
            if isinstance(reason, socket.timeout) or "timed out" in str(reason).lower():
                return "timeout"
            if method == "HEAD":
                continue  # HEAD 失败则回退 GET 再试一次
            return f"error({reason})"
        except OSError as e:
            return f"error({e})"
    return "error(未知)"


def is_broken(status: str) -> bool:
    """判定是否算失效链接（404/超时/连接错误，不含跳转与需登录）。"""
    return status.startswith(("4", "5")) and not status.startswith(("401", "403")) \
        or status.startswith(("timeout", "error"))


def main() -> int:
    parser = argparse.ArgumentParser(description="课程链接完整性检查")
    parser.add_argument("--offline", action="store_true",
                        help="只提取 URL 生成清单，不联网检查")
    args = parser.parse_args()

    files = collect_markdown_files()
    if not files:
        print("未找到任何可扫描的 Markdown 文件（courses/*/links.md、README.md 或根目录 *.md）。")
        return 0

    # 按文件分组收集 URL
    file_urls = {f: extract_urls(f) for f in files}
    all_urls = [u for urls in file_urls.values() for u in urls]
    if not all_urls:
        print("扫描的 Markdown 文件中未发现任何 http(s) 链接。")

    results: dict = {}
    if not args.offline and all_urls:
        print(f"共 {len(all_urls)} 个链接，正在检查（{WORKERS} 线程并发，超时 {TIMEOUT}s）…")
        with ThreadPoolExecutor(max_workers=WORKERS) as pool:
            futures = {pool.submit(check_url, u): u for u in set(all_urls)}
            for fut in as_completed(futures):
                results[futures[fut]] = fut.result()

    # 生成 Markdown 报告
    REPORT_FILE.parent.mkdir(parents=True, exist_ok=True)
    lines = [
        "# 链接检查报告",
        "",
        f"生成时间：{datetime.now(timezone.utc).astimezone().isoformat(timespec='seconds')}",
        f"模式：{'offline（仅提取，未联网）' if args.offline else '在线检查'}",
        "",
    ]
    for f in files:
        urls = file_urls[f]
        rel = f.relative_to(ROOT)
        lines.append(f"## {rel}（{len(urls)} 个链接）")
        lines.append("")
        if not urls:
            lines.append("（无链接）")
        else:
            lines.append("| URL | 状态 |")
            lines.append("| --- | --- |")
            for u in urls:
                status = results.get(u, "未检查(offline)")
                lines.append(f"| {u} | {status} |")
        lines.append("")

    total = len(all_urls)
    checked = len(results)
    broken = sum(1 for u in set(all_urls) if u in results and is_broken(results[u]))
    login = sum(1 for s in results.values() if s.startswith("login-required"))
    lines += [
        "## 统计",
        "",
        f"- 链接总数：{total}（去重后 {len(set(all_urls))}）",
        f"- 已检查：{checked}",
        f"- 失效数（404/5xx/超时/连接错误）：{broken if not args.offline else '未检查'}",
        f"- 需登录数：{login if not args.offline else '未检查'}",
        "",
    ]
    REPORT_FILE.write_text("\n".join(lines), encoding="utf-8")

    print(f"报告已写入 {REPORT_FILE}")
    print(f"链接总数 {total}，失效 {broken if not args.offline else '（offline 未检查）'}，"
          f"需登录 {login if not args.offline else '（offline 未检查）'}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
