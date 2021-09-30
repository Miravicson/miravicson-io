import App from "next/app";
import Layout from "../components/layout";
import "../styles/main.scss";
import { wrapper } from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default wrapper.withRedux(MyApp);
