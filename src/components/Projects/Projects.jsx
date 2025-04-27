import React from 'react';
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";

export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projectsContainer}>
          {projects.map((project, id) => (
            <div key={id} className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img 
                    className={styles.projectImage}
                    src={project.imageSrc}
                    alt={`${project.title} project`}
                  />
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
                <div className={styles.flipCardBack}>
                  <div className={styles.projectDescription}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.technologies && (
                      <div className={styles.technologies}>
                        {project.technologies.map((tech, index) => (
                          <span key={index} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};