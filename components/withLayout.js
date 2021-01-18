import React from "react";
import Layout from "./layout";

function withLayout(Component) {
  return function DecoratedComponent(props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
}

export default withLayout;
