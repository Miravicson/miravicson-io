import React from 'react';

import { useSetMeta } from '../components/SEOProvider';
import SelectedProjects from '../components/SelectedProjects';
import LatestCode from '../components/LatestCode';
import Hero from '../components/Hero';
import userData from '@constants/data';

export default function Index() {
  useSetMeta({
    ...userData.SEO.byPages.homePage,
  });

  return (
    <>
      <Hero />
      <SelectedProjects />
      <LatestCode />
    </>
  );
}
