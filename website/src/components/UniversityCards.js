import React, {useState} from 'react';
import {courses, perspectiveLabels} from '@site/src/data/courses';
import styles from './UniversityCards.module.css';

const MATERIAL_LABELS = {
  slides: 'Slides',
  notes: 'Notes',
  assignments: 'Assignments',
  labs: 'Labs',
  code: 'Code',
  videos: 'Videos',
};

const LEVEL_FILTERS = ['All', 'Very High', 'High', 'Medium', 'Low', 'Very Low'];

/**
 * Card grid of the 11 surveyed university courses.
 * Data: src/data/courses.js (derived from metadata/courses.json).
 */
export default function UniversityCards() {
  const [level, setLevel] = useState('All');

  const filtered =
    level === 'All' ? courses : courses.filter((c) => c.publicLevel === level);

  return (
    <div>
      <div className={styles.filters}>
        <span className={styles.filterLabel}>Public materials:</span>
        {LEVEL_FILTERS.map((l) => (
          <button
            key={l}
            type="button"
            className={`${styles.chip} ${level === l ? styles.chipActive : ''}`}
            onClick={() => setLevel(l)}>
            {l}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((course) => (
          <article key={course.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <div className={styles.school}>{course.school}</div>
                <h3 className={styles.name}>
                  <a href={course.officialUrl} target="_blank" rel="noopener noreferrer">
                    {course.courseNumber !== '—' && `${course.courseNumber} · `}
                    {course.name}
                  </a>
                </h3>
                <div className={styles.meta}>
                  {course.instructor} · {course.term}
                </div>
              </div>
              <span className={styles.level}>{course.publicLevel}</span>
            </div>

            {course.perspective && (
              <div className={styles.perspective}>
                🏛️ {perspectiveLabels[course.perspective]}
              </div>
            )}

            <ul className={styles.topics}>
              {course.topics.slice(0, 5).map((t) => (
                <li key={t}>{t}</li>
              ))}
              {course.topics.length > 5 && (
                <li className={styles.more}>+{course.topics.length - 5} more topics</li>
              )}
            </ul>

            <div className={styles.materials}>
              {Object.entries(MATERIAL_LABELS).map(([key, label]) => (
                <span
                  key={key}
                  className={`${styles.material} ${
                    course.materials[key] ? styles.materialOn : ''
                  }`}>
                  {label}
                </span>
              ))}
            </div>

            {course.license && <div className={styles.note}>📄 {course.license}</div>}
            {course.note && <div className={styles.note}>💡 {course.note}</div>}
          </article>
        ))}
      </div>
    </div>
  );
}
