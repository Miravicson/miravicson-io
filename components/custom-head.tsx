import userData from "@/lib/data/data";
import { useTheme } from "next-themes";
import Head from "next/head";
import { useRouter } from "next/router";

export interface ISEOBlockState {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
}

type Props = {
  seoData: ISEOBlockState;
};

function CustomHead({ seoData }: Props) {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <Head>
      <title>{seoData.title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="keywords" content={userData.SEO.keywords} />
      <meta name="author" content={userData.SEO.author} />
      <meta
        name="theme-color"
        content={
          theme === "light"
            ? "bg-top-background-color"
            : `bg-d-top-background-color `
        }
      />
      <meta content={seoData.description} name="description" />
      <meta
        property="og:url"
        content={`${userData.SEO.baseUrl}${router.asPath}`}
      />
      <link rel="canonical" href={`${userData.SEO.baseUrl}${router.asPath}`} />
      <meta property="og:type" content={seoData.type} />
      <meta property="og:site_name" content={userData.SEO.ogSiteName} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:image" content={seoData.image} />
      <meta name="twitter:card" content={seoData.image} />
      <meta name="twitter:site" content={userData.SEO.twitterSite} />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={seoData.image} />
      {seoData?.date && (
        <meta property="article:published_time" content={seoData?.date} />
      )}
    </Head>
  );
}

export default CustomHead;
