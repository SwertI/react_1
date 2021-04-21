import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map((dialog) => (
        <DialogItem name={dialog.name} id={dialog.id} />
    ))

    let messagesElements = props.state.messages.map((message) => (
        <Message message={message.message} />
    ))

    let newMessageElement = React.createRef()
        let addMessage = () => {
            let text = newMessageElement.current.value
            alert(text)
        }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>{dialogsElements}</div>
            <div className={s.messages}>{messagesElements}</div>
            <textarea name="" id="" cols="30" rows="5" ref={newMessageElement}></textarea>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs
 