import PropTypes from "prop-types";

import styles from "./StatsItems.module.css";

const StatsItems = ({ followers, views, likes }) => {
    return (
        <ul className={styles.stats}>
    <li>
      <span className="label">Followers</span>
                <span className={styles.quantity}>{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
          <span className={styles.quantity}>{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
          <span className={styles.quantity}>{likes}</span>
    </li>
  </ul>
    )
}
export default StatsItems;

StatsItems.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
}