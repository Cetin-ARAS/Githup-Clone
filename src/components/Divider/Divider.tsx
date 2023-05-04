import React from 'react';

type Props = {
  bg?: string;
  height?: number;
  marginTop?: number;
  marginBottom?: number;
};

export default function Divider({ bg = '#3E3E3E', height = 0.1, marginBottom = 0, marginTop = 0 }: Props) {
  return <div style={{ backgroundColor: bg, height: `${height}rem`, marginTop: `${marginTop}rem`, marginBottom: `${marginBottom}rem` }} />;
}
