import { connect } from 'react-redux';
import Header from '@components/BlogHeader';
import BlogLists from '../components/BlogList';
import CustomHead from '../components/deprecated/custom-head';
import { getSortedPostsData } from '../lib/api';

function Blog({ name, message, allPostData }) {
  return (
    <section className={`h-full min-w-full`}>
      <CustomHead
        title="Victor Ughonu's blog"
        description="Where Victor Ughonu shares his thoughts about technology, life as and conversations of topical interests."
      />
      <Header />
      <BlogLists posts={allPostData} />
    </section>
  );
}

function mapStateToProps({ blog }) {
  return {
    name: blog.name,
    message: blog.message,
  };
}

export async function getStaticProps() {
  const allPostData = getSortedPostsData();
  return {
    props: {
      allPostData,
    },
  };
}

export default connect(mapStateToProps)(Blog);
