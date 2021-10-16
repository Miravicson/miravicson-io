import Header from '@components/Header';
import ContainerBlock from '../components/ContainerBlock';
import Work from '../components/Work';

export default function work() {
  return (
    <>
      <Header>
        <h1 className={`font-bold leading-[1] text-[1em] m-0`}>Work</h1>
      </Header>
      <Work />
    </>
  );
}
