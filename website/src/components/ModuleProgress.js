import React, {useEffect, useState} from 'react';
import Translate from '@docusaurus/Translate';
import {isCompleted, setCompleted, subscribeProgress} from '@site/src/utils/progress';
import styles from './ModuleProgress.module.css';

/**
 * <ModuleProgress id="a01" label="What is a World Model?" />
 *
 * Renders a styled "Mark as completed" toggle persisted in localStorage
 * under the shared "wmsi-progress" key. Safe under SSR (renders unchecked
 * on the server, hydrates from localStorage on the client).
 */
export default function ModuleProgress({id, label}) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(isCompleted(id));
    return subscribeProgress(() => setDone(isCompleted(id)));
  }, [id]);

  return (
    <button
      type="button"
      className={`${styles.wrapper} ${done ? styles.done : ''}`}
      onClick={() => setCompleted(id, !done)}
      aria-pressed={done}>
      <span className={styles.box} aria-hidden="true">
        {done && (
          <svg viewBox="0 0 12 10" className={styles.check}>
            <path d="M1 5l3.5 3.5L11 1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </span>
      <span className={styles.text}>
        <span className={styles.action}>
          {done ? (
            <Translate id="moduleProgress.completed" description="State label when a module is marked completed">
              已完成
            </Translate>
          ) : (
            <Translate id="moduleProgress.markCompleted" description="Button label to mark a module as completed">
              标记为已完成
            </Translate>
          )}
        </span>
        {label && <span className={styles.label}>{label}</span>}
      </span>
    </button>
  );
}
