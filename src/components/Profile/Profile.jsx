import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile
