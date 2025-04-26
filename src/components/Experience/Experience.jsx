import React from 'react';
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";




export const Experience = () => {
    return (
        <section id="experience" className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                {skills.map((skill, id) => (
                    <div key={id} className={styles.skillCard}>
                        <div className = {styles.skillImagediv}>
                        <img
                            className={styles.skillImage}
                            src={skill.imageSrc}
                            alt={skill.title}
                        />
                        </div>
                        <p className={styles.skillTitle}>{skill.title}</p>
                    </div>
                ))}
            </div>
            <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                 
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
            </div>
        </section>
    );
};
