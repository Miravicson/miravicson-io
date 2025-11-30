import Button from "@/components/button";
import Header from "@/components/header";
import SubDuedHeader from "@/components/subdued-header";

function Error404() {
  return (
    <div>
      <Header>
        <h1 className={`font-bold leading-[1] text-[1em] m-0`}>404</h1>
      </Header>
      <div className="flex flex-col items-center justify-between md:flex-row mb-8">
        <SubDuedHeader
          className={`text-2xl max-w-none w-full mt-0`}
          constrain={false}
        >
          This is not the web page you are looking for.
        </SubDuedHeader>
      </div>
      <Button as="link" link="/">
        Go home
      </Button>
    </div>
  );
}

export default Error404;
