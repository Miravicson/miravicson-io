import { getArticlesPreview } from "@/lib/posts";
import Header from "@/components/header";
import { IArticle } from "./articles";
import ArticleGroup from "@/components/article-group";

export default async function Articles() {
  // useSetMeta({
  //   title: "Victor Ughonu's blog",
  //   description: `Where Victor Ughonu shares his thoughts about technology, life as and conversations of topical interests.`,
  // });
  "use cache";

  const articles: Omit<IArticle, "body">[] = await getArticlesPreview();
  return (
    <>
      <Header>
        <h1 className={`font-bold leading-[1] text-[1em] m-0`}>Articles</h1>
      </Header>
      <ArticleGroup articles={articles} />
    </>
  );
}
