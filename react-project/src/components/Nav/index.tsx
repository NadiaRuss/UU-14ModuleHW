import style from './nav.module.css'

const Nav = () => {
    return(
        <nav className={style.nav}>
            <a href='#'>Обо мне</a>
            <a href='#'>Технологии</a>
            <a href='#'>Мои работы</a>
            <a href='#'>Контакты</a>
        </nav>
    )
}
export default Nav;