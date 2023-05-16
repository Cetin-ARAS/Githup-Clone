import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.row}>
          <h3 className={styles.title}>BrandName</h3>
          <nav className={styles.navigation}>
            <div className={styles.leftContainer}>
              <ul className={styles.navigationList}>
                <li className={styles.navigationItem}>
                  <a href="#" className={styles.navigationLink}>
                    Home
                  </a>
                </li>
                <li className={styles.navigationItem}>
                  <a href="#" className={styles.navigationLink}>
                    Product
                  </a>
                </li>
                <li className={styles.navigationItem}>
                  <a href="#" className={styles.navigationLink}>
                    Pricing
                  </a>
                </li>
                <li className={styles.navigationItem}>
                  <a href="#" className={styles.navigationLink}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.rightContainer}>
              <ul className={styles.rightContainer}>
                <li className={styles.navigationItem}>
                  <a href="#" className={styles.navigationLink}>
                    Login
                  </a>
                </li>
                <li className={styles.navigationItem}>
                  <a href="#" className={styles.button}>
                    JOIN
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
