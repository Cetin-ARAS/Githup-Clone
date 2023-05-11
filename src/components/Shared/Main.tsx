import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.container}>
      <main className={styles.mainContainer}>
        <aside className={styles.asideContainer}>
          <aside className={styles.leftAside}>
            <div className={styles.leftHeader}>
              <div className={styles.headerTop}>
                <div className={styles.headerTopLeft}>
                  <img src="https://avatars.githubusercontent.com/u/54995453?v=4" alt="clarusway" size="24" height="24" width="24" />
                  <p>You have been added to the clarusway organization.</p>
                </div>

                <div className={styles.headerTopRight}>
                  <h5 className={styles.box}>View organization</h5>
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={styles.cross}>
                    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                  </svg>
                </div>
              </div>
              <div className={styles.headerBottom}></div>
            </div>
          </aside>
          <aside className={styles.rightAside}>
                <h5>Latest changes</h5>
                <ul><li></li></ul>
          </aside>
        </aside>
        <footer className={styles.footerContainer}></footer>
      </main>
    </div>
  );
};

export default Main;
