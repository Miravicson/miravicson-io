import { compileMDX } from "next-mdx-remote/rsc";

import SyntaxHighlighter from "react-syntax-highlighter";
import ArticleParagraph from "../components/article-paragraph";
import ArticleHeader from "../components/article-header";
import ArticleBullet from "../components/article-bullet";
import ArticleHighlight from "../components/article-highlight";
import ArticleImage from "../components/article-image";
import ArticleOrderedList from "../components/article-ordered-list";

export async function MDX({ content }: { content: string }) {
  const compiled = await compileMDX({
    source: content,
    components: {
      SyntaxHighlighter,
      ArticleParagraph,
      ArticleHeader,
      ArticleBullet,
      ArticleHighlight,
      ArticleImage,
      ArticleOrderedList,
    },
  });

  return <>{compiled.content}</>;
}
