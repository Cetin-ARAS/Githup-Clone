import React from 'react';
import styles from './Container.module.scss';
import classNames from 'classnames';

type Props = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  smPaddingZero?: boolean;
};

export default function Container({ children, style, smPaddingZero, className }: Props) {
  const cx = classNames(className ? className : '', styles.wrapper, smPaddingZero ? styles.smPaddingZero : '');
  return (
    <div style={{ ...style }} className={cx}>
      {children}
    </div>
  );
}
