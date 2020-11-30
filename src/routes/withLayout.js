import React from "react";
import Layout from "./Layout";

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
