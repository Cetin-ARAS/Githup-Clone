import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

type Props = {
  name?: string;
  icon?: React.ReactNode;
  className?: string;
};

export default function Button({ name, icon, className = '' }: Props) {
  const cx = classNames(styles.container, className ? className : '');

  return (
    <button className={cx}>
      {icon}
      <span>{name}</span>
    </button>
  );
}
