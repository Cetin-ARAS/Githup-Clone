import styles from './Checkbox.module.scss';
import classNames from 'classnames';
import { ChangeEventHandler, ReactNode } from 'react';

type Props = {
  checked?: boolean;
  id: string;
  hasError?: boolean;
  children: React.ReactNode;
  size?: 'default' | 'small' | 'medium' | 'large';
  readonly?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  style?: any;
  additionalProps?: any;
  className?: string;
};

export default function Checkbox(props: Props) {
  const { checked, id, children, readonly, onChange, style, additionalProps, className, size, hasError = false } = props;

  const cx = classNames(
    styles.formCheck,
    className,
    size === 'default' || size === undefined ? styles.default : '',
    size === 'small' ? styles.small : '',
    size === 'medium' ? styles.medium : '',
    size === 'large' ? styles.large : '',
    checked ? styles.checked : '',
    hasError ? styles.checkboxHasError : '',
  );
  const cx2 = classNames(styles.formCheckInput);

  return (
    <>
      <div className={cx}>
        <span className={cx2}>
          <span className={styles.formCheckInputMask}></span>
          <input type="checkbox" onChange={onChange} checked={checked} id={id} />
        </span>
        <label htmlFor={id}>
          <div className="formBottomText">{children}</div>
        </label>
      </div>
    </>
  );
}
