import React, { ReactElement } from "react";

interface Props {
  children: React.ReactNode;
}

export default function ArticleHeader({ children }: Props): ReactElement {
  return (
    <h2
      className={`text-[1.125rem] font-medium leading-[1.4em] mt-[2.5em] mb-[0.5em]`}
    >
      {children}
    </h2>
  );
}
