import React from 'react';
import styles from './NProgress.module.scss';
import AppImage from '../AppImage/AppImage';
import { useDeviceDetect } from '@/hooks';
import classNames from 'classnames';

type Props = {
  open: boolean;
};

export default function NProgress({ open }: Props) {
  const { ScreenNotReady } = useDeviceDetect();
  const cx = classNames(styles.container, ScreenNotReady() || open ? styles.appear : styles.disappear);
  return (
    <div className={cx}>
      <AppImage priority src={process.env.NEXT_PUBLIC_APP_LOGO} alt={'app-logo'} width={149.1} height={93.8} objectFit="contain" />
    </div>
  );
}
