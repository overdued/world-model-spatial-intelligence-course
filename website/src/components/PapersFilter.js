import React, {useMemo, useState} from 'react';
import {papers, concepts, levels} from '@site/src/data/papers';
import styles from './PapersFilter.module.css';

const LEVEL_ORDER = {Foundation: 0, 'Must Read': 1, Advanced: 2};

/**
 * Filterable curated paper list (data: src/data/papers.js).
 * Filters: concept (Representation / Dynamics / Planning / Video / 3D /
 * Robotics / Evaluation) and level (Foundation / Must Read / Advanced).
 */
export default function PapersFilter() {
  const [concept, setConcept] = useState('All');
  const [level, setLevel] = useState('All');

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
          <span className={styles.filterLabel}>Concept</span>
          {concepts.map((c) => (
            <button
              key={c}
              type="button"
              className={`${styles.chip} ${concept === c ? styles.chipActive : ''}`}
              onClick={() => setConcept(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className={styles.filterRow}>
          <span className={styles.filterLabel}>Level</span>
          {levels.map((l) => (
            <button
              key={l}
              type="button"
              className={`${styles.chip} ${level === l ? styles.chipActive : ''}`}
              onClick={() => setLevel(l)}>
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.count}>
        {filtered.length} paper{filtered.length === 1 ? '' : 's'}
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
                {p.level}
              </span>
              <span className={styles.tag}>{p.concept}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
