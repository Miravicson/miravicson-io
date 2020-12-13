import { connect } from "react-redux";
import ComingSoon from "../components/ComingSoon";
import CustomHead from "../components/CustomHead";


function Blog({ name, message }) {
  return (
    <section className="blog">
      <CustomHead title="Blog" description="Where Victor Ughonu shares his thoughts about technology, life as and conversations of topical interests." />
      <ComingSoon title="blog" />
    </section>
  );
}

function mapStateToProps({ blog }) {
  return {
    name: blog.name,
    message: blog.message,
  };
}

export default connect(mapStateToProps)(Blog);
