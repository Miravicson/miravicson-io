import Head from 'next/head';
import CustomHead from '../components/custom-head';
import styles from '../styles/About.module.scss';
import Link from 'next/link';
import socialMediaData from '../data/social-media';
import ProgressiveImage from 'react-progressive-image';
import Container from '../components/container';

const SocialMediaList = ({ data }) => {
  return (
    <ul className={styles.SocialMediaList}>
      {data.map((socialMediaItem) => {
        const { name, link } = socialMediaItem;
        return (
          <li className={styles.SocialMediaList__Item} key={`${name}-${link}`}>
            <a
              className="link-special"
              href={link}
              target="_blank"
              rel="noopener"
            >
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

function About() {
  return (
    <Container>
      <div className={styles.About}>
        <CustomHead title="About Me" description={'About Victor Ughonu'} />
        <section>
          <h1 className={styles.Intro}>
            <span className={styles.Intro__bold}> I am Victor Ughonu,</span>{' '}
            a software developer.
          </h1>

          <ProgressiveImage
            src="/img/victor-ughonu-banner.jpg"
            placeholder="/img/victor-ughonu-banner-small.jpg"
          >
            {(src, loading) => (
              <img
                src={src}
                alt="Victor Ughonu's Main Image"
                className={styles.BackgroundImage}
              />
            )}
          </ProgressiveImage>
        </section>
        <section className={styles.TextContainer}>
          <article className={styles.Article}>
            <p>
              &quot;A problem solver&quot;; this phrase describes my principles
              and my approach to building products. I discovered earlier that I
              am an iconoclast of some sort defying the age-long saying of
              &quot;Jack of all trades; master of none.&quot;
            </p>
            <br />
            <p>
              In the real world, problems arise in forms that are not evidently
              amenable to just one form of technology. A successful problem
              solver is fluid in choosing his tools; allowing the context and
              constraints of the problem dictate his repertoire. These idea has
              enabled me acquire both extensive knowledge in varying
              technological field while solving problems from hardware to mobile
              applications, to the Internet of Things and to the topical
              Artificial Intelligence space. It&quot;s all about proffering
              effective solutions to help humanity.
            </p>
            <br />
            <p>
              What about specialization? I specialize in taking product ideas
              from the white board to an MVP stage at the same time laying a
              solid foundation for scaling these products. Being adept in a wide
              range of technology stack allows me to compare efficiently
              technology stacks for your project and recommend the most suitable
              technology for your stack.
            </p>
            <br />
            <p>
              To be specific, I am a fullstack developer proficient in React and
              associated technologies. I write primarily NodeJs for backend
              applications and I am both proficient in SQL and NoSQL backend
              solutions; allowing the related task guide my choice. When I build
              machine learning solutions, I prefer to deploy on servers powered
              by either Django or Flask frameworks or both as the case may be.
            </p>
            <br />
          </article>
          <aside className={styles.Aside}>
            <div className={styles.ItemCard}>
              <h3 className={styles.ItemCard__title}>Social Media</h3>
              <div className={styles.ItemCard__body}>
                <SocialMediaList data={socialMediaData} />
              </div>
            </div>
          </aside>
        </section>
      </div>
    </Container>
  );
}

export default About;
