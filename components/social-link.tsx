import React, { ReactElement } from "react";

interface Props {
  link: string;
  name: string;
}

function SocialLink({ link, name }: Props): ReactElement {
  return (
    <div className="flex flex-row items-center justify-start">
      <a href={link} className="flex flex-row items-center space-x-4 group">
        <div className="my-4">&rarr;</div>
        <div className="relative overflow-hidden font-mono text-lg text-gray-500 dark:text-gray-300">
          <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
          {name}
        </div>
      </a>
    </div>
  );
}

export default SocialLink;
