import React from 'react';
import styles from './Toggle.module.scss';
import classNames from 'classnames';

interface Props {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Toggle({ checked, onChange }: Props) {
  const cx = classNames(styles.slider, styles.round);

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={cx}></span>
    </label>
  );
}
