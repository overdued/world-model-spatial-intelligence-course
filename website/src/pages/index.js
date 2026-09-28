import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import CourseMatrix from '@site/src/components/CourseMatrix';
import ColabBadge from '@site/src/components/ColabBadge';
import {tracks} from '@site/src/data/tracks';
import {pick, useCurrentLocale} from '@site/src/utils/i18n';
import styles from './index.module.css';

function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <h1 className={styles.heroTitle}>World Models &amp; Spatial Intelligence</h1>
        <p className={styles.heroSubtitle}>
          <Translate id="home.hero.subtitle" description="Homepage hero subtitle">
            从表征到预测、规划与物理智能
          </Translate>
        </p>
        <p className={styles.heroBadge}>
          <a href="https://www.cuhk.edu.cn/" target="_blank" rel="noopener noreferrer">
            <Translate id="home.hero.researchGroup" description="Research-group attribution line under the hero subtitle">
              香港中文大学（深圳）人工智能学院 BL&amp;SP 课题组
            </Translate>
          </a>
        </p>
        <div className={styles.heroButtons}>
          <Link className={`${styles.btn} ${styles.btnPrimary}`} to="/docs/start-here/">
            <Translate id="home.hero.startLearning" description="Primary hero button">开始学习 →</Translate>
          </Link>
          <Link className={`${styles.btn} ${styles.btnOutline}`} to="/roadmap">
            <Translate id="home.hero.exploreRoadmap" description="Secondary hero button">查看路线图</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

const paths = [
  {
    icon: '🧩',
    name: '基础',
    nameEn: 'Foundations',
    tagline: '补齐短板——线性代数、概率、PyTorch、深度学习、Transformer、计算机视觉、强化学习。',
    taglineEn: 'Fill the gaps — linear algebra, probability, PyTorch, DL, Transformers, CV, RL.',
    learner: '来自邻近领域的任何人；按需取用。',
    learnerEn: 'Anyone arriving from an adjacent field; dip in as needed.',
    modules: '8 个模块',
    modulesEn: '8 modules',
    time: '业余约 2 周',
    timeEn: '~2 weeks part-time',
    prereqs: '无——这里是入口匝道',
    prereqsEn: 'None — this is the on-ramp',
    href: '/docs/fundamentals/',
    note: '可选且非线性：需要时随时回来查。',
    noteEn: 'Optional & non-linear: refer back as needed.',
  },
  {
    icon: '🧑‍🔬',
    name: '世界模型科学家',
    nameEn: 'World Model Scientist',
    tagline: '表征 → 动力学 → 预测 → 规划 → 评估。',
    taglineEn: 'Representation → Dynamics → Prediction → Planning → Evaluation.',
    learner: '想亲手构建世界模型的研究者与工程师。',
    learnerEn: 'Researchers & engineers who want to build world models.',
    modules: `${tracks.scientist.modules.length} 个模块`,
    modulesEn: `${tracks.scientist.modules.length} modules`,
    time: '业余约 8–10 周',
    timeEn: '~8–10 weeks part-time',
    prereqs: '研究生级机器学习或同等自学经历',
    prereqsEn: 'Grad-level ML or equivalent self-study',
    href: '/docs/scientist/',
    note: '出口：复现 Dreamer / TD-MPC 级别的系统。',
    noteEn: 'Exit: reproduce Dreamer / TD-MPC-class systems.',
  },
  {
    icon: '👷',
    name: '空间与具身工程师',
    nameEn: 'Spatial & Embodied Engineer',
    tagline: '几何 → 3D → SLAM → 空间记忆 → 导航 → 机器人。',
    taglineEn: 'Geometry → 3D → SLAM → Spatial Memory → Navigation → Robot.',
    learner: '机器人、自动驾驶、AR/VR 与空间计算的构建者。',
    learnerEn: 'Robotics, autonomous driving, AR/VR and spatial computing builders.',
    modules: `${tracks.spatial.modules.length} 个模块`,
    modulesEn: `${tracks.spatial.modules.length} modules`,
    time: '业余约 8–10 周',
    timeEn: '~8–10 weeks part-time',
    prereqs: '研究生级机器学习 + 基础几何',
    prereqsEn: 'Grad-level ML + basic geometry',
    href: '/docs/spatial/',
    note: '出口：搭建感知 → 状态估计 → 规划系统。',
    noteEn: 'Exit: build a perception → state estimation → planning system.',
  },
];

function ChooseYourPath() {
  const locale = useCurrentLocale();
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <Translate id="home.paths.title" description="Section title of the track picker">选择你的路线</Translate>
        </h2>
        <div className={styles.pathGrid}>
          {paths.map((p) => (
            <div key={p.name} className={styles.pathCard}>
              <div className={styles.pathIcon}>{p.icon}</div>
              <h3 className={styles.pathName}>{pick(locale, p, 'name')}</h3>
              <p className={styles.pathTagline}>{pick(locale, p, 'tagline')}</p>
              <dl className={styles.pathMeta}>
                <div>
                  <dt>
                    <Translate id="home.paths.targetLearner" description="Path card meta label">适合人群</Translate>
                  </dt>
                  <dd>{pick(locale, p, 'learner')}</dd>
                </div>
                <div>
                  <dt>
                    <Translate id="home.paths.modules" description="Path card meta label">模块数</Translate>
                  </dt>
                  <dd>{pick(locale, p, 'modules')}</dd>
                </div>
                <div>
                  <dt>
                    <Translate id="home.paths.estimatedTime" description="Path card meta label">预计时间</Translate>
                  </dt>
                  <dd>{pick(locale, p, 'time')}</dd>
                </div>
                <div>
                  <dt>
                    <Translate id="home.paths.prerequisites" description="Path card meta label">先修要求</Translate>
                  </dt>
                  <dd>{pick(locale, p, 'prereqs')}</dd>
                </div>
              </dl>
              <p className={styles.pathNote}>{pick(locale, p, 'note')}</p>
              <Link className={`${styles.btn} ${styles.btnPrimary} ${styles.pathBtn}`} to={p.href}>
                <Translate id="home.paths.startTrack" description="Button entering a learning track">进入路线 →</Translate>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MatrixSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <Translate id="home.matrix.title" description="Course matrix section title">课程矩阵</Translate>
        </h2>
        <p className={styles.sectionLead}>
          <Translate id="home.matrix.lead" description="Course matrix section lead">
            每个模块配对一个讲座来源、一篇经典论文和一个动手实验。
          </Translate>
        </p>
        <CourseMatrix />
      </div>
    </section>
  );
}

const labPreview = [
  {
    id: 'lab00_tiny_world',
    name: 'Lab 0 · Tiny World',
    desc: '从零构建一个兼容 Gymnasium 的环境——观测、动作、状态、转移。',
    descEn: 'Build a Gymnasium-compatible environment from scratch — observation, action, state, transition.',
    gpu: '纯 CPU',
    gpuEn: 'CPU only',
  },
  {
    id: 'lab01_kalman_filter',
    name: 'Lab 1 · Kalman Filter',
    desc: '手写预测–更新循环，跟踪一个带噪 2D 目标，然后与 dynamax 对比。',
    descEn: 'Hand-write the predict–update loop, track a noisy 2D target, then compare against dynamax.',
    gpu: '纯 CPU',
    gpuEn: 'CPU only',
  },
  {
    id: 'lab02_latent_dynamics',
    name: 'Lab 2 · Latent Dynamics',
    desc: '从像素学习隐状态并训练预测器——最小可用的世界模型闭环。',
    descEn: 'Learn a latent state from pixels and train a predictor — the minimal world-model loop.',
    gpu: 'Colab T4',
    gpuEn: 'Colab T4',
  },
];

function LabsSection() {
  const locale = useCurrentLocale();
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <Translate id="home.labs.title" description="Labs section title">动手实验</Translate>
        </h2>
        <p className={styles.sectionLead}>
          <Translate id="home.labs.lead" description="Labs section lead">
            所有实验都可以在免费 Colab GPU 上一键运行。共十一个实验加一个毕业项目——这里展示前三个。
          </Translate>
        </p>
        <div className={styles.labGrid}>
          {labPreview.map((lab) => (
            <div key={lab.id} className={styles.labCard}>
              <h3 className={styles.labName}>{lab.name}</h3>
              <p className={styles.labDesc}>{pick(locale, lab, 'desc')}</p>
              <div className={styles.labFooter}>
                <span className={styles.gpu}>{pick(locale, lab, 'gpu')}</span>
                <ColabBadge lab={lab.id} />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.allLabs}>
          <Link to="/docs/labs">
            <Translate id="home.labs.browseAll" description="Link to the full lab index">浏览全部实验 →</Translate>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Hero />
      <main>
        <ChooseYourPath />
        <MatrixSection />
        <LabsSection />
      </main>
    </Layout>
  );
}
