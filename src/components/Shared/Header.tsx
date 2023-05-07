import React from 'react';
import styles from './Header.module.scss';
import Container from '../Container/Container';
import AppImage from '../AppImage/AppImage';
import Button from '../Button/Button';

export default function Header() {
  return (
    <header className={styles.container}>
      <Container className={styles.innerContainer}>
        <div>
          <div className={styles.left}>
            <svg
              height="32"
              fill=""
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              className="octicon octicon-mark-github v-align-middle"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            <div className={styles.searchContainer}>
              <input type="text" placeholder="Search or jump to" />
            </div>
            <nav className={styles.middle}>
              <ul className={styles.nav}>
                <li>Pulls</li>
                <li>Issues</li>
                <li>Codespace</li>
                <li>Marketplace</li>
                <li>Explore</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.rightPart}>
          <Button
            className={styles.btn}
            icon={
              <>
                <svg fill="#fff" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-bell">
                  <path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"></path>
                </svg>
                <span className={styles.circle} />
              </>
            }
          />

          <Button
            icon={
              <svg fill="#fff" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-plus">
                <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
              </svg>
            }
          />

          <Button className={styles.avatar} icon={<AppImage src="	https://avatars.githubusercontent.com/u/101902046?s=40&v=4" alt="avatar" width={24} height={24} />} />
        </div>
      </Container>
    </header>
  );
}
