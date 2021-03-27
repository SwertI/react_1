import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://i.pinimg.com/originals/96/23/44/96234448bc5e0c552f269239cebde188.jpg'
                    alt='Content'
                />
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    )
}

export default Profile
