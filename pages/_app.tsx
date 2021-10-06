import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { wrapper } from '@store';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
// export default MyApp;
