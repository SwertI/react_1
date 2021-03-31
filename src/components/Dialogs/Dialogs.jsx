import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>Alex</div>
                <div className={s.dialog}>222222</div>
                <div className={s.dialog}>33333333</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>123</div>
                <div className={s.message}>445655</div>
                <div className={s.message}>954894</div>
            </div>
        </div>
    )
}

export default Dialogs
