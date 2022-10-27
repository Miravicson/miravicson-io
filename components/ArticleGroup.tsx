import { IArticle } from '@constants/articles';
import React, { ReactElement } from 'react';
import ReadMoreButton from './ReadMoreButton';
import SubDuedHeader from './SubDuedHeader';
import orderBy from 'lodash/orderBy';
import groupBy from 'lodash/groupBy';
import Link from 'next/link';
import { compareDesc } from 'date-fns';

interface Props {
  articles: Omit<IArticle, 'body'>[];
}

function ArticleCardContainer({
  children,
  articles,
}: {
  children(value: Omit<IArticle, 'body'>[]): React.ReactElement[];
  articles: Omit<IArticle, 'body'>[];
}) {
  const sortedArticles = articles.sort((article1, article2) =>
    compareDesc(new Date(article1.date), new Date(article2.date))
  );
  return (
    <div
      className={`grid grid-cols-articles-card-container gap-[2rem] bmd:gap-[4rem]`}
    >
      {children(sortedArticles)}
    </div>
  );
}

function ArticleCard({ title, excerpt }: Omit<IArticle, 'body'>) {
  return (
    <div className={`group`}>
      <h2 className={`text-[1.125rem] font-medium leading-[1.4em] mb-[0.5em]`}>
        {title}
      </h2>
      <p
        className={`line-clamp-3 text-[0.9375rem] opacity-[0.75] leading-[1.6em] m-0 text-paragraph-text-color dark:text-d-paragraph-text-color`}
      >
        {excerpt}
      </p>
      <ReadMoreButton className={`mt-[1rem]`} />
    </div>
  );
}

function ArticlesByYearSection({
  articleByYear,
}: {
  articleByYear: [string, Omit<IArticle, 'body'>[]];
}) {
  return (
    <div
      className={`relative pt-[3rem] pb-[4rem] bmd:pt-[8rem]`}
      key={articleByYear[0]}
    >
      <SubDuedHeader
        className={`absolute right-0 top-[-1.25rem] sm:top-[-2.1875rem] text-[6rem] xxs:text-[6rem] xs:text-[6rem] sm:text-[6rem] md:text-[15rem] bmd:text-[15rem] lg:text-[15rem] z-[-1]`}
      >
        {articleByYear[0]}
      </SubDuedHeader>

      <ArticleCardContainer articles={articleByYear[1]}>
        {(articles: Omit<IArticle, 'body'>[]) => {
          return articles.map((article) => {
            return (
              <Link key={article.slug} href={`/articles/${article.slug}`}>
                <a>
                  <ArticleCard key={article.slug} {...article} />
                </a>
              </Link>
            );
          });
        }}
      </ArticleCardContainer>
    </div>
  );
}

function ArticleGroup({ articles }: Props): ReactElement {
  let groupedArticles = groupBy(articles, (article: IArticle) =>
    new Date(article.date).getFullYear()
  );

  let groupedArticlesByYear: [string, [Omit<IArticle, "body">, ...Omit<IArticle, "body">[]]][] = orderBy(
    Object.entries(groupedArticles),
    [(articleEntry) => articleEntry[0]],
    ['desc']
  );

  return (
    <section className={`space-y-4`}>
      {groupedArticlesByYear.map((articleByYear) => {
        return (
          <ArticlesByYearSection
            articleByYear={articleByYear}
            key={articleByYear[0]}
          />
        );
      })}
    </section>
  );
}

export default ArticleGroup;
