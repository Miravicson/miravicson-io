import React, { ReactElement } from 'react';

interface Props {
  list: React.ReactNode[];
}

export default function ArticleOrderedList({ list }: Props): ReactElement {
  return (
    <ol
      className={`list-disc article-bullet my-[1.5rem] leading-[1.9] text-[1.125rem] m-0 text-paragraph-text-color dark:text-d-paragraph-text-color pl-[1.5rem]`}
    >
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
}
