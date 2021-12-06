import PropTypes from "prop-types";

import "./StatsItems.css";

const StatsItems = ({ item }) => {
  const { followers, views, likes } = item;
    return (
        <ul className="stats">
    <li>
      <span className="label">Followers</span>
                <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
                <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
                <span className="quantity">{likes}</span>
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