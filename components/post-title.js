export default function PostTitle({ children }) {
  return (
    <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left lg:px-20 lg:py-10">
      {children}
    </h1>
  )
}
