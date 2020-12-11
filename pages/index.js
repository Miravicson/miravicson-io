import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Layout from "../components/Layout";
import CustomHead from "../components/CustomHead";
import React from "react";

function Home(props) {
  return (
    <section className={styles.Home}>
      <CustomHead title="Home" />
      <div className={styles.Home__Introduction}>
        <p className={styles.Profile}>
          I'm{" "}
          <Link href="/about" className="link-special">
            <a className="link-special">Victor Ughonu</a>
          </Link>
          .
        </p>
        <p className={styles.FullStack}>
          A Full-Stack{" "}
          <Link href="/work" className="link-special">
            <a className="link-special">Software Developer</a>
          </Link>
          .
        </p>
        <p className={styles.Writer}>
          I{" "}
          <Link href="/blog" className="link-special">
            <a className="link-special">write</a>
          </Link>{" "}
          about life, technology and Artificial Intelligence.
        </p>
        <p className={styles.Trader}>
          I{" "}
          <Link href="/shop" className="link-special">
            <a className="link-special">sell</a>
          </Link>{" "}
          stuff.
        </p>
      </div>
    </section>
  );
}

export default Home;
