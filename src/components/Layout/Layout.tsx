import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Router, useRouter } from 'next/router';
import NProgress from '../NProgress/NProgress';
import Header from '../Shared/Header';
import Aside from '../Shared/Aside';
import styles from './Layout.module.scss';

type Props = {
  children: any;
  header: { web: boolean; mobile: boolean };
  footer: { web: boolean; mobile: boolean };
};

export default function Layout({ header, footer, children }: Props) {
  const router = useRouter();
  const [nprogress, setNProgress] = useState(false);

  //nprogress
  useEffect(() => {
    // Router Events NProgress show
    let url = router.pathname;
    Router.events.on('beforeHistoryChange', async (prevUrl: string) => {
      url = prevUrl.split('?')[0];
      setNProgress(false);
    });
    Router.events.on('routeChangeStart', (nextUrl: string) => {
      const _nextUrl = nextUrl.split('?')[0];
      if (url === _nextUrl) return;
      setNProgress(true);
    });

    Router.events.on('routeChangeComplete', () => {
      // NProgress hidden
      setNProgress(false);
    });

    Router.events.on('routeChangeError', () => {
      // NProgress hidden
      setNProgress(false);
    });
  }, [router.pathname]);

  // const getDeviceTypeContent = (type: { web: boolean; mobile: boolean }, children: React.ReactNode) => {
  //   switch (true) {
  //     case ScreenMedium() && type.mobile:
  //       return <>{children}</>;
  //     case ScreenLarge() && type.web:
  //       return <>{children}</>;
  //     default:
  //       return <></>;
  //   }
  // };

  return (
    <>
      <Header />
      {/* <Row col={{ lg: 12, md: 12, sm: 12 }}>
        <Col span={{ lg: 4 }}>aside</Col>
        <Col span={{ lg: 8 }}>
          <main>{children}</main>
        </Col>
      </Row> */}
      <div className={styles.container}>
        <aside className={styles.aside}><Aside /></aside>
        <main className={styles.main}>{children}</main>
      </div>
      {/*  absolute elements */}
      <NProgress open={nprogress} />
      <Toaster position="top-right" />
      {/*  absolute elements */}
    </>
  );
}
