import React from 'react';
import PropTypes from 'prop-types';
import blogData from '../data/dummy-blog';
import styles from '../styles/Blog.module.scss';
import Link from 'next/link';

const BlogItem = ({ post }) => {
  return (
    <div className={styles.BlogItem}>
      <Link href={`/posts/${post.slug}`}>
        <a className="link-special">
          <p>{post.title}</p>
        </a>
      </Link>
    </div>
  );
};

BlogItem.propTypes = {
  post: PropTypes.object.isRequired,
};

const BlogLists = ({ posts }) => {
  return (
    <div className={styles.BlogLists}>
      {posts.map((post) => (
        <BlogItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default BlogLists;
