export default function PostTitle({ children }) {
  return (
    <h1 className="text-5xl md:text-4xl lg:text-7xl px-8 md:px-8 pt-10 font-bold tracking-tighter leading-tight md:leading-none mb-10 text-center md:text-left md:py-15  lg:py-10">
      {children}
    </h1>
  );
}
