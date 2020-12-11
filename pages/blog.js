import Head from "next/head";
import { connect } from "react-redux";
import CustomHead from "../components/CustomHead";
import { wrapper } from "../store";

function Blog({ name, message }) {
  return (
    <section className="blog">
      <CustomHead title="Blog" />
      <h2>The Blog Page</h2>
      <p>{message}</p>
    </section>
  );
}

// export const getStaticProps = wrapper.getStaticProps(({ store, preview }) => {
//   // store.dispatch({});
//   return {
//     props: {
//       name: "hello",
//       message: "hi"
//   }}
// });

function mapStateToProps({ blog }) {
  return {
    name: blog.name,
    message: blog.message,
  };
}

export default connect(mapStateToProps)(Blog);
