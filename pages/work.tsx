import Header from '@components/Header';
import Experience from '../components/Experience';
import { defaultMeta, useSetMeta } from '../components/SEOProvider';

export default function Work() {
  useSetMeta(defaultMeta);
  return (
    <>
      <Header>
        <h1 className={`font-bold leading-[1] text-[1em] m-0`}>Work</h1>
      </Header>
      <Experience />
    </>
  );
}
