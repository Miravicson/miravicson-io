import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Home } from "./pages/home";
import { Blog } from "./pages/blog";
import { Shop } from "pages/shop";
import { About } from "pages/about";
import { Work } from "pages/work";
import Layout from "routes/Layout";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/about" component={About} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/work" component={Work} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
