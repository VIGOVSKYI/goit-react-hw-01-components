import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    
      <ul className={styles.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={styles.item}>
            <span
              className={
                friend.isOnline
                  ? [styles.status, styles.isOnline].join(' ')
                  : [styles.status, styles.isOffline].join(' ')
              }
            ></span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    
  );
}

FriendList.defaultProps = {
    friends: []
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isOnline:PropTypes.bool.isRequired,
        avatar:PropTypes.string.isRequired,
    }))
  
};



