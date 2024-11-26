import style from "./projectsStack.module.css";
import Projects from "../../data/projects.json";
import { Project } from "../../types";

const ProjectsStack = () => {

    return (
        <section className={style.projectsStack} id="projects">
            <h2 className={style.h2}>Мои работы</h2>
            <div className={style.grid}>
                {Projects.projects.map((job : Project) => (
                    <div key={job.id} className={style.progectStackContainer} id="containerTheme">
                        <div className={style.imageContainer}>
                        <img src={`${job.image}`} className={style.image} alt={`${job.title} `} />
                        </div>
                        <div className={style.caption}>
                        <h3>{job.title}</h3>
                        <p>{job.description}</p>
                        </div>
                        <div className={style.techStack}>
                            {job.techStack.map((tech, index) => (
                                <span key={index}>{tech} </span>
                            ))}
                        </div>
                        <div className={style.links}>
                            <a 
                            href={job.livePreviewUrl}
                            target = "_blank"
                            rel="noopener noreferrer">
                                Live Preview
                            </a>
                            <a 
                            href={job.codeUrl}
                            target = "_blank"
                            rel="noopener noreferrer"
                            >
                                View Code
                            </a>
                        </div>         
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsStack