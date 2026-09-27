import React, {useEffect, useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import {getTrack} from '@site/src/data/tracks';
import {pick, useCurrentLocale} from '@site/src/utils/i18n';
import {readProgress, subscribeProgress} from '@site/src/utils/progress';
import styles from './TrackRoadmap.module.css';

/**
 * <TrackRoadmap track="scientist" />  |  <TrackRoadmap track="spatial" />
 *
 * Vertical timeline roadmap for a learning track. Reads module metadata
 * from src/data/tracks.js and completion state from localStorage
 * ("wmsi-progress", written by <ModuleProgress />).
 * Text fields are locale-aware (Chinese default, `*En` overrides).
 */
export default function TrackRoadmap({track}) {
  const data = getTrack(track);
  const locale = useCurrentLocale();
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
          <div className={styles.tagline}>{pick(locale, data, 'tagline')}</div>
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
                  <span className={styles.estTime}>{pick(locale, mod, 'estTime')}</span>
                </div>
                <div className={styles.oneLiner}>{pick(locale, mod, 'oneLiner')}</div>
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
            {translate(
              {
                id: 'trackRoadmap.progress.counts',
                message: '{completed}/{total} 已完成',
                description: 'Completion counts in the track roadmap summary',
              },
              {completed: stats.completed, total: stats.total},
            )}
          </span>
        </div>
        <div className={styles.nextLine}>
          {stats.next ? (
            <>
              <Translate id="trackRoadmap.nextUp" description="Prefix of the next-module line in the track roadmap">
                下一个：
              </Translate>{' '}
              <Link to={`${data.basePath}/${stats.next.slug}`}>
                {stats.next.id} · {stats.next.title}
              </Link>
            </>
          ) : (
            <Translate id="trackRoadmap.allDone" description="Shown when every module of the track is completed">
              全部模块已完成——冲向毕业项目！🎓
            </Translate>
          )}
        </div>
      </div>
    </div>
  );
}
