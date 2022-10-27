import React from 'react';

import { useSetMeta } from '../components/ContainerBlock';
import SelectedProjects from '../components/SelectedProjects';
import LatestCode from '../components/LatestCode';
import Hero from '../components/Hero';
import getLatestRepos, {
  getReposFromSessionStorage,
} from '@lib/getLatestRepos';
import userData from '@constants/data';

export default function Index() {
  useSetMeta({
    title:
      'Victor Ughonu - Full-Stack Developer, AI Engineer, Writer, Photographer',
    description: "Victor Ughonu's Home Page",
  });

  const [repositories, setRepositories] = React.useState(() =>
    getReposFromSessionStorage()
  );

  React.useEffect(() => {
    async function loadRepoData() {
      const repositories = await getLatestRepos(userData);
      if (repositories instanceof Array) {
        setRepositories(repositories);
      }
    }
    loadRepoData();
  }, []);

  return (
    <>
      <Hero />
      <SelectedProjects />
      {/* <LatestCode repositories={repositories} /> */}
    </>
  );
}
