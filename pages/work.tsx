import Header from '@components/Header';
import { defaultMeta, useSetMeta } from '../components/ContainerBlock';
import WorkComponent from '../components/Work';

export default function Work() {
  useSetMeta(defaultMeta);
  return (
    <>
      <Header>
        <h1 className={`font-bold leading-[1] text-[1em] m-0`}>Work</h1>
      </Header>
      <WorkComponent />
    </>
  );
}
