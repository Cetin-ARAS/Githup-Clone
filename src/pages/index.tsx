import { IsUserAgentMobile } from '@/lib/util';
import withLayout from '@/components/Layout/WithLayout';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return <>Anasayfa</>;
}

export const getServerSideProps: GetServerSideProps = async ({ locale, req, res }) => {
  const initialLocale = locale || '';
  //get session in server

  return {
    props: {
      platform: IsUserAgentMobile(req) ? 'mobile' : 'web',
      ...(await serverSideTranslations(initialLocale, ['common'])),
    },
  };
};

Home.getLayout = withLayout('default');
