import Head from "next/head";
import PropTypes from "prop-types";

const CustomHead = ({ title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>Miravicson&nbsp;&mdash;&nbsp;{title}</title>
        <meta property="og:title" content={`Miravicson -- ${title}`} />
        <meta name="twitter:title" content={`Miravicson -- ${title}`} />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
      </Head>
    </>
  );
};

CustomHead.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.string,
  title: PropTypes.string,
};

CustomHead.defaultProps = {
  description: "",
  keywords: "",
  title: "",
};

export default CustomHead;
