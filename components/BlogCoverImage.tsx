import cn from 'classnames';
import Link from 'next/link';
import ProgressiveImage from 'react-progressive-image';

interface Props {
  title: string;
  src: string;
  slug?: string;
  height?: number;
  width?: number;
}

export default function BlogCoverImage({
  title,
  src,
  slug,
  height,
  width,
}: Props) {
  const image = (
    <ProgressiveImage src={src} placeholder={src}>
      {(src, loading) => (
        <img
          src={src}
          alt={`Cover Image for ${title}`}
          className={cn('shadow-sm', {
            'hover:shadow-md transition-shadow duration-200': slug,
          })}
          width={width}
          height={height}
        />
      )}
    </ProgressiveImage>
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
         {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
