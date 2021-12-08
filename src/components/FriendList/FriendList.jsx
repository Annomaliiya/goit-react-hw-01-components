import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

import styles from "./FriendList.module.css";

function FriendList ({ friends }) {
  const friendsCards = friends.map((friend) => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))
  return (
    <ul className={styles.friendsList}>
      {friendsCards}
    </ul>
  );
}

const friendShape = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape(friendShape)).isRequired,
};

export default FriendList;