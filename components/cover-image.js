import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import ProgressiveImage from 'react-progressive-image';

export default function CoverImage({ title, src, slug, height, width }) {
  console.log(`Cover image ${src}`);
  const image = (
    <ProgressiveImage src={src} placeholder={src}>
      {(src, loading) => (
        <img
          src={src}
          alt={`Cover Image for ${title}`}
          className={cn('shadow-sm', {
            'hover:shadow-md transition-shadow duration-200': slug,
          })}
          layout="responsive"
          width={width}
          height={height}
        />
      )}
    </ProgressiveImage>
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
