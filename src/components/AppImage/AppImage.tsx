import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type Props = {
  height?: number;
  width?: number;
  src?: string;
  alt: string;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
};

export default function AppImage({ sizes, fill, className = '', height, width, src = '/', alt, objectFit = 'contain', priority }: Props) {
  return <Image sizes={sizes} fill={fill} priority={priority} className={className} src={src} alt={alt} height={height} width={width} style={{ objectFit: objectFit }} />;
}
