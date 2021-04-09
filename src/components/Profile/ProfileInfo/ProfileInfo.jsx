import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.profileImage}>
                <img
                    src='https://i.pinimg.com/originals/96/23/44/96234448bc5e0c552f269239cebde188.jpg'
                    alt='Content'
                />
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    )
}

export default ProfileInfo
