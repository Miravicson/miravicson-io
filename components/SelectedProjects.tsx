import React from 'react';
import SubDuedHeader from './SubDuedHeader';
import ViewAllButton from './ViewAllButton';
import userData from '@constants/data';
import SelectedProjectCard from './SelectedProjectCard';

function* cycle(n) {
  let start = 0;
  while (true) {
    if (start >= n) {
      start = 0;
    }
    yield start;
    start++;
  }
}

export default function SelectedProjects() {
  const iteratorRef = React.useRef(cycle(3));

  function cycleColSpan() {
    const classes = ['sm:col-span-3', 'sm:col-span-2', 'sm:col-span-1'];
    return classes[iteratorRef.current.next().value as number];
  }

  const renderSelectedProjects = (
    selectedProject: { coverImage: string; link: string; title: string },
    index: number
  ) => {
    return (
      <SelectedProjectCard
        key={`${selectedProject.title}`}
        selectedProject={selectedProject}
        index={index}
        imageClassName=""
        wrapperClassName={`block w-full col-span-3 self-start ${cycleColSpan()} shadow-2xl`}
      />
    );
  };

  return (
    <div>
      <div>
        <header className="relative flex flex-col items-center justify-between md:flex-row">
          <SubDuedHeader>Selected Projects</SubDuedHeader>
          <ViewAllButton
            className={`absolute md:bottom-[1rem] lg:bottom-[6rem] z-[2] right-0 hidden md:flex`}
            as="link"
            link="/projects"
          >
            View All
          </ViewAllButton>
        </header>
        <div className="grid gap-8 md:grid-cols-3 lg:-mt-8">
          {userData.selectedProjects.map(renderSelectedProjects)}
        </div>
        <ViewAllButton
          className={`mt-[2rem] md:hidden`}
          as="link"
          link="/projects"
        >
          View All
        </ViewAllButton>
      </div>
    </div>
  );
}
