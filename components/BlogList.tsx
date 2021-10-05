import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const BlogItem = ({ post }) => {
  return (
    <div
      className={`py-8 border-b border-[#f7f7f7] text-[2.2rem]`}
    >
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
    <div className={`py-4 px-[3.5rem]`}>
      {posts.map((post) => (
        <BlogItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default BlogLists;
