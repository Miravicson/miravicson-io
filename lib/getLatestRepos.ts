import axios, { AxiosResponse } from "axios";

const REPOS_SESSION_STORAGE = "REPOS_SESSION_STORAGE";

export function getReposFromSessionStorage() {
  if (global.window?.sessionStorage) {
    const repoString = window.sessionStorage.getItem(REPOS_SESSION_STORAGE);
    if (repoString) {
      return JSON.parse(repoString);
    }
  }
  return null;
}

function storeRepoToSessionStorage(repo: unknown) {
  if (repo && global.window?.sessionStorage) {
    const repoString = JSON.stringify(repo);
    window.sessionStorage.setItem(REPOS_SESSION_STORAGE, repoString);
  }
}

const getLatestRepos = async (username: string) => {
  const token = process.env.GITHUB_AUTH_TOKEN;
  try {
    if (token) {
      const res: AxiosResponse<{ items: [] }> = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      const repos = res.data.items;
      const latestSixRepos = repos.splice(0, 6);
      storeRepoToSessionStorage(latestSixRepos);
      return latestSixRepos;
    } else {
      const res: AxiosResponse<{ items: [] }> = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
      );
      const repos = res.data.items;
      const latestSixRepos = repos.splice(0, 6);
      storeRepoToSessionStorage(latestSixRepos);
      return latestSixRepos;
    }
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getLatestRepos;
