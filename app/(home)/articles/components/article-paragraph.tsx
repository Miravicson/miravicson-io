import React, { ReactElement } from "react";

interface Props {
  children: React.ReactNode;
}

export default function ArticleParagraph({ children }: Props): ReactElement {
  return (
    <p
      className={`article-paragraph leading-[1.7] text-[1.125rem] m-0 text-paragraph-text-color dark:text-d-paragraph-text-color`}
    >
      {children}
    </p>
  );
}
