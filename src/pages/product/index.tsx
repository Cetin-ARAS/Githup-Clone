import Link from 'next/link';
import React from 'react';

type Props = {};

function Index({}: Props) {
  return (
    <div>
      <Link href={'/product/12345'}>12345</Link>
    </div>
  );
}

export default Index;
