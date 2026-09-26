import React from 'react';
import styles from './ColabBadge.module.css';

const COLAB_BASE =
  'https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs';

/**
 * 已有可运行 notebook 的 lab。新增 lab 时在 labs/ 下实现 notebook.ipynb 后，
 * 把目录名加进这里，网站上的 Colab 徽章才会点亮。
 */
export const READY_LABS = [
  'lab00_tiny_world',
  'lab01_kalman_filter',
  'lab02_latent_dynamics',
  'lab03_tiny_rssm',
  'lab04_mpc_cem_planning',
  'lab05_nerf_gaussian_splatting',
  'lab06_dynamic_4d_worlds',
  'lab07_video_world_model',
  'lab08_navigation_world_model',
  'lab09_world_model_policy',
  'lab10_ood_drift_evaluation',
];

/**
 * <ColabBadge lab="lab00_tiny_world" />
 *
 * 已实现的 lab：渲染 "Open in Colab" 徽章，链接到
 * labs/<lab>/notebook.ipynb（main 分支）。
 * 未实现的 lab：渲染不可点击的 "开发中" 占位，避免 404。
 */
export default function ColabBadge({lab, label = 'Open in Colab'}) {
  if (!READY_LABS.includes(lab)) {
    return (
      <span className={styles.comingSoon} title="Notebook 尚未发布">
        🚧 开发中 · Coming soon
      </span>
    );
  }
  const url = `${COLAB_BASE}/${lab}/notebook.ipynb`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.badge}>
      <img
        src="https://colab.research.google.com/assets/colab-badge.svg"
        alt={label}
        className={styles.img}
      />
      <span className={styles.srOnly}>{label}: {lab}</span>
    </a>
  );
}
