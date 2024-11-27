import style from './nav.module.css'

const Nav = () => {
    return(
        <nav className={style.nav}>
            {/* <a href='#about'>Обо мне</a> */}
            <a href='#tech-stack'>Технологии</a>
            <a href='#projects'>Мои работы</a>
            <a href='#'>Контакты</a>
        </nav>
    )
}
export default Nav;