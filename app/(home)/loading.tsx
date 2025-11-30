import Loader from "@/components/loader";
import Header from "@/components/header";

export default function Loading() {
  return (
    <main className="h-full justify-center items-center w-full">
      <Header>
        <h1 className={`font-bold leading-[1] text-[1em] m-0 invisible`}>
          Loading...
        </h1>
      </Header>

      <Loader />
    </main>
  );
}
