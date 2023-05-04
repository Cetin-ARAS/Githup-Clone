import React from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

type Props = {
  children: React.ReactNode;
  content?: string | null;
};

export function ToolTip({ children, content }: Props) {
  const id = String(Math.floor(Math.random() * Date.now()));

  return (
    <>
      <a data-tooltip-position-strategy="fixed" data-tooltip-id={id} data-tooltip-content={content || ''}>
        {children}
      </a>
      {content && <Tooltip float id={id} content={content} />}
    </>
  );
}
