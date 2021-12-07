import Description from "./Description";
import StatsItems from './StatsItems'

const Profile = ({ data }) => {
    console.log(data)
    return (
     <div className="profile">
            <Description avatar={data.avatar}
                username={data.username}
                tag={data.tag}
                location={data.location}
            />
            <StatsItems followers={data.stats.followers}
                views={data.stats.views}
                likes={ data.stats.likes}/>
        </div>
    )
}

export default Profile;