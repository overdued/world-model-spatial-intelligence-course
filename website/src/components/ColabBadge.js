import React from 'react';
import styles from './ColabBadge.module.css';

const COLAB_BASE =
  'https://colab.research.google.com/github/overdued/world-model-spatial-intelligence-course/blob/main/labs';

/**
 * <ColabBadge lab="lab00_tiny_world" />
 *
 * Renders an "Open in Colab" badge button linking to
 * labs/<lab>/notebook.ipynb on the main branch.
 */
export default function ColabBadge({lab, label = 'Open in Colab'}) {
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
