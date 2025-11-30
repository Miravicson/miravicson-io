import Experience from "@/components/experience";
import Header from "@/components/header";

export default async function Work() {
  return (
    <>
      <Header>
        <h1 className={`font-bold leading-[1] text-[1em] m-0`}>Work</h1>
      </Header>
      <Experience />
    </>
  );
}
