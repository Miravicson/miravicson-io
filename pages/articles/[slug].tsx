import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Header from '@components/Header';
import { format } from 'date-fns';
import dynamic from 'next/dynamic';
import { getFrontMatterAndContent, getPostStaticPaths } from '@lib/api';

const components = {
  SyntaxHighlighter,
  Button: dynamic(() => import('../../components/Button')),
  ArticleParagraph: dynamic(() => import('../../components/ArticleParagraph')),
  ArticleHeader: dynamic(() => import('../../components/ArticleHeader')),
  ArticleBullet: dynamic(() => import('../../components/ArticleBullet')),
  ArticleHighlight: dynamic(() => import('../../components/ArticleHighlight')),
  ArticleImage: dynamic(() => import('../../components/ArticleImage')),
  ArticleOrderedList: dynamic(
    () => import('../../components/ArticleOrderedList')
  ),
};

export default function ArticleDetail({ frontMatter, mdxSource }) {
  const { title, date } = frontMatter;
  return (
    <>
      <Header className={`mb-[2rem]`}>
        <div
          className={`flex flex-col justify-between ssm:justify-start ssm:grid ssm:grid-cols-article ssm:items-center sm:relative sm:transform sm:translate-y-[-0.5rem] md:translate-y-[-1rem] bmd:translate-y-[-2.5rem]`}
        >
          <span className={`mb-[0.25rem] text-[1.125rem]`}>
            {format(new Date(date), 'dd.MM.yyyy')}
          </span>
          <h1
            className={`text-[2.25rem] leading-[1.3] font-medium ssm:justify-self-start`}
          >
            {title}
          </h1>
        </div>
      </Header>
      <section className={`ssm:grid ssm:grid-cols-article`}>
        <div className={`ssm:col-start-2`}>
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </section>
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = getPostStaticPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const { frontMatter, content } = getFrontMatterAndContent(slug);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
