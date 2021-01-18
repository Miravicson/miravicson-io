import Document, { Html, Head, Main, NextScript } from 'next/document';

const ogImage = '/img/victor-ughonu-banner-small.jpg';

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
            href="https://fonts.googleapis.com/css2?family=Lato&family=PT+Serif&display=swap"
            rel="stylesheet"
          />
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
