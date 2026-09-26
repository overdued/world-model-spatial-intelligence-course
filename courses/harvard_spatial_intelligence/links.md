# Links — Harvard GSD SCI-6512 Spatial Intelligence: Designing the Future of Work (Spring 2026)

验证时间：2026-09-26（HTTP 状态由 curl -sIL 实测）

## 官方课程相关

| URL | 说明 | HTTP 状态 |
|---|---|---|
| https://www.gsd.harvard.edu/course/spatial-intelligence-designing-the-future-of-work-spring-2026/ | 官方课程主页（唯一公开材料来源） | 200 |
| https://www.gsd.harvard.edu/course/the-future-of-work-spring-2026/ | 旧 slug（课程曾用名 The Future of Work） | redirect（301 → 现课程页，最终 200） |
| https://www.gsd.harvard.edu/wp-json/wp/v2/gsd-courses/2667042 | GSD WordPress REST API 课程记录（确认无附件/syllabus 文件） | 200 |
| https://www.gsd.harvard.edu/person/charu-srivastava/ | 教师主页 Charu Srivastava, Lecturer in Architecture | 200 |

## 需登录 / 未验证

| URL | 说明 | HTTP 状态 |
|---|---|---|
| https://canvas.harvard.edu/courses/168480 | Canvas 课程站（syllabus、assignments、materials 应在此） | login-required（302 → HarvardKey SSO，确认无法匿名访问） |
| https://courses.my.harvard.edu/psp/courses/EMPLOYEE/EMPL/h/?tab=HU_CLASS_SEARCH&SearchReqJSON=SearchText:(CLASS_NBR:21897)(STRM:2262) | my.harvard 官方课表（上课地点与时间；课程页 "View Course Schedule" 入口） | 未验证（多次连接超时，000） |

## 第三方旁证（未下载）

| URL | 说明 | HTTP 状态 |
|---|---|---|
| https://architecture.mit.edu/sites/default/files/2026-01/SP26%20Pre-Approved%20MArch%20Electives.pdf | MIT 建筑系 2026 春季 MArch 预选选修课清单，列出 "SCI 6512: Spatial Intelligence: Designing the Future of Work, Charu Srivastava"（旁证课程存在与跨校选课） | 未验证（搜索结果获得，非课程材料，未下载） |

## 未发现的内容（已确认）

- 无公开 syllabus PDF（课程页无附件，WP API `featured_media=0`，`acf` 为空）
- 无公开 lecture slides / notes / assignments / labs / code / videos / reading list
- 教师无公开的课程 GitHub 仓库或个人课程材料页（教师主页无外部材料链接）
