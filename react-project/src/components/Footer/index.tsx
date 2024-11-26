import style from "./footer.module.css";
import Nav from '../Nav/index';

const Footer = () => {
    return(

        <div className={style.footerContainer}>

                <Nav />
                <a href="#UP" className={style.upBtn}>Наверх</a>

        </div>
    )

}
export default Footer;