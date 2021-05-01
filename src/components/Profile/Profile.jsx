import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import React from 'react'

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} 
            newPostText={props.profilePage.newPostText}
            dispatch = {props.dispatch}
            />
        </div>
    )
}

export default Profile
