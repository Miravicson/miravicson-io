"use client";
import SubDuedHeader from "./subdued-header";
import userData from "@/lib/data/data";
import ViewAllButton from "./view-all-button";
import SelectedProjectCard from "./selected-project-card";
const colClasses = ["sm:col-span-3", "sm:col-span-2", "sm:col-span-1"];

function colSpanForIndex(i: number) {
  return colClasses[i % colClasses.length];
}

export default function SelectedProjects() {
  const renderSelectedProjects = (
    selectedProject: { coverImage: string; link: string; title: string },
    index: number
  ) => {
    return (
      <SelectedProjectCard
        key={selectedProject.title}
        selectedProject={selectedProject}
        index={index}
        imageClassName=""
        wrapperClassName={`block w-full col-span-3 self-start ${colSpanForIndex(
          index
        )} shadow-2xl`}
      />
    );
  };

  const selectedProjects = userData.selectedProjects.map(
    renderSelectedProjects
  );

  return (
    <div>
      <div>
        <div className="relative flex flex-col items-center justify-between md:flex-row">
          <SubDuedHeader>Selected Projects</SubDuedHeader>
          <ViewAllButton
            className="absolute md:bottom-[1rem] lg:bottom-[6rem] z-Gi[2] right-0 hidden md:flex"
            as="link"
            link="/projects"
          >
            View All
          </ViewAllButton>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:-mt-8">
          {selectedProjects}
        </div>

        <ViewAllButton
          className="mt-[2rem] md:hidden"
          as="link"
          link="/projects"
        >
          View All
        </ViewAllButton>
      </div>
    </div>
  );
}
