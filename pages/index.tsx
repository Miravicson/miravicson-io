import ContainerBlock from '../components/ContainerBlock';
import SelectedProjects from '../components/SelectedProjects';
import LatestCode from '../components/LatestCode';
import Hero from '../components/Hero';
import getLatestRepos from '@lib/getLatestRepos';
import userData from '@constants/data';

export default function home({ repositories }) {
  return (
    <ContainerBlock
      title="Victor Ughonu - Developer, Writer, Creator"
      description="Victor Ughonu's Home Page"
    >
      <Hero />
      <SelectedProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  // const repositories = [];

  return {
    props: {
      repositories,
    },
  };
};
