import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <aside className={styles.asideLeft}>
          <h6>JOIN US</h6>

          <h1>In-dept, demanding courses</h1>
          <p>
            We know how large objects will act. <br /> but things on a small scale
          </p>

          <div className={styles.btn}>
            <button className={styles.leftBtn}>Get Quote Now</button>
            <button className={styles.rightBtn}>Learn More</button>
          </div>
        </aside>
        <aside className={styles.asideRight}>
          <div>
            <img src="./Resim.png" alt="" />
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Main;
