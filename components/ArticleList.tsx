import {
  ArticleList as ArticleListClass,
  IArticles,
} from '@constants/articles';
import React, { ReactElement } from 'react';
import SubDuedHeader from './SubDuedHeader';

interface Props {
  articles: IArticles;
}

function ArticleList({ articles }: Props): ReactElement {
  const articleList = new ArticleListClass(articles);
  const groupedArticles = articleList.groupByYear();
  return (
    <section className={`min-h-[calc(95vh-364px)]`}>
      <SubDuedHeader>
        Coming Soon...
      </SubDuedHeader>
    </section>
  );
}

export default ArticleList;
