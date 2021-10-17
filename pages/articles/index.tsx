import { useSetMeta } from '@components/ContainerBlock';
import { IArticle } from '@constants/articles';
import ArticleGroup from '@components/ArticleGroup';
import Header from '@components/Header';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function Articles({ articles }: { articles: Omit<IArticle, 'body'>[] }) {
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
  const files = fs.readdirSync(path.join('posts'));
  const articles: Omit<IArticle, 'body'>[] = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename));
      const { data: frontMatter } = matter(markdownWithMeta);
      const article: Omit<IArticle, 'body'> = {
        title: frontMatter.title || '',
        excerpt: frontMatter.excerpt || '',
        date: frontMatter.date || '',
        thumbnail: frontMatter.thumbnail || '',
        slug: frontMatter.slug || filename.split('.')[0],
      };
      return article;
    })
    .filter((article) => !!article);


  return {
    props: {
      articles,
    },
  };
}
