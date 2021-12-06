import PropTypes from "prop-types";

const Description = ({ item } ) => {
    const { avatar, username, tag, location } = item;
    console.log("i am description comp3")

    return (
        <div className="description">
            <img
            src={avatar}
            alt="User avatar"
            className="avatar" />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
        </div>    
    )
}
export default Description;

Description.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}