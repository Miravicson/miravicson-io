import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';
import _ from 'lodash';
import { useTheme } from 'next-themes';

if (global.window) {
  window._ = _;
}

export interface IContainerBlockState {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
}

export const ContainerBlockContext = React.createContext<{
  setMeta(value: IContainerBlockState): void;
}>({
  setMeta() {},
});

export function useSetMeta(meta: IContainerBlockState): void {
  const { setMeta } = React.useContext(ContainerBlockContext);
  React.useEffect(() => {
    setMeta(meta);
  }, [meta, setMeta]);
}
export const defaultMeta = {
  title: 'Victor Ughonu - Developer, AI Engineer, Programmer, Writer',
  description: `I've been developing websites for 6 years straight. Get in touch with me to know more.`,
  image: '/img/victor-ughonu.jpg',
  type: 'website',
};

export default function ContainerBlock({ children }) {
  const router = useRouter();
  const { theme } = useTheme();
  const pathRef = React.useRef('/');
  const [meta, metaSet] = React.useState<IContainerBlockState>(defaultMeta);

  const setMeta = (metaObject: IContainerBlockState) => {
    if (pathRef.current !== router.asPath) {
      metaSet((defaultMeta) => ({ ...defaultMeta, ...metaObject }));
      pathRef.current = router.asPath;
    }
  };

  return (
    <main className="w-full max-w-[1100px] mx-auto flex flex-col min-h-[100vh]">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="keywords"
          content="Victor Ughonu, victor chiagozie ughonu, miravicson, Full-Stack Developer Artificial Intelligence Developer, Intel AI Innovator, Intel AI Ambassador"
        />
        <meta
          name="author"
          content="victor ughonu, https://www.miravicson.com"
        />
        <meta
          name="theme-color"
          content={theme === 'light' ? '#fff' : '#161616'}
        />
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
      <ContainerBlockContext.Provider value={{ setMeta }}>
        {children}
      </ContainerBlockContext.Provider>
      <Footer className={`mt-auto`} />
    </main>
  );
}
