import React, {useEffect, useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import {getTrack} from '@site/src/data/tracks';
import {readProgress, subscribeProgress} from '@site/src/utils/progress';
import styles from './TrackRoadmap.module.css';

/**
 * <TrackRoadmap track="scientist" />  |  <TrackRoadmap track="spatial" />
 *
 * Vertical timeline roadmap for a learning track. Reads module metadata
 * from src/data/tracks.js and completion state from localStorage
 * ("wmsi-progress", written by <ModuleProgress />).
 */
export default function TrackRoadmap({track}) {
  const data = getTrack(track);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    setProgress(readProgress());
    return subscribeProgress(setProgress);
  }, []);

  const stats = useMemo(() => {
    const total = data.modules.length;
    const completed = data.modules.filter((m) => progress[m.id]).length;
    const percent = Math.round((completed / total) * 100);
    const next = data.modules.find((m) => !progress[m.id]);
    const blocks = 20;
    const filled = Math.round((percent / 100) * blocks);
    const bar = '█'.repeat(filled) + '░'.repeat(blocks - filled);
    return {total, completed, percent, next, bar};
  }, [data, progress]);

  return (
    <div className={styles.roadmap}>
      <div className={styles.header}>
        <span className={styles.icon}>{data.icon}</span>
        <div>
          <div className={styles.trackTitle}>{data.title}</div>
          <div className={styles.tagline}>{data.tagline}</div>
        </div>
      </div>

      <ol className={styles.timeline}>
        {data.modules.map((mod, idx) => {
          const done = Boolean(progress[mod.id]);
          return (
            <li key={mod.id} className={styles.item}>
              <span className={`${styles.dot} ${done ? styles.dotDone : ''}`}>
                {done ? '✓' : idx + 1}
              </span>
              <Link
                to={`${data.basePath}/${mod.slug}`}
                className={`${styles.card} ${done ? styles.cardDone : ''}`}>
                <div className={styles.cardTop}>
                  <span className={styles.moduleId}>{mod.id}</span>
                  <span className={styles.moduleTitle}>{mod.title}</span>
                  <span className={styles.estTime}>{mod.estTime}</span>
                </div>
                <div className={styles.oneLiner}>{mod.oneLiner}</div>
              </Link>
            </li>
          );
        })}
      </ol>

      <div className={styles.summary}>
        <div className={styles.progressLine}>
          <code className={styles.bar}>
            {stats.bar}&nbsp;{stats.percent}%
          </code>
          <span className={styles.counts}>
            {stats.completed}/{stats.total} completed
          </span>
        </div>
        <div className={styles.nextLine}>
          {stats.next ? (
            <>
              Next up:{' '}
              <Link to={`${data.basePath}/${stats.next.slug}`}>
                {stats.next.id} · {stats.next.title}
              </Link>
            </>
          ) : (
            <>All modules completed — on to the Capstone! 🎓</>
          )}
        </div>
      </div>
    </div>
  );
}
