import React, { ReactElement } from "react";
import Image from "next/image";

interface Props {
  imageUrl: string;
  alt: string;
}

export default function ArticleImage({ imageUrl, alt }: Props): ReactElement {
  return (
    <div className={`mb-[2rem] w-[100vw] relative left-[-1rem] ssm:w-full`}>
      <figure className="w-full">
        <Image src={imageUrl} alt={alt} width="5000" height="4000" />
      </figure>
    </div>
  );
}
