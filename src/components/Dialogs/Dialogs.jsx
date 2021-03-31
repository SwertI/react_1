import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialog/2'>Aleksaaaa</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialog/3'>Alexey</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Message 1111</div>
                <div className={s.message}>Message 2222</div>
                <div className={s.message}>Message 3333</div>
            </div>
        </div>
    )
}

export default Dialogs
