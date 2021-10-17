import React from 'react';
import Link from 'next/link';
import SubDuedHeader from './SubDuedHeader';
import ViewAllButton from './ViewAllButton';

export default function SelectedProjects() {
  return (
    <div>
      <div>
        <header className="relative flex flex-col items-center justify-between md:flex-row">
          <SubDuedHeader>Selected Projects</SubDuedHeader>
          <ViewAllButton
            className={`absolute md:bottom-[1rem] lg:bottom-[6rem] z-[2] right-0 hidden md:flex`}
            as="link"
            link="/projects"
          >
            View All
          </ViewAllButton>
        </header>

        {/* Grid starts here */}
        <div className="grid gap-8 md:grid-cols-3 lg:-mt-8">
          {/* Single card */}
          <a
            href="https://natours-miravicson.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="block w-full col-span-3 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/img/natours.jpg"
                alt="Victor Ughonu natours portfolio"
                className="transition ease-out transform hover:scale-125 duration-2000"
              />
              <h1 className="absolute px-2 text-xl font-bold bg-red-500 rounded-md top-10 left-10 text-gray-50">
                Natours
              </h1>
              <h1 className="absolute text-xl font-bold bottom-10 left-10 text-gray-50">
                01
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://nexter-miravicson.netlify.app"
            target="_blank"
            className="block w-full col-span-3 shadow-2xl sm:col-span-2"
            rel="noreferrer"
          >
            <div className="relative overflow-hidden">
              {/* <BlackOverlay /> */}
              <img
                src="/img/nexter.jpg"
                alt="portfolio"
                className="transition ease-out transform hover:scale-125 duration-2000"
              />
              <h1 className="absolute px-2 text-xl font-bold bg-red-500 rounded-md top-10 left-10 text-gray-50">
                Nexter
              </h1>
              <h1 className="absolute text-xl font-bold bottom-10 left-10 text-gray-50">
                02
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://mallbly.com"
            target="_blank"
            className="block object-cover w-full col-span-3 sm:col-span-1"
            rel="noreferrer"
          >
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src="/img/mallbly.jpg"
                alt="Mallbly"
                className="object-cover transition ease-out transform shadow-2xl hover:scale-125 duration-2000"
              />
              <h1 className="absolute px-2 text-xl font-bold bg-red-500 rounded-md top-10 left-10 text-gray-50">
                Mallbly
              </h1>
              <h1 className="absolute text-xl font-bold bottom-10 left-10 text-gray-50">
                03
              </h1>
            </div>
          </a>
        </div>
        <ViewAllButton
          className={`mt-[2rem] md:hidden`}
          as="link"
          link="/projects"
        >
          View All
        </ViewAllButton>
      </div>
    </div>
  );
}
