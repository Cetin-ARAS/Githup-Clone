import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './InnerHtml.module.scss';

type Props = {
  data: string;
  className?: string;
};

export default function InnerHtml({ data, className }: Props) {
  const [_data, setData] = useState(data);
  useEffect(() => {
    setData(data);
  }, [data]);

  const cx = classNames(className, styles.container);
  return <div className={cx} dangerouslySetInnerHTML={{ __html: _data }} />;
}
