import Header from "@/components/header";
import Projects from "@/components/projects";

export default function projects() {
  return (
    <>
      <Header>
        <h1 className={`font-bold leading-[1] text-[1em] m-0`}>Projects</h1>
      </Header>
      <Projects />
    </>
  );
}
