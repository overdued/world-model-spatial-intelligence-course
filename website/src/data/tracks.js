/**
 * Track definitions — CONTRACT FILE.
 *
 * Content authors (module MDX writers) rely on this exact shape:
 *   tracks.<track>.modules[] = {id, title, slug, estTime, oneLiner}
 * - `id`    is the stable module id used by <ModuleProgress id="a01" />
 *           and localStorage progress (key "wmsi-progress").
 * - `slug`  is the doc route segment under the track base, i.e. the MDX
 *           file must live at  docs/<track>/<slug>.mdx.
 * - Full module URL = `/docs/<track>/<slug>`.
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
    tagline: 'Build the model: Representation → Dynamics → Prediction → Planning → Evaluation.',
    modules: [
      {
        id: 'a01',
        title: 'What is a World Model?',
        slug: '01-what-is-a-world-model',
        estTime: '45 min',
        oneLiner: 'The big picture: what world models are, where they came from, and why they matter now.',
      },
      {
        id: 'a02',
        title: 'Observation, State and POMDP',
        slug: '02-observation-state-pomdp',
        estTime: '60 min',
        oneLiner: 'The first-principles distinction between what you see and what is true.',
      },
      {
        id: 'a03',
        title: 'State Space Models',
        slug: '03-state-space-models',
        estTime: '75 min',
        oneLiner: 'LGSSM, Kalman filtering and belief-state inference — the classical baseline.',
      },
      {
        id: 'a04',
        title: 'Representation Learning',
        slug: '04-representation-learning',
        estTime: '60 min',
        oneLiner: 'What makes a representation good enough to predict in.',
      },
      {
        id: 'a05',
        title: 'Latent Dynamics',
        slug: '05-latent-dynamics',
        estTime: '75 min',
        oneLiner: 'Learn a compact latent state and predict its evolution instead of pixels.',
      },
      {
        id: 'a06',
        title: 'RSSM',
        slug: '06-rssm',
        estTime: '90 min',
        oneLiner: 'The Recurrent State Space Model — the deterministic + stochastic backbone of Dreamer.',
      },
      {
        id: 'a07',
        title: 'World Models 2018',
        slug: '07-world-models-2018',
        estTime: '45 min',
        oneLiner: 'Ha & Schmidhuber\u2019s origin paper: VAE + MDN-RNN + controller, training in dreams.',
      },
      {
        id: 'a08',
        title: 'Dreamer',
        slug: '08-dreamer',
        estTime: '90 min',
        oneLiner: 'Actor-critic in imagination: DreamerV1/V2/V3 and the engineering of MBRL at scale.',
      },
      {
        id: 'a09',
        title: 'Planning with World Models',
        slug: '09-planning-with-world-models',
        estTime: '75 min',
        oneLiner: 'MPC, CEM, MPPI and latent-space planning — the model becomes the environment.',
      },
      {
        id: 'a10',
        title: 'Video World Models',
        slug: '10-video-world-models',
        estTime: '75 min',
        oneLiner: 'Diffusion/flow-based generation, interactive video worlds, and closed-loop drift.',
      },
      {
        id: 'a11',
        title: 'World Model + Policy',
        slug: '11-world-model-policy',
        estTime: '75 min',
        oneLiner: 'Closing the loop: policy and value learning inside a learned model (TD-MPC, Dreamer).',
      },
      {
        id: 'a12',
        title: 'OOD, Drift and Evaluation',
        slug: '12-ood-drift-evaluation',
        estTime: '60 min',
        oneLiner: 'When world models lie: out-of-distribution failure, drift, calibration and eval protocols.',
      },
      {
        id: 'a13',
        title: 'Capstone: Build Your Own World Model',
        slug: '13-capstone',
        estTime: 'project',
        oneLiner: 'End-to-end project: define state / transition / action / evaluation, then build it.',
      },
    ],
  },
  spatial: {
    key: 'spatial',
    title: 'Spatial & Embodied Intelligence',
    shortTitle: 'Engineer',
    icon: '👷',
    basePath: '/docs/spatial',
    tagline: 'Build the system: Geometry → 3D → SLAM → Spatial Memory → Navigation → Robot.',
    modules: [
      {
        id: 'b01',
        title: 'What is Spatial Intelligence?',
        slug: '01-what-is-spatial-intelligence',
        estTime: '45 min',
        oneLiner: 'From cognition to computation: what it means for machines to understand space.',
      },
      {
        id: 'b02',
        title: 'Camera and Geometry',
        slug: '02-camera-and-geometry',
        estTime: '60 min',
        oneLiner: 'Pinhole cameras, intrinsics/extrinsics, epipolar geometry and triangulation.',
      },
      {
        id: 'b03',
        title: 'Depth and Point Clouds',
        slug: '03-depth-and-point-clouds',
        estTime: '60 min',
        oneLiner: 'Stereo, monocular depth, sensors and the most universal explicit 3D representation.',
      },
      {
        id: 'b04',
        title: 'NeRF and Gaussian Splatting',
        slug: '04-nerf-gaussian-splatting',
        estTime: '90 min',
        oneLiner: 'Implicit radiance fields vs explicit Gaussian primitives — the modern 3D stack.',
      },
      {
        id: 'b05',
        title: 'Dynamic 3D / 4D Worlds',
        slug: '05-dynamic-4d-worlds',
        estTime: '75 min',
        oneLiner: 'Scene flow, dynamic occupancy and 4D representations: add the time axis.',
      },
      {
        id: 'b06',
        title: 'State Estimation',
        slug: '06-state-estimation',
        estTime: '75 min',
        oneLiner: 'Kalman/EKF/UKF, factor graphs and nonlinear least squares over Lie groups.',
      },
      {
        id: 'b07',
        title: 'SLAM and VIO',
        slug: '07-slam-vio',
        estTime: '90 min',
        oneLiner: 'Simultaneous localization and mapping; visual-inertial odometry on real benchmarks.',
      },
      {
        id: 'b08',
        title: 'Spatial Memory',
        slug: '08-spatial-memory',
        estTime: '60 min',
        oneLiner: 'Maps, place recognition and persistent scene representations — remembering the world.',
      },
      {
        id: 'b09',
        title: 'Affordance',
        slug: '09-affordance',
        estTime: '45 min',
        oneLiner: 'From "what the world is" to "what the world lets me do".',
      },
      {
        id: 'b10',
        title: 'Navigation',
        slug: '10-navigation',
        estTime: '75 min',
        oneLiner: 'Geometry, semantics and language-guided navigation — spatial intelligence\u2019s killer app.',
      },
      {
        id: 'b11',
        title: 'Robot World Models',
        slug: '11-robot-world-models',
        estTime: '75 min',
        oneLiner: 'Sim-to-real, system identification and world models that survive contact with physics.',
      },
      {
        id: 'b12',
        title: 'VLA and World-Action Models',
        slug: '12-vla-world-action-models',
        estTime: '75 min',
        oneLiner: 'Vision-Language-Action models and predicting the consequences of actions.',
      },
      {
        id: 'b13',
        title: 'Capstone: Build Your Own Spatial World Model',
        slug: '13-capstone',
        estTime: 'project',
        oneLiner: 'End-to-end system: perception → state estimation → planning, evaluated on a benchmark.',
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
