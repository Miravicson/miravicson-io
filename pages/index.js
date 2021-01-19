import React from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Layout from "../components/layout";
import CustomHead from "../components/custom-head";
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
    <div className={styles.Home}>
      <CustomHead
        title="Victor Ughonu - Software Developer"
        description="Victor Ughonu's Home Page"
      />
      <section className={styles.Home__Introduction}>
        <h1 className={styles.Profile}>
          I&#8217;m {renderAsLinkIf('about', 'Victor Ughonu')}.
        </h1>
        <h1 className={styles.FullStack}>
          A Full-Stack {renderAsLinkIf('work', 'Software Developer')}.
        </h1>
        <h1 className={styles.Writer}>
          I {renderAsLinkIf('blog', 'write')} about life, technology and
          Artificial Intelligence.
        </h1>
        <h1 className={styles.Trader}>
          I {renderAsLinkIf('shop', 'sell')} stuff.
        </h1>
      </section>
    </div>
  );
}

function mapStateToProps({ routes }) {
  return {
    routes,
  };
}

export default connect(mapStateToProps)(Home);
