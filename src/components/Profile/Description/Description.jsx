import PropTypes from "prop-types";

import styles from "./Description.module.css"

const Description = ({ avatar, username, tag, location } ) => {
    return (
        <div className={styles.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={styles.avatar} />
                <p className={styles.name}>{username}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
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