const path = require('path');
const fs = require('fs');

let currentPage = 0;
const maxPage = 10;

let interval;

const stopInterval = () => {
  clearInterval(interval);
  console.log(`stopping the interval`);
};

const postDirectory = path.join(process.cwd(), 'posts');
const samplePage = fs.readFileSync(
  path.join(postDirectory, 'toefl-to-blogger', 'toefl-to-blogger.md'),
  'utf8'
);

const createFileFromSample = () => {
  const fileDirectory = `${Date.now()}`;
  const fileName = `${fileDirectory}.md`;
  const completePath = path.join(postDirectory, fileDirectory, fileName);
  console.log('Generating page: ', completePath);
  fs.mkdirSync(path.join(postDirectory, fileDirectory));
  fs.writeFileSync(completePath, samplePage);
};

module.exports = generateNewPages = () => {
  // interval = setInterval(() => {
  //   createFileFromSample();
  //   currentPage += 1;
  //   if (currentPage >= maxPage) {
  //     stopInterval();
  //   }
  // }, 10000);
};
