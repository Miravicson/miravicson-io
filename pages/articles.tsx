import { getSortedPostsData } from '../lib/api';
import ContainerBlock from '@components/ContainerBlock';
import { articles as articleItems } from '@constants/articles';
import ArticleList from '@components/ArticleList';
import Header from '@components/Header';

export default function articles({ name, message, articles }) {
  return (
    <ContainerBlock
      title="Victor Ughonu's blog"
      description="Where Victor Ughonu shares his thoughts about technology, life as and conversations of topical interests."
    >
      <Header>
        <h1 className={`font-bold leading-[1] text-[1em] m-0`}>Articles</h1>
      </Header>
      <ArticleList articles={articles} />
    </ContainerBlock>
  );
}

export async function getStaticProps() {
  // const allPostData = getSortedPostsData();

  return {
    props: {
      articles: articleItems,
    },
  };
}
