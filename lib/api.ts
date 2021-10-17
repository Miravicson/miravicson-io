import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IArticle } from '@constants/articles';

import remark from 'remark';
import html from 'remark-html';
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

// export function getSortedPostsData() {
//   const fileNames = fs.readdirSync(postDirectory);
//   const allPostData = fileNames.map((fileName) => {
//     const id = fileName;

//     // Read markdown as string
//     const fullPath = postFullPath(fileName);
//     const fileContent = fs.readFileSync(fullPath, 'utf8');

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContent);

//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data,
//       slug: createSlug(matterResult.data.title),
//     };
//   });

//   return allPostData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postDirectory);
  return fileNames.map((fileName) => {
    const fullPath = postFullPath(fileName);
    const slug = createSlug(
      matter(fs.readFileSync(fullPath, 'utf8')).data.title
    );
    return {
      params: {
        slug,
      },
    };
  });
}

export async function getPostData(slug) {
  const fullPath = slugToFileName[slug];
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const content = processedContent.toString();
  return {
    slug,
    content,
    ...matterResult.data,
  };
}
