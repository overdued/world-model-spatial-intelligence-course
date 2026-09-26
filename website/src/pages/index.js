import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CourseMatrix from '@site/src/components/CourseMatrix';
import ColabBadge from '@site/src/components/ColabBadge';
import {tracks} from '@site/src/data/tracks';
import styles from './index.module.css';

function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <h1 className={styles.heroTitle}>World Models &amp; Spatial Intelligence</h1>
        <p className={styles.heroSubtitle}>
          From Representation to Prediction, Planning and Physical Intelligence
        </p>
        <div className={styles.heroButtons}>
          <Link className={`${styles.btn} ${styles.btnPrimary}`} to="/docs/start-here/">
            Start Learning →
          </Link>
          <Link className={`${styles.btn} ${styles.btnOutline}`} to="/roadmap">
            Explore Roadmap
          </Link>
        </div>
      </div>
    </header>
  );
}

const paths = [
  {
    icon: '🧩',
    name: 'Foundations',
    tagline: 'Fill the gaps — linear algebra, probability, PyTorch, DL, RL, CV.',
    learner: 'Anyone arriving from an adjacent field; dip in as needed.',
    modules: '7 modules',
    time: '~2 weeks part-time',
    prereqs: 'None — this is the on-ramp',
    href: '/docs/fundamentals/',
    note: 'Optional & non-linear: refer back as needed.',
  },
  {
    icon: '🧑‍🔬',
    name: 'World Model Scientist',
    tagline: 'Representation → Dynamics → Prediction → Planning → Evaluation.',
    learner: 'Researchers & engineers who want to build world models.',
    modules: `${tracks.scientist.modules.length} modules`,
    time: '~8–10 weeks part-time',
    prereqs: 'Grad-level ML or equivalent self-study',
    href: '/docs/scientist/',
    note: 'Exit: reproduce Dreamer / TD-MPC-class systems.',
  },
  {
    icon: '👷',
    name: 'Spatial & Embodied Engineer',
    tagline: 'Geometry → 3D → SLAM → Spatial Memory → Navigation → Robot.',
    learner: 'Robotics, autonomous driving, AR/VR and spatial computing builders.',
    modules: `${tracks.spatial.modules.length} modules`,
    time: '~8–10 weeks part-time',
    prereqs: 'Grad-level ML + basic geometry',
    href: '/docs/spatial/',
    note: 'Exit: build a perception → state estimation → planning system.',
  },
];

function ChooseYourPath() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Choose Your Path</h2>
        <div className={styles.pathGrid}>
          {paths.map((p) => (
            <div key={p.name} className={styles.pathCard}>
              <div className={styles.pathIcon}>{p.icon}</div>
              <h3 className={styles.pathName}>{p.name}</h3>
              <p className={styles.pathTagline}>{p.tagline}</p>
              <dl className={styles.pathMeta}>
                <div>
                  <dt>Target learner</dt>
                  <dd>{p.learner}</dd>
                </div>
                <div>
                  <dt>Modules</dt>
                  <dd>{p.modules}</dd>
                </div>
                <div>
                  <dt>Estimated time</dt>
                  <dd>{p.time}</dd>
                </div>
                <div>
                  <dt>Prerequisites</dt>
                  <dd>{p.prereqs}</dd>
                </div>
              </dl>
              <p className={styles.pathNote}>{p.note}</p>
              <Link className={`${styles.btn} ${styles.btnPrimary} ${styles.pathBtn}`} to={p.href}>
                Start Track →
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
        <h2 className={styles.sectionTitle}>Course Matrix</h2>
        <p className={styles.sectionLead}>
          Every module pairs one lecture source, one canonical paper and one hands-on lab.
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
    desc: 'Build a Gymnasium-compatible environment from scratch — observation, action, state, transition.',
    gpu: 'CPU only',
  },
  {
    id: 'lab01_kalman_filter',
    name: 'Lab 1 · Kalman Filter',
    desc: 'Hand-write the predict–update loop, track a noisy 2D target, then compare against dynamax.',
    gpu: 'CPU only',
  },
  {
    id: 'lab02_latent_dynamics',
    name: 'Lab 2 · Latent Dynamics',
    desc: 'Learn a latent state from pixels and train a predictor — the minimal world-model loop.',
    gpu: 'Colab T4',
  },
];

function LabsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Hands-on Labs</h2>
        <p className={styles.sectionLead}>
          All labs run one-click on free Colab GPUs. Eleven labs plus a capstone — here are the first three.
        </p>
        <div className={styles.labGrid}>
          {labPreview.map((lab) => (
            <div key={lab.id} className={styles.labCard}>
              <h3 className={styles.labName}>{lab.name}</h3>
              <p className={styles.labDesc}>{lab.desc}</p>
              <div className={styles.labFooter}>
                <span className={styles.gpu}>{lab.gpu}</span>
                <ColabBadge lab={lab.id} />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.allLabs}>
          <Link to="/docs/labs">Browse all labs →</Link>
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
