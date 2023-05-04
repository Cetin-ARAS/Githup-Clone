import React from 'react';
import styles from './Row.module.scss';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  gap?: number;
  col?: { lg?: number; md?: number; sm?: number };
};

export default function Row({ gap = 0, className, col = { lg: 12, md: 12, sm: 12 }, children }: Props) {
  const cx = classNames(
    styles.container,
    className ? className : '',
    col.lg === 12 ? styles.lg12 : '',
    col.lg === 11 ? styles.lg11 : '',
    col.lg === 10 ? styles.lg10 : '',
    col.lg === 9 ? styles.lg9 : '',
    col.lg === 8 ? styles.lg8 : '',
    col.lg === 7 ? styles.lg7 : '',
    col.lg === 6 ? styles.lg6 : '',
    col.lg === 5 ? styles.lg5 : '',
    col.lg === 4 ? styles.lg4 : '',
    col.lg === 3 ? styles.lg3 : '',
    col.lg === 2 ? styles.lg2 : '',
    col.lg === 1 ? styles.lg1 : '',
    col.md === 12 ? styles.md12 : '',
    col.md === 11 ? styles.md11 : '',
    col.md === 10 ? styles.md10 : '',
    col.md === 9 ? styles.md9 : '',
    col.md === 8 ? styles.md8 : '',
    col.md === 7 ? styles.md7 : '',
    col.md === 6 ? styles.md6 : '',
    col.md === 5 ? styles.md5 : '',
    col.md === 4 ? styles.md4 : '',
    col.md === 3 ? styles.md3 : '',
    col.md === 2 ? styles.md2 : '',
    col.md === 1 ? styles.md1 : '',
    col.sm === 12 ? styles.sm12 : '',
    col.sm === 11 ? styles.sm11 : '',
    col.sm === 10 ? styles.sm10 : '',
    col.sm === 9 ? styles.sm9 : '',
    col.sm === 8 ? styles.sm8 : '',
    col.sm === 7 ? styles.sm7 : '',
    col.sm === 6 ? styles.sm6 : '',
    col.sm === 5 ? styles.sm5 : '',
    col.sm === 4 ? styles.sm4 : '',
    col.sm === 3 ? styles.sm3 : '',
    col.sm === 2 ? styles.sm2 : '',
    col.sm === 1 ? styles.sm1 : '',
  );
  return (
    <div className={cx} style={{ gap: `${gap}rem` }}>
      {children}
    </div>
  );
}
