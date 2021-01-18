import { connect } from 'react-redux';
// import Header from '../components/BlogHeader';
import Header from '../components/header';
import BlogLists from '../components/blog-list';
import ComingSoon from '../components/coming-soon';
import CustomHead from '../components/custom-head';
import { getSortedPostsData } from '../lib/api';
import styles from '../styles/Blog.module.scss';

function Blog({ name, message, allPostData }) {
  return (
    <section className={styles.Blog}>
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
