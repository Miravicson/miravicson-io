import Link from 'next/link'
import SearchBlog from './search-blog';
import styles from '../styles/Blog.module.scss';

const Header = () => {
  return (
    <div className={styles.BlogHeader}>
      <h1 className="text-5xl md:text-5xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 mt-8">Victor Ughonu's Blog</h1>
      {/* <p className="mb-5">
        You can <span>subscribe</span> to my new posts if you want to
      </p> */}
      {/* <SearchBlog /> */}
    </div>
  );
};

export default Header;

