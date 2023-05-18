import { useRouter } from 'next/router';
import React from 'react';


type Props = {};

function Slug({}: Props) {
    
    const router = useRouter() 

    console.log(router)
  return <div>{router.query.slug} ürünü</div>;
}

export default Slug;