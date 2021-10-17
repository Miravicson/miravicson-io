export interface IArticle {
  title: string;
  excerpt: string;
  thumbnail?: string;
  date: Date | string;
  coverImage?: string;
  body?: string;
  tags?: string[];
  slug: string;
}

export type IArticles = IArticle[];
import groupBy from 'lodash/groupBy';

export class ArticleList {
  constructor(private _articles: IArticles) {}
  groupByYear(): Record<string, IArticles> {
    const groupedByYear = groupBy(this._articles, (article: IArticle) =>
      new Date(article.date).getFullYear()
    );
    return groupedByYear;
  }

  get articles(): IArticles {
    return this._articles;
  }
}
