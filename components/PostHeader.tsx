import DateFormatter from '@components/DateFormatter';
import BlogCoverImage from '@components/BlogCoverImage';
import PostTitle from '@components/PostTitle';

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12 md:pl-10"></div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <BlogCoverImage
          title={title}
          src={coverImage}
          height={620}
          width={1240}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6 md:hidden"></div>
        <div className="px-4 mb-6 text-lg md:px-0">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
