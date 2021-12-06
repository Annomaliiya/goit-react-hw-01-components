import Description from "./Description";
import StatsItems from './StatsItems'

const Profile = ({ data }) => {
    return (
    
        <div className="profile">
            <Description item={data}/>
            <StatsItems item={data.stats}/>
        </div>
    )
}

export default Profile;