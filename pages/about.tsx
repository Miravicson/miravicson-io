import Header from '@components/Header';
import { useSetMeta } from '../components/SEOProvider';
import AboutMe from '../components/AboutMe';

export default function About() {
  useSetMeta({
    title: 'About \u2014 Victor Ughonu',
    description:
      'I am a Senior FullStack Developer at Kudi.com. I lead the design and development of Internal Tools used to empower my colleagues to be productive. I am passionate about Artificial Intelligence and Deep Learning. In my spare time, you would find me training an AI model or trying to beat my record score on Kaggle.',
  });
  return (
    <>
      <Header>
        <h1 className={`font-bold leading-[1] text-[1em] m-0`}>About Me</h1>
      </Header>
      <AboutMe />
    </>
  );
}
