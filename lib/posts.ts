import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { IArticle } from "@/app/(home)/articles/articles";

const POSTS_DIR = path.join(process.cwd(), "public", "posts");
const postFullPath = (fileName: string) => path.join(POSTS_DIR, fileName);

export function getAllSlugs() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPost(slug: string) {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(raw);
  return { content, frontMatter: data };
}

export function getArticlesPreview() {
  const files = fs.readdirSync(path.join(POSTS_DIR));
  const articles: Omit<IArticle, "body">[] = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(postFullPath(filename));
      const { data: frontMatter } = matter(markdownWithMeta);
      const article: Omit<IArticle, "body"> = {
        title: frontMatter.title || "",
        excerpt: frontMatter.excerpt || "",
        date: frontMatter.date || "",
        thumbnail: frontMatter.thumbnail || "",
        slug: frontMatter.slug || filename.split(".")[0],
      };
      return article;
    })
    .filter((article) => !!article);
  return articles;
}

export function getPostStaticPaths() {
  const files = fs.readdirSync(path.join(POSTS_DIR));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return paths;
}

export function getFrontMatterAndContent(slug: string) {
  const markdownWithMeta = fs.readFileSync(
    path.join(POSTS_DIR, `${slug}.mdx`),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return { frontMatter, content };
}
