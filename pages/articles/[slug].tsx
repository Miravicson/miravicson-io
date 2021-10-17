import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Header from '@components/Header';
import Button from '@components/Button';
import { format } from 'date-fns';
import ArticleParagraph from '@components/ArticleParagraph';
import ArticleHeader from '@components/ArticleHeader';
import ArticleBullet from '@components/ArticleBullet';
import ArticleHighlight from '@components/ArticleHighlight';
import ArticleImage from '@components/ArticleImage';

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
          <MDXRemote
            {...mdxSource}
            components={{
              Button,
              SyntaxHighlighter,
              ArticleParagraph,
              ArticleHeader,
              ArticleBullet,
              ArticleHighlight,
              ArticleImage,
            }}
          />
        </div>
      </section>
    </>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
