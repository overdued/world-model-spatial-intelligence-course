import React from 'react';
import {matrixRows} from '@site/src/data/matrix';
import ColabBadge from './ColabBadge';
import styles from './CourseMatrix.module.css';

/**
 * Course matrix table — Module | Learn | Watch | Read | Build.
 * Data lives in src/data/matrix.js.
 */
export default function CourseMatrix() {
  return (
    <div className={styles.scroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Module</th>
            <th>Learn</th>
            <th>Watch</th>
            <th>Read</th>
            <th>Build</th>
          </tr>
        </thead>
        <tbody>
          {matrixRows.map((row) => (
            <tr key={row.module}>
              <td className={styles.module}>{row.module}</td>
              <td>{row.learn}</td>
              <td>
                <a href={row.watchUrl} target="_blank" rel="noopener noreferrer">
                  {row.watch}
                </a>
              </td>
              <td>
                <a href={row.readUrl} target="_blank" rel="noopener noreferrer">
                  {row.read}
                </a>
              </td>
              <td className={styles.build}>
                <span className={styles.labName}>{row.build}</span>
                <ColabBadge lab={row.buildLab} label={`${row.build} — Open in Colab`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
