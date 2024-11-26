import style from './header.module.css';
import logo_img from '@assets/images/Logo_img.png';
import SwitchTheme from '../SwitchTheme/index';
import Nav from '../Nav/index';


const Header = () => {
    return(
        <header className={style.header}>
                <div className={style.logo} id='UP'>
                    <img src={logo_img} alt="logo" />
                </div>
            <Nav />
            <SwitchTheme />
        </header>

    )
}
export default Header;