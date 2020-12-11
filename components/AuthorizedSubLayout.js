import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Home } from "../pages/home/Home";
import { ProductsSubLayout } from "../pages/product/ProductsSubLayout";
import { UserSubLayout } from "../pages/user/UserSubLayout";
import withLayout from "./withLayout";


function PrimaryLayout(props) {
  return (
    <Switch>
      <Route path={`${props.match.path}`} exact component={Home} />
      <Route path={`${props.match.path}/users`} component={UserSubLayout} />
      <Route
        path={`${props.match.path}/products`}
        component={ProductsSubLayout}
      />
      <Redirect to="/" />
    </Switch>
  );
}


export default withLayout(PrimaryLayout);