import userData from "@/lib/data/data";
import React from "react";
import SubDuedHeader from "./subdued-header";

export default function Experience() {
  return <ExperienceCardList />;
}

function ExperienceCardList() {
  return (
    <div className="grid max-w-xl grid-cols-1 pt-20 mx-auto ">
      {userData.experience.map((exp, idx) => (
        <React.Fragment key={exp.title}>
          <ExperienceCard
            title={exp.title}
            desc={exp.desc}
            year={exp.year}
            company={exp.company}
            companyLink={exp.companyLink}
          />
          {idx === userData.experience.length - 1 ? null : (
            <div className="flex flex-col items-center -mt-2 divider-container">
              <div className="relative z-10 w-4 h-4 bg-green-500 rounded-full">
                <div className="relative z-10 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <div className="w-1 h-24 sm:h-[10rem] -mt-2 bg-gray-200 rounded-full dark:bg-gray-500"></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

type ExperienceCardProps = {
  title: string;
  desc: string;
  year: string;
  company: string;
  companyLink: string;
};

const ExperienceCard = ({
  title,
  desc,
  year,
  company,
  companyLink,
}: ExperienceCardProps) => {
  return (
    <React.Fragment>
      <div className="relative z-10 p-4 mx-4 bg-white border rounded-md shadow-xl experience-card dark:bg-gray-800">
        <SubDuedHeader
          className={`absolute sm:hidden text-4xl font-bold -top-10 md:-left-10 md:-top-10 `}
        >
          {year}
        </SubDuedHeader>
        <SubDuedHeader
          className={`absolute hidden sm:block left-[20rem] top-[-6rem] z-[-30] `}
        >
          {year}
        </SubDuedHeader>

        <h1 className="text-xl font-semibold">{title}</h1>
        <a href={companyLink} className="text-gray-500">
          {company}
        </a>
        <p className="my-2 text-gray-600 dark:text-gray-400">{desc}</p>
      </div>
    </React.Fragment>
  );
};
