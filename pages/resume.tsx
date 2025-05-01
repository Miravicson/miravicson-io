import Header from '@components/Header';
import dynamic from 'next/dist/shared/lib/dynamic';
import { useSetMeta } from '../components/SEOProvider';

const CustomPdfViewer = dynamic(() => import('../components/CustomPdfViewer'), {
  ssr: false,
});

export default function About() {
  useSetMeta({
    title: 'Resume \u2014 Victor Ughonu',
    description:
      'I’m Victor — a full-stack engineer since 2018 with a knack for building thoughtful, scalable systems. At Kudi (now Nomba), I led the development of internal tools that empowered 300+ support staff to resolve financial issues swiftly. Now I’m building Bloomers, a health-tech platform making maternal and child healthcare more accessible across Nigeria.',
  });
  return (
    <>
      <Header>
        <h1 className={`font-bold leading-[1] text-[1em] m-0`}>Resume</h1>
      </Header>
      <CustomPdfViewer />
    </>
  );
}
