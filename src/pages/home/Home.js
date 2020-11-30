import React from "react";
import withLayout from "../../routes/withLayout";

function Home() {
  return (
    <section className="home">
      <div className="introduction">
        <p>
          I'm{" "}
          <a href="about.html" className="link-special">
            Victor Ughonu
          </a>
          .
        </p>
        <p>
          A Full-Stack{" "}
          <a href="work.html" className="link-special">
            Software Developer
          </a>
          .
        </p>
        <p>
          I{" "}
          <a href="blog.html" className="link-special">
            write
          </a>{" "}
          about life, technology and Artificial Intelligence.
        </p>
        <p>
          I{" "}
          <a href="shop.html" className="link-special">
            sell
          </a>{" "}
          stuff.
        </p>
      </div>
    </section>
  );
}

export default withLayout(Home);
