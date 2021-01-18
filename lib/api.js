import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import slugify from 'slugify';

const createSlug = (text) => slugify(text, { lower: true });

const postDirectory = path.join(process.cwd(), '_posts');
const postFullPath = (fileName) => path.join(postDirectory, fileName);

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

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postDirectory);
  const allPostData = fileNames.map((fileName) => {
    const id = fileName;

    // Read markdown as string
    const fullPath = postFullPath(fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContent);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      slug: createSlug(matterResult.data.title),
    };
  });

  return allPostData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

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
  const content  = processedContent.toString();
  return {
    slug,
    content,
    ...matterResult.data,
  };
}
