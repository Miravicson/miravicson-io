import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IArticle } from '@constants/articles';
import slugify from 'slugify';

const postDirectory = path.join(process.cwd(), 'posts');
const postFullPath = (fileName) => path.join(postDirectory, fileName);

export function getArticlesPreview() {
  const files = fs.readdirSync(path.join(postDirectory));
  const articles: Omit<IArticle, 'body'>[] = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(postFullPath(filename));
      const { data: frontMatter } = matter(markdownWithMeta);
      const article: Omit<IArticle, 'body'> = {
        title: frontMatter.title || '',
        excerpt: frontMatter.excerpt || '',
        date: frontMatter.date || '',
        thumbnail: frontMatter.thumbnail || '',
        slug: frontMatter.slug || filename.split('.')[0],
      };
      return article;
    })
    .filter((article) => !!article);
  return articles;
}

export function getPostStaticPaths() {
  const files = fs.readdirSync(path.join(postDirectory));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return paths;
}

export function getFrontMatterAndContent(slug: string) {
  const markdownWithMeta = fs.readFileSync(
    path.join(postDirectory, `${slug}.mdx`),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return { frontMatter, content };
}

const createSlug = (text) => slugify(text, { lower: true });

const slugToFileName = (function slugToNameMap() {
  const map = {};
  const fileNames = fs.readdirSync(postDirectory);
  fileNames.forEach((fileName) => {
    const fullPath = postFullPath(fileName);
    const slug = createSlug(
      matter(fs.readFileSync(fullPath, 'utf8')).data.title
    );
    map[slug] = fullPath;
  });
  return map;
})();
