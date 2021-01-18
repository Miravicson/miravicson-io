import ComingSoon from "../components/coming-soon";
import CustomHead from "../components/custom-head";

function Work() {
  return (
    <section className="work">
      <CustomHead
        title="My Work"
        description="Follow Victor Ughonu as he share's his work and experience as a software developer and as a person"
      />
      <ComingSoon title="work" />
    </section>
  );
}

export default Work;
