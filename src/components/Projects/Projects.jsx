import React from 'react'
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";

export const Projects = () => {
  return (
    
      <section className= {styles.container}>
        <div className = {styles.content}>
            <h3 className = {styles.title}>Projects</h3>
            <div>
                {
                    projects.map((project,id) => {
                        return (
                            <div key = {id} className = {styles.projectCard}>
                                <img className={styles.projectImage}
                                src = {project.imageSrc}
                                alt = {`image of ${project.title}`}/>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                            </div>
                        
                        
                    
                     ) }

                )
                }
                
            </div>
        </div>
        
      </section>
  
  );
};


