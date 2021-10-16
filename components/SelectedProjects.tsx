import React from 'react';
import Link from 'next/link';
import SubDuedHeader from './SubDuedHeader';

export default function SelectedProjects() {
  return (
    <div>
      <div>
        <header className="flex flex-col items-center justify-between md:flex-row ">
          <SubDuedHeader>Selected Projects</SubDuedHeader>
        </header>

        {/* Grid starts here */}
        <div className="grid gap-8 pb-40 md:grid-cols-3 lg:-mt-8">
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
          <Link href="/projects">
            <a className="flex flex-row items-center px-8 py-4 mb-20 space-x-4 text-xl font-semibold bg-white rounded-md shadow-lg md:mb-0 dark:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-up-right-square"
                stroke="4"
                strokeWidth="4"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                />
              </svg>
              <p>View all</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
