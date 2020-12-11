import App from "next/app";
import Layout from "../components/Layout";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import "../styles/main.scss";
import makeStore, { wrapper } from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default wrapper.withRedux(MyApp);
