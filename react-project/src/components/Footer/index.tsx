import style from "./footer.module.css";
import Nav from '../Nav/index';

const Footer = () => {
    return(

        <div className={style.footerContainer}>

                <Nav />
                <a href='tel:1234567890'>Tel: 1234567890</a>
                <a href="#UP" className={style.upBtn}>Наверх</a>

        </div>
    )

}
export default Footer;