import React from 'react';
import Image from 'next/image';

type Props = {
  selectedProject: {
    coverImage: string;
    link: string;
    title: string;
  };
  index: number;
  imageClassName?: string;
  wrapperClassName?: string;
};

const SelectedProjectCard = ({
  selectedProject,
  index,
  imageClassName,
  wrapperClassName,
}: Props) => {
  return (
    <a
      href={selectedProject.link}
      target="_blank"
      rel="noreferrer"
      className={`${wrapperClassName}`}
    >
      <div className="relative overflow-hidden">
        <Image
          src={selectedProject.coverImage}
          alt="Victor Ughonu natours portfolio"
          className={`object-cover transition ease-out transform hover:scale-125 duration-2000 ${imageClassName}`}
          width="3000"
          height="1687"
        />
        <h1 className="absolute px-2 text-xl font-bold bg-red-500 rounded-md top-10 left-10 text-gray-50">
          {selectedProject.title}
        </h1>
        <h1 className="absolute text-xl font-bold bottom-10 left-10 text-gray-50">
          {`${index}`.padStart(2, '0')}
        </h1>
      </div>
    </a>
  );
};

export default SelectedProjectCard;
