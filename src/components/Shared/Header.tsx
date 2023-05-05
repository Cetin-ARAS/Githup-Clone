import React from 'react';
import styles from './Header.module.scss';
import Container from '../Container/Container';
import AppImage from '../AppImage/AppImage';
import Button from '../Button/Button';

export default function Header() {
  return (
    <header className={styles.container}>
      <Container className={styles.innerContainer}>
        <div></div>
        <div className={styles.rightPart}>
          <Button
            icon={
              <svg fill="#fff" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-bell">
                <path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"></path>
              </svg>
            }
          />
           <svg className={styles.circle} width="10" height="10" > </svg>          
          <Button
            icon={
              <svg fill="#fff" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-plus">
                <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
              </svg>
            }
          />
          
          <Button className={styles.avatar} icon={<AppImage src="	https://avatars.githubusercontent.com/u/101902046?s=40&v=4" alt="avatar" width={24} height={24} />} />

          <svg className={styles.circle2} width="12" height="12" > </svg>
        </div>
      </Container>
    </header>
  );
}
