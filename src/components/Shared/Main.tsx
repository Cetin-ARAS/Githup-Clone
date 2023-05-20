import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <aside className={styles.asideLeft}>
          <h6>JOIN US</h6>
          <div className={styles.bigText}>
            <h1>In-dept, demanding courses</h1>
          </div>
          <div className={styles.paragraph}>
            <p>We know how large objects will act.</p>
            <p>but things on a small scale</p>
          </div>
          <div className={styles.btn}>
            <button typeof="buton" className={styles.leftBtn}>
              Get Quote Now
            </button>
            <button className={styles.rightBtn}>Learn More</button>
          </div>
        </aside>
        <aside className={styles.asideRight}></aside>
      </section>
    </main>
  );
};

export default Main;
