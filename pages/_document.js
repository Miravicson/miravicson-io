import Document, { Html, Head, Main, NextScript } from "next/document";
import ogImage from "../img/background4.jpg";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="keywords"
            content="Victor Ughonu, Artificial Intelligence Developer, Intel AI Innovator, Intel AI Ambassador"
          />
          <meta
            name="description"
            content="Victor Ughonu's Profile Page. This is where Victor discusses topical technologies and shares his insights, opinions and stories regarding, but not limited to, software development, his interest in music, items that influenced him, amazing experience and religion."
          />
          <meta name="robots" content="index,follow" />
          <meta
            name="author"
            content="victor ughonu, https://github.com/miravicson"
          />
          <meta property="og:site_name" content="miravicson" />
          <meta
            property="og:title"
            content="Miravicson -- The online habitat for Victor Ughonu"
          />
          <meta property="og:url" content="" />
          <meta property="og:image" content={ogImage} />
          <meta
            property="og:description"
            content="Victor Ughonu's Profile Page. This is where Victor discusses topical technologies and shares his insights, opinions and stories regarding, but not limited to, software development, his interest in music, items that influenced him, amazing experience and religion."
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content="" />
          <meta name="twitter:description" content="" />
          <meta name="twitter:image" content="" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="theme-color" content="#fff" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&family=Josefin+Sans:wght@100;400&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Roboto:300,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,700|Prata" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lora:400,700|Montserrat:300" rel="stylesheet" /> */}
          <link href="https://fonts.googleapis.com/css?family=Chivo:300,700|Playfair+Display:700i" rel="stylesheet"/>
          <link rel="alternate" href="" hrefLang="en" />
          <link rel="alternate" href="" hrefLang="fr" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/png" href="" sizes="16x16" />
          <link rel="icon" type="image/png" href="" sizes="32x32" />
          <link rel="apple-touch-icon" href="" />
          <link rel="apple-touch-icon" sizes="180x180" href="" />
          <link rel="mask-icon" href="" color="#fff" />
          <link rel="shortcut icon" href="" />
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
