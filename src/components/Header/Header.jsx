import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://cdn.iconscout.com/icon/free/png-256/me-9-675698.png'
                alt='LOGO'
            />
        </header>
    )
}

export default Header
