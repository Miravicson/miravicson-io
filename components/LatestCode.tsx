import React, { useEffect, useState } from 'react';
import userData from '@constants/data';
import SubDuedHeader from './SubDuedHeader';
import ViewAllButton from './ViewAllButton';
// import getLatestRepos from '@lib/getLatestRepos';
export default function LatestCode({ repositories }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    setRepos(repositories);
  }, [repositories]);
  return (
    <section className="pb-40 mt-[4rem]">
      <header className={`relative z-[-1]`}>
        <SubDuedHeader>Latest Code</SubDuedHeader>
      </header>

      <div className="relative grid max-w-6xl grid-cols-1 gap-8 px-10 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:-mt-10 gap-y-20">
        <ViewAllButton
          className={`absolute md:top-[-5rem]  lg:top-[-7rem] right-0 hidden md:flex`}
          as="link"
          link={`https://github.com/${userData.githubUsername}`}
        >
          View GitHub
        </ViewAllButton>
        {repos &&
          repos.map((latestRepo, idx) => (
            <GithubRepoCard latestRepo={latestRepo} key={idx} />
          ))}
      </div>
      <ViewAllButton
        className={`mt-[2rem] md:hidden`}
        as="link"
        link={`https://github.com/${userData.githubUsername}`}
      >
        View GitHub
      </ViewAllButton>
    </section>
  );
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className="github-repo">
      <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
        {latestRepo.name}
      </h1>
      <p className="my-4 text-base font-normal text-gray-500">
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.clone_url}
        className="flex flex-row items-center w-full space-x-2 font-semibold group"
      >
        <p>View Repository </p>
        <div className="transition duration-300 transform group-hover:translate-x-2">
          &rarr;
        </div>
      </a>
    </div>
  );
};
