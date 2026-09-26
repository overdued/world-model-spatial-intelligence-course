# Machine Learning Meets Geometry (CSE 291, Winter 2022) — Syllabus

来源（Official URL）: https://haosulab.github.io/ml-meets-geometry-WI22/
整理日期: 2026-09-26。本文件为课程主页公开信息的 Markdown 整理版，原文以官网为准。

## General Information

- Times & Places: TuTh 3:30PM - 4:50PM, Zoom link on Piazza
- Instructor: Hao Su (haosu@eng.ucsd.edu), Office Hours Tuesday 2-3 PM
- TA: Jiayuan Gu (jigu@eng.ucsd.edu), Office Hours Monday 2-3 PM
- TA: Xiaoshuai Zhang (xiz040@eng.ucsd.edu), Office Hours Thursday 1-2 PM

## Objectives

This is a graduate level course to teach state-of-the-art concepts and algorithms of
geometry that are being used in computer graphics, computer vision and machine learning.
It should enable you to read and replicate recent 3D papers in top CV/CG conferences
(not industry job oriented).

## Prerequisites

- **Skilled** in linear algebra
- **Familiar** with Multi-Variable Calculus
- **Familiar** with Probability and Numerical Methods
- **Strong** programming skills (Linux toolchain, Python, Numpy, PyTorch)

## Grading

- Homework 0: 5%
- Homework 1: 20%
- Homework 2: 20%
- Homework 3: 20%
- Final project: 35%
- Extra credit for participation: 5% (ask/answer questions in class, attend office hours)
- There will not be a final exam.

## Syllabus (Topics)

- Geometry Basics
  - 1D/2D/3D Geometry
  - Transformation
  - Storing Geometry in Computer
  - Global Geometry
- 3D Reconstruction
  - Single-image to 3D
  - Multiview 3D
- 3D Recognition
  - Classification
  - Detection
  - Segmentation
  - 6D Pose Estimation
- 3D Geometry Processing
  - Point Cloud Processing
  - Learning-based Mesh Processing
- Part-based 3D Understanding
  - Part-based Generative Model
  - Zero-shot 3D Understanding
  - Mobility
  - Human and Hand Pose
- 3D Shape Collection
  - Pairwise Correspondence
  - Collection Correspondence

## Schedule (Winter 2022, from schedule.html)

### Section 1: Theories of Geometry
| Date | Lecture | Content |
|---|---|---|
| 1/4 | Curve Theory (L1) | overview of the course, logistics, curve theory |
| 1/7, 1/11 | Curve Theory (cont), Surface Theory (L2) | differential map, normal curvature, principal curvature |
| 1/13 | Surface Theory II (L3) | shape operator, first fundamental form, isometry, fundamental theorem of surfaces |
| 1/18 | Mesh and Point Cloud (L4) | polygonal mesh, point cloud |
| 1/20 | Rotation and SO(3) (L5) | rotation matrix, euler angle, angle-axis, quaternion |

### Section 2: 3D Deep Learning

#### 2.1 3D Reconstruction
| Date | Lecture | Content |
|---|---|---|
| 1/25, 1/27 | Learning-based MVS (L6) | learning-based MVS, NeRF |
| 2/1 | Single Image to 3D (L7) | EMD, Chamfer, mesh deformation |

#### 2.2 3D Data Understanding
| Date | Lecture | Content |
|---|---|---|
| 2/3 | 3D Backbone Networks (L8) | Volumetric CNN |
| 2/8 | 3D Backbone Networks (L8 cont) | PointNet |
| 2/10, 2/15 | 6D Pose Estimation (L11) | ICP, Umeyama's method, direct method |
| 2/15 | 6D Pose Estimation II (L12) | indirect approach, DenseFusion, PVN3D, NOCS |
| 2/17 | 3D Detection (L9) | |
| 2/22 | 3D Instance Segmentation (L10) | top-down approach, bottom-up approach |
| 2/24 | Intrinsics-based Analysis (L13) | geodesic distance, Dijkstra for geodesics, learning-based geodesics, applications |

#### 2.3 Structured 3D Learning
| Date | Lecture | Content |
|---|---|---|
| 2/16 | Part-based 3D Analysis (L14) | guest lecture by Kaichun Mo |
| 2/23 | Zero-shot 3D Understanding (L15) | correspondence-based part discovery, learning to group |
| 3/3 | Deformation Models (L16) | surface deformation, space deformation, skeleton skinning |
| 3/2 | 3D Human Body and Behaviour (L17) | guest lecture by Prof. Angjoo Kanazawa (password protected) |

#### 2.4 Geometry Processing and Collection Analysis
| Date | Lecture | Content |
|---|---|---|
| 3/8 | Surface Reconstruction (L18) | explicit and implicit method |
| 3/9 | Correspondences and Cycle Consistency (L19) | guest lecture by Prof. Qixing Huang |
| 3/11 | Mesh Processing (L20) | misc mesh processing problems and intro to next quarter's course |

## Homework

- Homework 0 released on Piazza, due 01/12/2022 23:59
- Homework 1–3 与 final project 均通过 Piazza 发布（需登录，未公开）
