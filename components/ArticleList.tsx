import {
  ArticleList as ArticleListClass,
  IArticles,
} from '@constants/articles';
import React, { ReactElement } from 'react';

interface Props {
  articles: IArticles;
}

function ArticleList({ articles }: Props): ReactElement {
  const articleList = new ArticleListClass(articles);
  const groupedArticles = articleList.groupByYear();
  return (
    <section className={`py-10 min-h-[calc(95vh-364px)]`}>
      <h1 className="max-w-lg text-6xl font-bold  self-start lg:text-9xl md:my-0 text-subdued-elements-color dark:text-d-subdued-elements-color leading-[1] mb-[-3rem]">
        Coming Soon...
      </h1>
    </section>
  );
}

export default ArticleList;
