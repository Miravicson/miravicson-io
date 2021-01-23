import cn from 'classnames';

export default function PostTitle({ children }) {
  return (
    <h1
      className={cn(
        'header-text',
        'text-5xl md:text-4xl lg:text-6xl px-8 md:px-8 pt-10 font-lighter tracking-tighter leading-tight md:leading-none mb-10 text-center md:text-left md:py-15  lg:py-10'
      )}
    >
      {children}
    </h1>
  );
}
