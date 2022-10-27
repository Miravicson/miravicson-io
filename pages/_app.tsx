import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import SEOProvider from '@components/SEOProvider';
import Layout from '@components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <SEOProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SEOProvider>
    </ThemeProvider>
  );
}

export default MyApp;
