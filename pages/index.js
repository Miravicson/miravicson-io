import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Layout from "../components/Layout";
import CustomHead from "../components/CustomHead";
import React from "react";
import { connect } from "react-redux";

function Home({ routes }) {
  const renderAsLinkIf = (link, text) => {
    if (routes.includes(link)) {
      return (
        <Link href={`/${link}`} className="link-special">
          <a className="link-special">{text}</a>
        </Link>
      );
    } else {
      return <span>{text}</span>;
    }
  };
  return (
    <section className={styles.Home}>
      <CustomHead title="Home" />
      <div className={styles.Home__Introduction}>
        <p className={styles.Profile}>
          I'm {renderAsLinkIf("about", "Victor Ughonu")}.
        </p>
        <p className={styles.FullStack}>
          A Full-Stack {renderAsLinkIf("work", "Software Developer")}.
        </p>
        <p className={styles.Writer}>
          I {renderAsLinkIf("blog", "write")} about life, technology and
          Artificial Intelligence.
        </p>
        <p className={styles.Trader}>
          I {renderAsLinkIf("shop", "sell")} stuff.
        </p>
      </div>
    </section>
  );
}

function mapStateToProps({ routes }) {
  return {
    routes,
  };
}

export default connect(mapStateToProps)(Home);
