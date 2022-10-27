import axios, { AxiosResponse } from 'axios';

const REPOS_SESSION_STORAGE = 'REPOS_SESSION_STORAGE';

export function getReposFromSessionStorage() {
  if (global.window?.sessionStorage) {
    const repoString = window.sessionStorage.getItem(REPOS_SESSION_STORAGE);
    if (repoString) {
      return JSON.parse(repoString);
    }
  }
  return null;
}

function storeRepoToSessionStorage(repo) {
  if (repo && global.window?.sessionStorage) {
    const repoString = JSON.stringify(repo)
    window.sessionStorage.setItem(REPOS_SESSION_STORAGE, repoString);
  }
}

const getLatestRepos = async (data): Promise<Array<unknown>> => {
  let token = process.env.GITHUB_AUTH_TOKEN;
  try {
    const username = data.githubUsername;

    // let token = `token ${process.env.GITHUB_AUTH_TOKEN}`;
    // console.log("TOKEN", token);

    if (token) {
      const res: AxiosResponse<{ items: [] }> = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      let repos = res.data.items;
      let latestSixRepos = repos.splice(0, 6);
      storeRepoToSessionStorage(latestSixRepos);
      return latestSixRepos;
    } else {
      const res: AxiosResponse<{ items: [] }> = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
      );
      let repos = res.data.items;
      let latestSixRepos = repos.splice(0, 6);
      storeRepoToSessionStorage(latestSixRepos);
      return latestSixRepos;
    }
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;
