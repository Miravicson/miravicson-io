import React from "react";
import { useRouter } from "next/router";
// import {useRouter} from 'next/navigation';
import userData from "@/lib/data/data";
import CustomHead from "./custom-head";

export interface ISEOBlockState {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
}

export const SEOBlockContext = React.createContext<{
  setSEO(value: ISEOBlockState): void;
}>({
  setSEO() {},
});

export function useSetMeta(meta: ISEOBlockState): void {
  const { setSEO } = React.useContext(SEOBlockContext);
  React.useEffect(() => {
    setSEO(meta);
  }, [meta, setSEO]);
}

export const defaultMeta = userData.SEO.summary;

export default function SEOProvider({ children }: React.PropsWithChildren) {
  const router = useRouter();
  const pathRef = React.useRef("/");
  const [meta, metaSet] = React.useState<ISEOBlockState>(defaultMeta);

  const setSEO = (metaObject: ISEOBlockState) => {
    if (pathRef.current !== router.asPath) {
      metaSet((defaultMeta) => ({ ...defaultMeta, ...metaObject }));
      pathRef.current = router.asPath;
    }
  };

  return (
    <>
      <CustomHead seoData={meta} />
      <SEOBlockContext.Provider value={{ setSEO }}>
        {children}
      </SEOBlockContext.Provider>
    </>
  );
}
