import style from './introdeuce.module.css'
import avatar from "@assets/images/photo.jpg"

const Introdeuce = () =>{
    return (
        <section className={style.introduce} id="about"> 
                <div className={style.greeting}>
                    <h1>Привет 👋,</h1>
                        <h2>Меня зовут</h2>
                        <h2 className={style.name}>Надежда Яковлева</h2>
                        <h2>Я фронтенд-разработчик</h2>
                </div>
                <div className={style.photo_container}>
                    <img className={style.photo} src={avatar} alt="Profile" />
                </div>
        </section>
    )
} 
export default Introdeuce