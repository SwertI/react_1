import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name='Alex' id='1' />
                <DialogItem name='Aleksaaaa' id='2' />
                <DialogItem name='Alexey' id='3' />
            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='Message 222' />
                <Message message='Message 333' />
            </div>
        </div>
    )
}

export default Dialogs
