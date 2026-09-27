import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {matrixRows} from '@site/src/data/matrix';
import {pick, useCurrentLocale} from '@site/src/utils/i18n';
import ColabBadge from './ColabBadge';
import styles from './CourseMatrix.module.css';

/**
 * Course matrix table — Module | Learn | Watch | Read | Build.
 * Data lives in src/data/matrix.js. The `learn` column is locale-aware
 * (Chinese default, `learnEn` override); the rest are proper names.
 */
export default function CourseMatrix() {
  const locale = useCurrentLocale();
  return (
    <div className={styles.scroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <Translate id="courseMatrix.header.module" description="Course matrix column header">模块</Translate>
            </th>
            <th>
              <Translate id="courseMatrix.header.learn" description="Course matrix column header">学什么</Translate>
            </th>
            <th>
              <Translate id="courseMatrix.header.watch" description="Course matrix column header">看课程</Translate>
            </th>
            <th>
              <Translate id="courseMatrix.header.read" description="Course matrix column header">读论文</Translate>
            </th>
            <th>
              <Translate id="courseMatrix.header.build" description="Course matrix column header">做实验</Translate>
            </th>
          </tr>
        </thead>
        <tbody>
          {matrixRows.map((row) => (
            <tr key={row.module}>
              <td className={styles.module}>{row.module}</td>
              <td>{pick(locale, row, 'learn')}</td>
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
                <ColabBadge
                  lab={row.buildLab}
                  label={translate(
                    {
                      id: 'courseMatrix.openInColab',
                      message: '{lab} — 在 Colab 中打开',
                      description: 'Accessible label of the Colab badge in the course matrix',
                    },
                    {lab: row.build},
                  )}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
