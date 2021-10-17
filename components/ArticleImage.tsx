import React, { ReactElement } from 'react';

interface Props {
  imageUrl: string;
}

export default function ArticleImage({ imageUrl }: Props): ReactElement {
  return (
    <div className={`mb-[2rem] w-[100vw] relative left-[-1rem] ssm:w-full`}>
      <figure className="w-full">
        <img
          src={imageUrl}
          alt="victor ughonu"
          className="object-cover w-full shadow-lg"
        />
      </figure>
    </div>
  );
}
