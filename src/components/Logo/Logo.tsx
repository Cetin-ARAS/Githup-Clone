import React from 'react';
import styles from './Logo.module.scss';
import AppImage from '../AppImage/AppImage';
import { useDeviceDetect } from '@/hooks';
import AppLink from '../AppLink/AppLink';

type Props = {};

export default function Logo({}: Props) {
  const { ScreenMedium } = useDeviceDetect();

  const MobileLogoRectangle = () => {
    return (
      <svg width="76" height="81" viewBox="0 0 76 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 0.5H75.5V67.9445L38 83.4589L0.5 67.9445V0.5Z" fill="#151515" stroke="#3E3E3E" />
      </svg>
    );
  };

  const WebLogoRectangle = () => {
    return (
      <svg width="184" height="172" viewBox="0 0 184 142" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 -29.5H183.5V104.108L92 141.46L0.5 104.108V-29.5Z" fill="#151515" stroke="#3E3E3E" />
      </svg>
    );
  };

  return (
    <div className={styles.container}>
      <AppLink className={styles.innerContainer} href="/">
        <span className={styles.logoRectangle}>{ScreenMedium() ? MobileLogoRectangle() : WebLogoRectangle()}</span>
        <span className={styles.imgContainer}>
          <AppImage
            objectFit="contain"
            priority
            src={process.env.NEXT_PUBLIC_APP_LOGO}
            alt={'app-logo'}
            width={ScreenMedium() ? 59.64 : 102.24}
            height={ScreenMedium() ? 37.52 : 64.32}
          />
        </span>
      </AppLink>
    </div>
  );
}
