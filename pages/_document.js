import Document, { Html, Head, Main, NextScript } from "next/document";
import ogImage from "../img/victor-ughonu-banner.jpg";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Normal Metas */}
          <meta
            name="keywords"
            content="Victor Ughonu, victor chiagozie ughonu, miravicson, Full-Stack Developer Artificial Intelligence Developer, Intel AI Innovator, Intel AI Ambassador"
          />
          <meta name="description" content="Website for Victor Ughonu." />
          <meta name="robots" content="index,follow" />
          <meta
            name="author"
            content="victor ughonu, https://www.miravicson.com"
          />
          <meta name="theme-color" content="#fff" />

          {/* OG Metas */}
          <meta property="og:site_name" content="Miravicson" />
          <meta
            property="og:title"
            content="Miravicson -- The online habitat for Victor Ughonu"
          />
          <meta property="og:url" content="https://www.miravicson.com" />
          <meta property="og:image" content={ogImage} />
          <meta
            property="og:description"
            content="Website for Victor Ughonu. Where he writes, shares his work experience and sells some merch."
          />
          <meta property="og:type" content="website" />

          {/* Twitter Metas */}
          <meta
            name="twitter:title"
            content="Miravicson -- The online habitat for Victor Ughonu"
          />
          <meta
            name="twitter:description"
            content="Website for Victor Ughonu. Where he writes, shares his work experience and sells some merch."
          />
          <meta name="twitter:image" content={ogImage} />
          <meta name="twitter:card" content={ogImage} />

          {/* Links */}

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css?family=Chivo:300,700|Playfair+Display:700i"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/png" href="" sizes="16x16" />
          <link rel="icon" type="image/png" href="" sizes="32x32" />
          <link rel="apple-touch-icon" href="" />
          <link rel="apple-touch-icon" sizes="180x180" href="" />
          <link rel="mask-icon" href="" color="#fff" />
          <link rel="shortcut icon" href="" />

          {/* <link rel="alternate" href="" hrefLang="en" />
          <link rel="alternate" href="" hrefLang="fr" /> */}
          {/* <link
            href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&family=Josefin+Sans:wght@100;400&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Roboto:300,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,700|Prata" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lora:400,700|Montserrat:300" rel="stylesheet" /> */}
          {/* <meta
            name="description"
            content="Victor Ughonu's Profile Page. This is where Victor discusses topical technologies and shares his insights, opinions and stories regarding, but not limited to, software development, his interest in music, items that influenced him, amazing experience and religion."
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
