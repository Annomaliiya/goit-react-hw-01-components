import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

import styles from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={styles.friendsList}>
      {friends.map((friend) => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;