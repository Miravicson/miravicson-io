import React from 'react';

import { useSetMeta } from '../components/ContainerBlock';
import SelectedProjects from '../components/SelectedProjects';
import LatestCode from '../components/LatestCode';
import Hero from '../components/Hero';
import getLatestRepos from '@lib/getLatestRepos';
import userData from '@constants/data';

export default function Index({ repositories }) {
  useSetMeta({
    title:
      'Victor Ughonu - Full-Stack Developer, AI Engineer, Writer, Photographer',
    description: "Victor Ughonu's Home Page",
  });

  return (
    <>
      <Hero />
      <SelectedProjects />
      <LatestCode repositories={repositories} />
    </>
  );
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};
