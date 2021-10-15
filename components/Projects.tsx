import React from 'react';
import userData from '@constants/data';

export default function Projects() {
  return (
    <section className={`py-10 min-h-[calc(95vh-364px)]`}>
      <h1 className="max-w-lg text-6xl font-bold  self-start lg:text-9xl md:my-0 text-subdued-elements-color dark:text-d-subdued-elements-color leading-[1] mb-[-3rem]">
        Coming Soon...
      </h1>
    </section>
    // <section>
    //   {/* Grid starts here */}
    //   <div className="grid max-w-6xl grid-cols-1 gap-8 py-20 pb-40 mx-auto md:grid-cols-2">
    //     {userData.projects.map((proj, idx) => (
    //       <ProjectCard
    //         key={idx}
    //         title={proj.title}
    //         link={proj.link}
    //         imgUrl={proj.imgUrl}
    //         number={`${idx + 1}`}
    //       />
    //     ))}
    //   </div>
    // </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="block w-full shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="object-cover h-72">
          <img
            src={imgUrl}
            alt="portfolio"
            className="object-cover w-full h-full transition ease-out transform hover:scale-125 duration-2000"
          />
        </div>
        <h1 className="absolute px-2 text-xl font-bold bg-red-500 rounded-md top-10 left-10 text-gray-50">
          {title}
        </h1>
        <h1 className="absolute text-xl font-bold bottom-10 left-10 text-gray-50">
          {number.length === 1 ? '0' + number : number}
        </h1>
      </div>
    </a>
  );
};
