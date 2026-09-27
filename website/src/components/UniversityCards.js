import React, {useState} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {courses, perspectiveLabels, perspectiveLabelsEn} from '@site/src/data/courses';
import {pick, useCurrentLocale} from '@site/src/utils/i18n';
import styles from './UniversityCards.module.css';

const LEVEL_FILTERS = ['All', 'Very High', 'High', 'Medium', 'Low', 'Very Low'];

function useLevelLabels() {
  return {
    All: translate({id: 'universityCards.level.all', message: '全部', description: 'Public-materials filter chip'}),
    'Very High': translate({id: 'universityCards.level.veryHigh', message: '很高', description: 'Public-materials filter chip'}),
    High: translate({id: 'universityCards.level.high', message: '高', description: 'Public-materials filter chip'}),
    Medium: translate({id: 'universityCards.level.medium', message: '中', description: 'Public-materials filter chip'}),
    Low: translate({id: 'universityCards.level.low', message: '低', description: 'Public-materials filter chip'}),
    'Very Low': translate({id: 'universityCards.level.veryLow', message: '很低', description: 'Public-materials filter chip'}),
  };
}

function useMaterialLabels() {
  return {
    slides: translate({id: 'universityCards.material.slides', message: '课件', description: 'Course material badge'}),
    notes: translate({id: 'universityCards.material.notes', message: '讲义', description: 'Course material badge'}),
    assignments: translate({id: 'universityCards.material.assignments', message: '作业', description: 'Course material badge'}),
    labs: translate({id: 'universityCards.material.labs', message: '实验', description: 'Course material badge'}),
    code: translate({id: 'universityCards.material.code', message: '代码', description: 'Course material badge'}),
    videos: translate({id: 'universityCards.material.videos', message: '视频', description: 'Course material badge'}),
  };
}

/**
 * Card grid of the 11 surveyed university courses.
 * Data: src/data/courses.js (derived from metadata/courses.json).
 * School/course names and topics stay in English (proper-noun content);
 * notes, perspective labels and UI chrome are locale-aware.
 */
export default function UniversityCards() {
  const locale = useCurrentLocale();
  const levelLabels = useLevelLabels();
  const materialLabels = useMaterialLabels();
  const perspectives = locale === 'zh-Hans' ? perspectiveLabels : perspectiveLabelsEn;
  const [level, setLevel] = useState('All');

  const filtered =
    level === 'All' ? courses : courses.filter((c) => c.publicLevel === level);

  return (
    <div>
      <div className={styles.filters}>
        <span className={styles.filterLabel}>
          <Translate id="universityCards.filterLabel" description="Label before the public-materials filter chips">
            公开材料：
          </Translate>
        </span>
        {LEVEL_FILTERS.map((l) => (
          <button
            key={l}
            type="button"
            className={`${styles.chip} ${level === l ? styles.chipActive : ''}`}
            onClick={() => setLevel(l)}>
            {levelLabels[l]}
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
              <span className={styles.level}>{levelLabels[course.publicLevel]}</span>
            </div>

            {course.perspective && (
              <div className={styles.perspective}>
                🏛️ {perspectives[course.perspective]}
              </div>
            )}

            <ul className={styles.topics}>
              {course.topics.slice(0, 5).map((t) => (
                <li key={t}>{t}</li>
              ))}
              {course.topics.length > 5 && (
                <li className={styles.more}>
                  {translate(
                    {
                      id: 'universityCards.moreTopics',
                      message: '还有 {count} 个主题',
                      description: 'Overflow line when a course has more than five listed topics',
                    },
                    {count: course.topics.length - 5},
                  )}
                </li>
              )}
            </ul>

            <div className={styles.materials}>
              {Object.entries(materialLabels).map(([key, label]) => (
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
            {course.note && <div className={styles.note}>💡 {pick(locale, course, 'note')}</div>}
          </article>
        ))}
      </div>
    </div>
  );
}
