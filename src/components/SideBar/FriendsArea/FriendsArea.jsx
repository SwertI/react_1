import s from './FriendsArea.module.css'

const FriendsArea = (props) => {
    let friendsElements = props.friends.map((friends) => (
        <div className={s.avatar}>
            <img src={friends.avatar} alt='' />
            <div name={friends.name}>{friends.name}</div>
        </div>
    ))
    return (
        <div className={s.friends_area}>
            <span>Friends</span>
            {friendsElements}
        </div>
    )
}

export default FriendsArea
