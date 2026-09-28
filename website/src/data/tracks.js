/**
 * Track definitions — CONTRACT FILE.
 *
 * Content authors (module MDX writers) rely on this exact shape:
 *   tracks.<track>.modules[] = {id, title, slug, estTime, estTimeEn, oneLiner, oneLinerEn}
 * - `id`    is the stable module id used by <ModuleProgress id="a01" />
 *           and localStorage progress (key "wmsi-progress").
 * - `slug`  is the doc route segment under the track base, i.e. the MDX
 *           file must live at  docs/<track>/<slug>.mdx.
 * - Full module URL = `/docs/<track>/<slug>`.
 *
 * i18n convention: default fields are Chinese (defaultLocale zh-Hans);
 * `*En` fields carry the English text. `title` stays in English in both
 * locales because it matches the doc titles / sidebar labels.
 * Components select fields with `pick(locale, obj, field)` from
 * src/utils/i18n.js.
 *
 * Do not rename ids or slugs once modules exist.
 */

export const tracks = {
  scientist: {
    key: 'scientist',
    title: 'World Model Scientist',
    shortTitle: 'Scientist',
    icon: '🧑‍🔬',
    basePath: '/docs/scientist',
    tagline: '构建模型：表征 → 动力学 → 预测 → 规划 → 评估。',
    taglineEn: 'Build the model: Representation → Dynamics → Prediction → Planning → Evaluation.',
    modules: [
      {
        id: 'a01',
        title: 'What is a World Model?',
        slug: '01-what-is-a-world-model',
        estTime: '45 分钟',
        estTimeEn: '45 min',
        oneLiner: '全局图景：世界模型是什么、从何而来，以及为什么现在重要。',
        oneLinerEn: 'The big picture: what world models are, where they came from, and why they matter now.',
      },
      {
        id: 'a02',
        title: 'Observation, State and POMDP',
        slug: '02-observation-state-pomdp',
        estTime: '60 分钟',
        estTimeEn: '60 min',
        oneLiner: '从第一性原理区分"你所看到的"与"真实存在的"。',
        oneLinerEn: 'The first-principles distinction between what you see and what is true.',
      },
      {
        id: 'a03',
        title: 'State Space Models',
        slug: '03-state-space-models',
        estTime: '75 分钟',
        estTimeEn: '75 min',
        oneLiner: '线性高斯状态空间模型、卡尔曼滤波与信念状态推断——经典基线。',
        oneLinerEn: 'LGSSM, Kalman filtering and belief-state inference — the classical baseline.',
      },
      {
        id: 'a04',
        title: 'Representation Learning',
        slug: '04-representation-learning',
        estTime: '60 分钟',
        estTimeEn: '60 min',
        oneLiner: '什么样的表征才"好到可以在其中做预测"。',
        oneLinerEn: 'What makes a representation good enough to predict in.',
      },
      {
        id: 'a05',
        title: 'Latent Dynamics',
        slug: '05-latent-dynamics',
        estTime: '75 分钟',
        estTimeEn: '75 min',
        oneLiner: '学习紧凑的隐状态并预测其演化，而不是逐像素预测。',
        oneLinerEn: 'Learn a compact latent state and predict its evolution instead of pixels.',
      },
      {
        id: 'a06',
        title: 'RSSM',
        slug: '06-rssm',
        estTime: '90 分钟',
        estTimeEn: '90 min',
        oneLiner: '循环状态空间模型——Dreamer 的确定性 + 随机性骨干。',
        oneLinerEn: 'The Recurrent State Space Model — the deterministic + stochastic backbone of Dreamer.',
      },
      {
        id: 'a07',
        title: 'World Models 2018',
        slug: '07-world-models-2018',
        estTime: '45 分钟',
        estTimeEn: '45 min',
        oneLiner: 'Ha & Schmidhuber 的开山论文：VAE + MDN-RNN + 控制器，在"梦境"中训练。',
        oneLinerEn: 'Ha & Schmidhuber\u2019s origin paper: VAE + MDN-RNN + controller, training in dreams.',
      },
      {
        id: 'a08',
        title: 'Dreamer',
        slug: '08-dreamer',
        estTime: '90 分钟',
        estTimeEn: '90 min',
        oneLiner: '在想象中做 Actor-Critic：DreamerV1/V2/V3 与大规模 MBRL 的工程实践。',
        oneLinerEn: 'Actor-critic in imagination: DreamerV1/V2/V3 and the engineering of MBRL at scale.',
      },
      {
        id: 'a09',
        title: 'Planning with World Models',
        slug: '09-planning-with-world-models',
        estTime: '75 分钟',
        estTimeEn: '75 min',
        oneLiner: 'MPC、CEM、MPPI 与隐空间规划——模型变成了环境。',
        oneLinerEn: 'MPC, CEM, MPPI and latent-space planning — the model becomes the environment.',
      },
      {
        id: 'a10',
        title: 'Video World Models',
        slug: '10-video-world-models',
        estTime: '75 分钟',
        estTimeEn: '75 min',
        oneLiner: '基于扩散/流匹配的生成、交互式视频世界，以及闭环漂移。',
        oneLinerEn: 'Diffusion/flow-based generation, interactive video worlds, and closed-loop drift.',
      },
      {
        id: 'a10b',
        title: 'Interactive World Models',
        slug: '10b-interactive-world-models',
        estTime: '60 分钟',
        estTimeEn: '60 min',
        oneLiner: '从视频生成到可以玩的世界：GameNGen、DIAMOND、Genie——可控性、实时性与一致性。',
        oneLinerEn: 'From video generation to playable worlds: GameNGen, DIAMOND, Genie — controllability, real time and consistency.',
      },
      {
        id: 'a11',
        title: 'World Model + Policy',
        slug: '11-world-model-policy',
        estTime: '75 分钟',
        estTimeEn: '75 min',
        oneLiner: '闭环：在学习到的模型内部做策略与价值学习（TD-MPC、Dreamer）。',
        oneLinerEn: 'Closing the loop: policy and value learning inside a learned model (TD-MPC, Dreamer).',
      },
      {
        id: 'a12',
        title: 'OOD, Drift and Evaluation',
        slug: '12-ood-drift-evaluation',
        estTime: '60 分钟',
        estTimeEn: '60 min',
        oneLiner: '当世界模型"撒谎"：分布外失效、漂移、校准与评估协议。',
        oneLinerEn: 'When world models lie: out-of-distribution failure, drift, calibration and eval protocols.',
      },
      {
        id: 'a13',
        title: 'Capstone: Build Your Own World Model',
        slug: '13-capstone',
        estTime: '项目制',
        estTimeEn: 'project',
        oneLiner: '端到端项目：定义状态 / 转移 / 动作 / 评估，然后亲手把它造出来。',
        oneLinerEn: 'End-to-end project: define state / transition / action / evaluation, then build it.',
      },
    ],
  },
  spatial: {
    key: 'spatial',
    title: 'Spatial & Embodied Intelligence',
    shortTitle: 'Engineer',
    icon: '👷',
    basePath: '/docs/spatial',
    tagline: '构建系统：几何 → 3D → SLAM → 空间记忆 → 导航 → 机器人。',
    taglineEn: 'Build the system: Geometry → 3D → SLAM → Spatial Memory → Navigation → Robot.',
    modules: [
      {
        id: 'b01',
        title: 'What is Spatial Intelligence?',
        slug: '01-what-is-spatial-intelligence',
        estTime: '45 分钟',
        estTimeEn: '45 min',
        oneLiner: '从认知到计算：机器"理解空间"到底意味着什么。',
        oneLinerEn: 'From cognition to computation: what it means for machines to understand space.',
      },
      {
        id: 'b02',
        title: 'Camera and Geometry',
        slug: '02-camera-and-geometry',
        estTime: '60 分钟',
        estTimeEn: '60 min',
        oneLiner: '针孔相机、内参/外参、对极几何与三角化。',
        oneLinerEn: 'Pinhole cameras, intrinsics/extrinsics, epipolar geometry and triangulation.',
      },
      {
        id: 'b03',
        title: 'Depth and Point Clouds',
        slug: '03-depth-and-point-clouds',
        estTime: '60 分钟',
        estTimeEn: '60 min',
        oneLiner: '双目、单目深度、传感器，以及最通用的显式 3D 表征。',
        oneLinerEn: 'Stereo, monocular depth, sensors and the most universal explicit 3D representation.',
      },
      {
        id: 'b04',
        title: 'NeRF and Gaussian Splatting',
        slug: '04-nerf-gaussian-splatting',
        estTime: '90 分钟',
        estTimeEn: '90 min',
        oneLiner: '隐式辐射场 vs 显式高斯基元——现代 3D 技术栈。',
        oneLinerEn: 'Implicit radiance fields vs explicit Gaussian primitives — the modern 3D stack.',
      },
      {
        id: 'b05',
        title: 'Dynamic 3D / 4D Worlds',
        slug: '05-dynamic-4d-worlds',
        estTime: '75 分钟',
        estTimeEn: '75 min',
        oneLiner: '场景流、动态占用与 4D 表征：加上时间轴。',
        oneLinerEn: 'Scene flow, dynamic occupancy and 4D representations: add the time axis.',
      },
      {
        id: 'b06',
        title: 'State Estimation',
        slug: '06-state-estimation',
        estTime: '75 分钟',
        estTimeEn: '75 min',
        oneLiner: 'Kalman/EKF/UKF、因子图与李群上的非线性最小二乘。',
        oneLinerEn: 'Kalman/EKF/UKF, factor graphs and nonlinear least squares over Lie groups.',
      },
      {
        id: 'b07',
        title: 'SLAM and VIO',
        slug: '07-slam-vio',
        estTime: '90 分钟',
        estTimeEn: '90 min',
        oneLiner: '同时定位与建图；在真实基准上跑视觉惯性里程计。',
        oneLinerEn: 'Simultaneous localization and mapping; visual-inertial odometry on real benchmarks.',
      },
      {
        id: 'b08',
        title: 'Spatial Memory',
        slug: '08-spatial-memory',
        estTime: '60 分钟',
        estTimeEn: '60 min',
        oneLiner: '地图、地点识别与持久场景表征——记住这个世界。',
        oneLinerEn: 'Maps, place recognition and persistent scene representations — remembering the world.',
      },
      {
        id: 'b09',
        title: 'Affordance',
        slug: '09-affordance',
        estTime: '45 分钟',
        estTimeEn: '45 min',
        oneLiner: '从"世界是什么"到"世界允许我做什么"。',
        oneLinerEn: 'From "what the world is" to "what the world lets me do".',
      },
      {
        id: 'b10',
        title: 'Navigation',
        slug: '10-navigation',
        estTime: '75 分钟',
        estTimeEn: '75 min',
        oneLiner: '几何、语义与语言引导的导航——空间智能的杀手级应用。',
        oneLinerEn: 'Geometry, semantics and language-guided navigation — spatial intelligence\u2019s killer app.',
      },
      {
        id: 'b11',
        title: 'Robot World Models',
        slug: '11-robot-world-models',
        estTime: '75 分钟',
        estTimeEn: '75 min',
        oneLiner: 'Sim-to-real、系统辨识，以及经得起物理接触的世界模型。',
        oneLinerEn: 'Sim-to-real, system identification and world models that survive contact with physics.',
      },
      {
        id: 'b12',
        title: 'VLA and World-Action Models',
        slug: '12-vla-world-action-models',
        estTime: '75 分钟',
        estTimeEn: '75 min',
        oneLiner: '视觉-语言-动作模型，以及对动作后果的预测。',
        oneLinerEn: 'Vision-Language-Action models and predicting the consequences of actions.',
      },
      {
        id: 'b13',
        title: 'Capstone: Build Your Own Spatial World Model',
        slug: '13-capstone',
        estTime: '项目制',
        estTimeEn: 'project',
        oneLiner: '端到端系统：感知 → 状态估计 → 规划，并在公开基准上评估。',
        oneLinerEn: 'End-to-end system: perception → state estimation → planning, evaluated on a benchmark.',
      },
    ],
  },
};

export function getTrack(key) {
  return tracks[key];
}

export function getModuleUrl(trackKey, slug) {
  return `${tracks[trackKey].basePath}/${slug}`;
}
