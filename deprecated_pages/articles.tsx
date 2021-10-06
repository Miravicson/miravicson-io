import { connect } from 'react-redux';
import Header from '@components/BlogHeader';
import BlogLists from '@components/BlogList';
import { getSortedPostsData } from '../lib/api';
import ContainerBlock from '@components/ContainerBlock';

function Articles({ name, message, allPostData }) {
  return (
    <ContainerBlock
      title="Victor Ughonu's blog"
      description="Where Victor Ughonu shares his thoughts about technology, life as and conversations of topical interests."
    >
      <Header />
      <BlogLists posts={allPostData} />
    </ContainerBlock>
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

export default connect(mapStateToProps)(Articles);
