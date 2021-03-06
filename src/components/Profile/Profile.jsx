import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'
import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPostsContainer store={props.store}
            />
        </div>
    )
}

export default Profile
