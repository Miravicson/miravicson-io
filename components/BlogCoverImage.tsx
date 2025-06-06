import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

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
    <Image src={src} alt={`Cover Image for ${title}`} className={cn('shadow-sm', {
      'hover:shadow-md transition-shadow duration-200': slug,
    })}  width={width}
    height={height}  />
  )
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
