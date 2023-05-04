import React from 'react';
import styles from './Col.module.scss';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  span?: { lg?: number; md?: number; sm?: number };
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default function Col({ span = { lg: 1, md: 1, sm: 1 }, className, children, onClick }: Props) {
  const cx = classNames(
    styles.container,
    className ? className : '',
    span.lg === 12 ? styles.lg12 : '',
    span.lg === 11 ? styles.lg11 : '',
    span.lg === 10 ? styles.lg10 : '',
    span.lg === 9 ? styles.lg9 : '',
    span.lg === 8 ? styles.lg8 : '',
    span.lg === 7 ? styles.lg7 : '',
    span.lg === 6 ? styles.lg6 : '',
    span.lg === 5 ? styles.lg5 : '',
    span.lg === 4 ? styles.lg4 : '',
    span.lg === 3 ? styles.lg3 : '',
    span.lg === 2 ? styles.lg2 : '',
    span.lg === 1 ? styles.lg1 : '',
    span.md === 12 ? styles.md12 : '',
    span.md === 11 ? styles.md11 : '',
    span.md === 10 ? styles.md10 : '',
    span.md === 9 ? styles.md9 : '',
    span.md === 8 ? styles.md8 : '',
    span.md === 7 ? styles.md7 : '',
    span.md === 6 ? styles.md6 : '',
    span.md === 5 ? styles.md5 : '',
    span.md === 4 ? styles.md4 : '',
    span.md === 3 ? styles.md3 : '',
    span.md === 2 ? styles.md2 : '',
    span.md === 1 ? styles.md1 : '',
    span.sm === 12 ? styles.sm12 : '',
    span.sm === 11 ? styles.sm11 : '',
    span.sm === 10 ? styles.sm10 : '',
    span.sm === 9 ? styles.sm9 : '',
    span.sm === 8 ? styles.sm8 : '',
    span.sm === 7 ? styles.sm7 : '',
    span.sm === 6 ? styles.sm6 : '',
    span.sm === 5 ? styles.sm5 : '',
    span.sm === 4 ? styles.sm4 : '',
    span.sm === 3 ? styles.sm3 : '',
    span.sm === 2 ? styles.sm2 : '',
    span.sm === 1 ? styles.sm1 : '',
  );

  return (
    <div onClick={onClick} className={cx}>
      {children}
    </div>
  );
}
