import React from "react";
// import userData from '@constants/data';
import getLatestRepos, {
  getReposFromSessionStorage,
} from "@/lib/getLatestRepos";
import userData from "@/lib/data/data";

export function useGetLatestRepos() {
  const [repositories, setRepositories] = React.useState(() =>
    getReposFromSessionStorage()
  );

  React.useEffect(() => {
    async function loadRepoData() {
      const repositories = await getLatestRepos(userData.githubUsername);
      if (repositories instanceof Array) {
        setRepositories(repositories);
      }
    }
    loadRepoData();
  }, []);

  return repositories;
}
