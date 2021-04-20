import s from './SideBar.module.css'
import FriendsArea from './FriendsArea/FriendsArea.jsx'
import Navbar from './Navbar/Navbar.jsx'

const SideBar = (props) => {
    return (
        <div className={s.sidebar}>
            <Navbar />
            <FriendsArea />
        </div>
    )
}

export default SideBar
