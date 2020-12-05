import React from "react";
import { Link } from "react-router-dom";
import styles from './Home.module.scss'

function Home(props) {
  return (
    <section className={styles.Home}>
      <div className={styles.Home__Introduction}>
        <p className={styles.Profile}>
          I'm{" "}
          <Link to="/about" className="link-special">
            Victor Ughonu
          </Link>
          .
        </p>
        <p className={styles.FullStack}>
          A Full-Stack{" "}
          <Link to="/work" className="link-special">
            Software Developer
          </Link>
          .
        </p>
        <p className={styles.Writer}>
          I{" "}
          <Link to="/blog" className="link-special">
            write
          </Link>{" "}
          about life, technology and Artificial Intelligence.
        </p>
        <p className={styles.Trader}>
          I{" "}
          <Link to="/shop" className="link-special">
            sell
          </Link>{" "}
          stuff.
        </p>
      </div>
    </section>
  );
}

export default Home;
