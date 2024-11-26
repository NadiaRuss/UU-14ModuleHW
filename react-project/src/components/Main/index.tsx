import style from './main.module.css'
import Introdeuce from '../Introduce'
import TechStack from '../TechStack'
import ProjectsStack from '../ProjectsStack'




const Main = () => {
    return(
        <div className={style.main}>

        < Introdeuce />
        < TechStack />
        < ProjectsStack />
        
        </div>
    )
}
export default Main