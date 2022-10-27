import React from 'react';
import userData from '@constants/data';
import { defaultMeta, useSetMeta } from './ContainerBlock';
import Image from 'next/image';

export default function Projects() {
  useSetMeta(defaultMeta);
  return (
    <section className={`min-h-[calc(95vh-364px)]`}>
      <div className="grid max-w-6xl grid-cols-1 gap-8 pb-40 mx-auto md:grid-cols-2">
        {userData.projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            title={proj.title}
            link={proj.link}
            imgUrl={proj.imgUrl}
            number={`${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="block w-full shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="object-cover h-72">
          <Image
            src={imgUrl}
            className="object-cover w-full h-full transition ease-out transform hover:scale-125 duration-2000"
            alt="portfolio"
            width="1600"
            height="1000"
          />
        </div>
        <h1 className="absolute px-2 text-xl font-bold bg-red-500 rounded-md top-10 left-10 text-gray-50">
          {title}
        </h1>
        <h1 className="absolute p-2 text-xl font-bold opacity-50 rounded-xl bottom-10 left-10 text-gray-50 bg-d-top-background-color">
          {number.length === 1 ? '0' + number : number}
        </h1>
      </div>
    </a>
  );
};
