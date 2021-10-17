import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import ContainerBlock from '@components/ContainerBlock';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <ContainerBlock>
        <Component {...pageProps} />
      </ContainerBlock>
    </ThemeProvider>
  );
}

export default MyApp;
