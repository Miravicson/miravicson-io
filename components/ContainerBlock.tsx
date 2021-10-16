import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';

export interface IContainerBlockState {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
}

const defaultMeta = {
  title: 'Victor Ughonu - Developer, AI Engineer, Programmer, Writer',
  description: `I've been developing websites for 6 years straight. Get in touch with me to know more.`,
  image: '/img/victor-ughonu.jpg',
  type: 'website',
};

export const ContainerBlockContext = React.createContext<{
  meta: IContainerBlockState;
  setMeta(value: IContainerBlockState): void;
}>({
  meta: defaultMeta,
  setMeta() {},
});

export function useContainerBlock() {
  return React.useContext(ContainerBlockContext);
}

export function useSetMeta(meta: IContainerBlockState): void {
  const { setMeta } = useContainerBlock();
  React.useEffect(() => {
    setMeta(meta);
  }, [meta, setMeta]);
}

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();
  const [meta, metaSet] = React.useState<IContainerBlockState>(defaultMeta);

  const setMeta = React.useCallback((metaObject: IContainerBlockState) => {
    metaSet((defaultMeta) => ({ ...defaultMeta, ...metaObject }));
  }, []);
  const contextValue = React.useMemo(
    () => ({ meta, setMeta }),
    [meta, setMeta]
  );

  return (
    <main className="w-full max-w-[1100px] mx-auto">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://miravicson.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://miravicson.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Victor Ughonu" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@miravicson" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta?.date && (
          <meta property="article:published_time" content={meta?.date} />
        )}
      </Head>

      <Navbar />
      <ContainerBlockContext.Provider value={contextValue}>
        {children}
      </ContainerBlockContext.Provider>
      <Footer />
    </main>
  );
}
