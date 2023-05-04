import dynamic from 'next/dynamic';

type LayoutType = 'default' | 'account';
type AddionalPropsType = {
  header: { web: boolean; mobile: boolean };
  footer: { web: boolean; mobile: boolean };
};

const Layout = dynamic(() => import('./Layout'));

export default function withLayout(layoutType: LayoutType, AddionalProps: AddionalPropsType = { header: { web: true, mobile: true }, footer: { web: true, mobile: true } }) {
  const getGeneric = (layoutType: LayoutType, page: React.ReactElement) => {
    if (layoutType === 'account') return <div>{page}</div>;
    else return <>{page}</>;
  };

  return function getLayout(page: React.ReactElement) {
    return (
      <Layout header={AddionalProps.header} footer={AddionalProps.footer}>
        {getGeneric(layoutType, page)}
      </Layout>
    );
  };
}
