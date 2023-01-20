import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile({
  src,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={src} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.statsList}>
        <li className={styles.statsItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propType = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
