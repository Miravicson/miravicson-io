import React, { ReactElement } from 'react';

interface Props {
  children: string;
}

export default function ArticleHighlight({ children }: Props): ReactElement {
  return (
    <span className={`font-special italic leading-[1.7] text-[1.125rem] `}>
      {children}
    </span>
  );
}
