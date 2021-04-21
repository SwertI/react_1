import s from './SideBar.module.css'
import FriendsArea from './FriendsArea/FriendsArea'
import Navbar from './Navbar/Navbar'

const SideBar = (props) => {
    return (
        <div className={s.sidebar}>
            <Navbar />
            <FriendsArea friends={props.state.friends} />
        </div>
    )
}

export default SideBar
