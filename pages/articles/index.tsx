import { useSetMeta } from '@components/ContainerBlock';
import { IArticle } from '@constants/articles';
import ArticleGroup from '@components/ArticleGroup';
import Header from '@components/Header';
import { getArticlesPreview } from '@lib/api';

export default function Articles({
  articles,
}: {
  articles: Omit<IArticle, 'body'>[];
}) {
  useSetMeta({
    title: "Victor Ughonu's blog",
    description: `Where Victor Ughonu shares his thoughts about technology, life as and conversations of topical interests.`,
  });
  return (
    <>
      <Header>
        <h1 className={`font-bold leading-[1] text-[1em] m-0`}>Articles</h1>
      </Header>
      <ArticleGroup articles={articles} />
    </>
  );
}

export async function getStaticProps() {
  const articles = await getArticlesPreview();

  return {
    props: {
      articles,
    },
  };
}
