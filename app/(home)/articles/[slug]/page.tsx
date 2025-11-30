import Header from "@/components/header";
import { getAllSlugs, getPost } from "@/lib/posts";
import { format } from "date-fns";
import { MDX } from "./mdx";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Page({ params }: PageProps<'/articles/[slug]'>) {
  const { slug } = await params;
  const { frontMatter, content } = getPost(slug);

  const { title, date } = frontMatter;

  return (
    <>
      <Header className="mb-[2rem]">
        <div className="flex flex-col justify-between ssm:justify-start ssm:grid ssm:grid-cols-article ssm:items-center sm:relative sm:transform sm:translate-y-[-0.5rem] md:translate-y-[-1rem] bmd:translate-y-[-2.5rem]">
          <span className="mb-[0.25rem] text-[1.125rem]">
            {format(new Date(date), "dd.MM.yyyy")}
          </span>
          <h1 className="text-[2.25rem] leading-[1.3] font-medium ssm:justify-self-start">
            {title}
          </h1>
        </div>
      </Header>

      <section className="ssm:grid ssm:grid-cols-article">
        <div className="ssm:col-start-2">
          <article className="prose max-w-none">
            <MDX content={content} />
          </article>
        </div>
      </section>
    </>
  );
}
