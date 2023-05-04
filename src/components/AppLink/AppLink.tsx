import Link from 'next/link';
import React from 'react';

type Props = {
  href: string;
  className?: string;
  children?: React.ReactNode;
  locale?: string | false;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  target?: React.HTMLAttributeAnchorTarget;
};

export default function AppLink({ onClick, href, className = '', locale, children, target }: Props) {
  return (
    <Link onClick={onClick} href={href} locale={locale} className={className} target={target}>
      {children}
    </Link>
  );
}
