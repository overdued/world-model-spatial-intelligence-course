import React from 'react';
import {translate} from '@docusaurus/Translate';
import {useCurrentLocale} from '@site/src/utils/i18n';
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
 * 有独立英文版 notebook（labs/<lab>/notebook_en.ipynb）的 lab。
 * Lab 0–2 的 notebook 本身就是英文，不需要单独的英文版。
 */
export const EN_NOTEBOOK_LABS = [
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
 * 文案按当前 locale 显示中文（默认）或英文；英文站点对有英文版的 lab
 * 链接到 notebook_en.ipynb。
 */
export default function ColabBadge({lab, label}) {
  const locale = useCurrentLocale();
  const resolvedLabel =
    label ??
    translate({
      id: 'colabBadge.openInColab',
      message: '在 Colab 中打开',
      description: 'Default accessible label of the Colab badge',
    });
  if (!READY_LABS.includes(lab)) {
    return (
      <span
        className={styles.comingSoon}
        title={translate({
          id: 'colabBadge.comingSoon.title',
          message: 'Notebook 尚未发布',
          description: 'Tooltip of the coming-soon Colab placeholder',
        })}>
        {translate({
          id: 'colabBadge.comingSoon',
          message: '🚧 开发中',
          description: 'Placeholder shown for labs without a published notebook',
        })}
      </span>
    );
  }
  const notebook =
    locale === 'en' && EN_NOTEBOOK_LABS.includes(lab)
      ? 'notebook_en.ipynb'
      : 'notebook.ipynb';
  const url = `${COLAB_BASE}/${lab}/${notebook}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.badge}>
      <img
        src="https://colab.research.google.com/assets/colab-badge.svg"
        alt={resolvedLabel}
        className={styles.img}
      />
      <span className={styles.srOnly}>{resolvedLabel}: {lab}</span>
    </a>
  );
}
