import style from "./footer.module.css";
import Nav from '../Nav/index';

const Footer = () => {
    return(

        <div className={style.footerContainer}>

                <Nav />
                <a className={style.tel} href='tel:+79621234567'>Tel: +7(962)123-45-67</a>
                <a href="#UP" className={style.upBtn}>Наверх</a>

        </div>
    )

}
export default Footer;