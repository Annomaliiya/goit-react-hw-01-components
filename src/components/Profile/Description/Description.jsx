import PropTypes from "prop-types";

import "./Description.css"

const Description = ({ avatar, username, tag, location } ) => {
    return (
        <div className="description">
            <img
            src={avatar}
            alt="User avatar"
            className="avatar" />
                <p className="name">{username}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
        </div>    
    )
}
export default Description;

Description.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}