import style from "./techStack.module.css";
import techStack from "../../data/icons.json";
import { Technology } from "../../types";

const TechStack = () => {

    return(
        <section className={style.techStack} id="tech-stack">
            <h2>Технологии, которые я использую</h2>
            <div className={style.grid}>
                {techStack.technologies.map((tech : Technology) => (
                    <div key={tech.id} className={style.tech}>
                        <img src={`${tech.icon}`} className={`icon ${tech.class}`} alt={`${tech.name} logo`} />
                        <span className={style.caption}>{tech.name}</span>
                    </div>
                ))}
            </div>

        </section>
    );

};
export default TechStack;