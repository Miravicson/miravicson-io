"use client";
import {
  ReactLogo,
  Nodejs,
  Javascript,
  Python,
  TailwindCss,
  Html5,
  Css3,
  Github,
  Git,
  GoogleCloud,
  Aws,
} from "styled-icons/boxicons-logos/";
import {
  Nestjs,
  Mongodb,
  Postgresql,
  Typescript,
  Redux,
  Vercel,
  Django,
  Flask,
  Mysql,
  Jest,
  Sass,
  Styledcomponents,
  Socketdotio,
  Docker,
  Express,
  Confluence,
  Jira,
  Redis,
  Antdesign,
  Gatsby,
  Mocha,
  Java,
  Springboot,
} from "styled-icons/simple-icons";

export const techStackList = [
  {
    name: "React",
    icon: ReactLogo,
  },
  {
    name: "Nodejs",
    icon: Nodejs,
  },
  {
    name: "Javascript",
    icon: Javascript,
  },
  {
    name: "TypeScript",
    icon: Typescript,
  },
  {
    name: "NestJs",
    icon: Nestjs,
  },
  {
    name: "MongoDB",
    icon: Mongodb,
  },
  {
    name: "PostgreSQL",
    icon: Postgresql,
  },
  {
    name: "Redux",
    icon: Redux,
  },
  {
    name: "NextJs",
    icon: Vercel,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Django",
    icon: Django,
  },
  {
    name: "Flask",
    icon: Flask,
  },
  {
    name: "TailwindCss",
    icon: TailwindCss,
  },
  {
    name: "HTML5",
    icon: Html5,
  },
  {
    name: "MySQL",
    icon: Mysql,
  },
  {
    name: "Jest",
    icon: Jest,
  },
  {
    name: "SASS",
    icon: Sass,
  },
  {
    name: "CSS3",
    icon: Css3,
  },
  {
    name: "Styled Components",
    icon: Styledcomponents,
  },
  {
    name: "Socket.IO",
    icon: Socketdotio,
  },
  {
    name: "Docker",
    icon: Docker,
  },
  {
    name: "Express",
    icon: Express,
  },
  {
    name: "Confluence",
    icon: Confluence,
  },
  {
    name: "Jira",
    icon: Jira,
  },
  {
    name: "Redis",
    icon: Redis,
  },
  {
    name: "AntDesign",
    icon: Antdesign,
  },
  {
    name: "Gatsby",
    icon: Gatsby,
  },
  {
    name: "Github",
    icon: Github,
  },
  {
    name: "Git",
    icon: Git,
  },
  {
    name: "Google Cloud",
    icon: GoogleCloud,
  },
  {
    name: "AWS",
    icon: Aws,
  },
  {
    name: "Mocha",
    icon: Mocha,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "SpringBoot",
    icon: Springboot,
  },
];

techStackList.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

type TechStackThumbnailProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
};

export default function TechStackThumbnail({
  Icon,
  name,
}: TechStackThumbnailProps) {
  return (
    <div
      className={`mx-3 my-3 sm:mx-4 sm:my-4 justify-self-center bmd:mx-4 bmd:my-4 fill-current items-center flex flex-col`}
    >
      <Icon className={`w-10 h-10 sm:w-12 sm:h-12 bmd:w-20 bmd:h-20`} />
      <div
        className={`text-[11px] mt-5px bmd:text-[1rem] mt-[0.6rem] flex justify-center text-center`}
      >
        {name}
      </div>
    </div>
  );
}
