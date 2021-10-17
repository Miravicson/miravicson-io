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
