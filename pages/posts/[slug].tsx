import Head from 'next/head';
import PostBody from '@components/PostBody';
import PostHeader from '@components/PostHeader';
import { getAllPostSlugs, getPostData } from '@lib/api';

export default function Post({ post }) {
  return (
    <section>
      <article className="mb-32">
        <Head>
          <title>{post.title}</title>
          <meta property="og:image" content={post.ogImage.url} />
        </Head>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <PostBody content={post.content} />
      </article>
    </section>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.slug);
  return {
    props: {
      post,
    },
  };
}
