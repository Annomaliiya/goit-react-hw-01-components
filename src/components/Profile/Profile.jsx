import PropTypes  from "prop-types";
import Description from "./Description";
import StatsItems from './StatsItems'
import styles from "./Profile.module.css"

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={styles.profile}>
            <Description avatar={avatar}
                username={username}
                tag={tag}
                location={location}
            />
            <StatsItems followers={stats.followers}
                views={stats.views}
                likes={stats.likes}/>
        </div>
    )
}

export default Profile;

const statsShape = {
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views : PropTypes.number.isRequired
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape(statsShape).isRequired
}