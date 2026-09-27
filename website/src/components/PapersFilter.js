import React, {useMemo, useState} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {papers, concepts, levels} from '@site/src/data/papers';
import styles from './PapersFilter.module.css';

const LEVEL_ORDER = {Foundation: 0, 'Must Read': 1, Advanced: 2};

function useConceptLabels() {
  return {
    All: translate({id: 'papersFilter.concept.all', message: '全部', description: 'Paper concept filter chip'}),
    Representation: translate({id: 'papersFilter.concept.representation', message: '表征', description: 'Paper concept filter chip'}),
    Dynamics: translate({id: 'papersFilter.concept.dynamics', message: '动力学', description: 'Paper concept filter chip'}),
    Planning: translate({id: 'papersFilter.concept.planning', message: '规划', description: 'Paper concept filter chip'}),
    Video: translate({id: 'papersFilter.concept.video', message: '视频', description: 'Paper concept filter chip'}),
    '3D': '3D',
    Robotics: translate({id: 'papersFilter.concept.robotics', message: '机器人', description: 'Paper concept filter chip'}),
    Evaluation: translate({id: 'papersFilter.concept.evaluation', message: '评估', description: 'Paper concept filter chip'}),
  };
}

function useLevelLabels() {
  return {
    All: translate({id: 'papersFilter.level.all', message: '全部', description: 'Paper level filter chip'}),
    Foundation: translate({id: 'papersFilter.level.foundation', message: '基础', description: 'Paper level filter chip / tag'}),
    'Must Read': translate({id: 'papersFilter.level.mustRead', message: '必读', description: 'Paper level filter chip / tag'}),
    Advanced: translate({id: 'papersFilter.level.advanced', message: '进阶', description: 'Paper level filter chip / tag'}),
  };
}

/**
 * Filterable curated paper list (data: src/data/papers.js).
 * Filters: concept (Representation / Dynamics / Planning / Video / 3D /
 * Robotics / Evaluation) and level (Foundation / Must Read / Advanced).
 * Paper titles/authors are proper nouns and stay in English; filter
 * chips and UI chrome are locale-aware.
 */
export default function PapersFilter() {
  const [concept, setConcept] = useState('All');
  const [level, setLevel] = useState('All');
  const conceptLabels = useConceptLabels();
  const levelLabels = useLevelLabels();

  const filtered = useMemo(() => {
    return papers
      .filter((p) => concept === 'All' || p.concept === concept)
      .filter((p) => level === 'All' || p.level === level)
      .sort((a, b) => LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level] || b.year - a.year);
  }, [concept, level]);

  return (
    <div>
      <div className={styles.filters}>
        <div className={styles.filterRow}>
          <span className={styles.filterLabel}>
            <Translate id="papersFilter.conceptLabel" description="Label before the concept filter chips">
              概念
            </Translate>
          </span>
          {concepts.map((c) => (
            <button
              key={c}
              type="button"
              className={`${styles.chip} ${concept === c ? styles.chipActive : ''}`}
              onClick={() => setConcept(c)}>
              {conceptLabels[c]}
            </button>
          ))}
        </div>
        <div className={styles.filterRow}>
          <span className={styles.filterLabel}>
            <Translate id="papersFilter.levelLabel" description="Label before the level filter chips">
              难度
            </Translate>
          </span>
          {levels.map((l) => (
            <button
              key={l}
              type="button"
              className={`${styles.chip} ${level === l ? styles.chipActive : ''}`}
              onClick={() => setLevel(l)}>
              {levelLabels[l]}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.count}>
        {translate(
          {
            id: 'papersFilter.count',
            message: '{count} 篇论文',
            description: 'Number of papers matching the current filters',
          },
          {count: filtered.length},
        )}
      </div>

      <ul className={styles.list}>
        {filtered.map((p) => (
          <li key={p.title} className={styles.item}>
            <div className={styles.itemMain}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className={styles.title}>
                {p.title}
              </a>
              <span className={styles.authors}>
                {p.authors} · {p.year} · {p.venue}
              </span>
            </div>
            <div className={styles.tags}>
              <span className={`${styles.tag} ${styles[`level_${p.level.replace(/\s/g, '')}`]}`}>
                {levelLabels[p.level]}
              </span>
              <span className={styles.tag}>{conceptLabels[p.concept]}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
