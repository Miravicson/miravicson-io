import React from "react";
import withLayout from "../../routes/withLayout";
import { Link } from "react-router-dom";
function Home() {
  return (
    <section className="home">
      <div className="introduction">
        <p>
          I'm{" "}
          <Link to="/about" className="link-special" exact>
            Victor Ughonu
          </Link>
          .
        </p>
        <p>
          A Full-Stack{" "}
          <Link to="/work" className="link-special" exact>
            Software Developer
          </Link>
          .
        </p>
        <p>
          I{" "}
          <Link to="/blog" className="link-special" exact>
            write
          </Link>{" "}
          about life, technology and Artificial Intelligence.
        </p>
        <p>
          I{" "}
          <Link to="/shop" className="link-special" exact>
            sell
          </Link>{" "}
          stuff.
        </p>
      </div>
    </section>
  );
}

export default withLayout(Home);
