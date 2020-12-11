import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <>
      <Head>
        <title>Miravicson&nbsp;&mdash;&nbsp;{title}</title>
      </Head>
    </>
  );
};

export default CustomHead;
