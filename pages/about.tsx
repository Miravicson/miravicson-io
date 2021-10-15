import Header from '@components/Header';
import ContainerBlock from '../components/ContainerBlock';
import AboutMe from '../components/AboutMe';

export default function about() {
  return (
    <ContainerBlock title="About -- Victor Ughonu">
      <Header>
        <h1 className={`font-bold leading-[1] text-[1em] m-0`}>About Me</h1>
      </Header>
      <AboutMe />
    </ContainerBlock>
  );
}
