import '../styles/globals.scss';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { SessionProvider, signOut } from 'next-auth/react';
import { NextPage } from 'next';
import { ReactElement, ReactNode, useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';

type NextPageWithLayoutAndAuth = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  account?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayoutAndAuth;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    if (pageProps?.session?.status === 401) {
      signOut({ redirect: false });
    }
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>{t('beginner')}</title>
      </Head>
      <SessionProvider key={router.locale} session={pageProps.session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </>
  );
}

export default appWithTranslation(App);
