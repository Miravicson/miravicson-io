import PropTypes from 'prop-types';
import styles from '../styles/components/ComingSoon.module.scss';

const ComingSoon = ({ title }) => {
  return (
    <div className={styles.ComingSoon}>
      <div className={styles.ComingSoon__Message}>
        <h1 className={styles.mainHeader}>
          Exercise a lil&#8217; bit of patience while I get the{' '}
          <span className="highlight">{title}</span>&nbsp;page ready for ya!!
        </h1>
      </div>
      <div className={styles.ComingSoon__Animation}>
        <img
          alt="under construction"
          src="/img/animation_500_kimwyvpg.gif"
          className={styles.ComingSoon__AnimationImage}
        />
      </div>
    </div>
  );
};

ComingSoon.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ComingSoon;
