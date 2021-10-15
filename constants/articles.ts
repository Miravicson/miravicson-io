export interface IArticle {
  title: string;
  excerpt: string;
  thumbnail?: string;
  date: Date | string;
  coverImage?: string;
  body: string;
  tags?: string[];
}

export type IArticles = IArticle[];
import groupBy from 'lodash/groupBy';

export const articles: IArticles = [
  {
    title: 'Homemade Pizza Cheat Sheet',
    excerpt:
      'I’d like to preface this article by saying I’m by no means an expert on making your own pizza. I just recently started dabbling in making my own dough and these were the tips that helped me the most. I’m both writing this for some friends who asked for my tips, and for past me (to make sure I don’t forget).',
    date: new Date().toISOString(),
    coverImage: '/articles/pizza/pizza.jpg',
    body: `The best pizza dough is in the 70-80% hydration range. Hydration just means the water to flour ratio. Learn more
While you prepare the dough, your hands and even the countertop can suck the moisture out of your dough. Make sure you spray the countertops and your hands frequently. Learn more`,
  },
];

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
