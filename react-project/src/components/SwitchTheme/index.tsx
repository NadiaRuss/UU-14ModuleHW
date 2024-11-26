import { useContext } from "react";
import { ThemeContext } from "../../App";
import style from './switchTheme.module.css'

const SwitchTheme = () => {
    const currentTheme = useContext(ThemeContext)


    const handleClick = () => {
        if(currentTheme?.theme === 'dark'){
            currentTheme.setTheme('light')
        } else {
            currentTheme?.setTheme('dark')
        }
    }

return <div className={style.themeChangeBtn} onClick={handleClick}>{currentTheme?.theme}</div>

}
export default SwitchTheme;