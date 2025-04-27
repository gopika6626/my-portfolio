import React from 'react'
import styles from "./About.module.css";
import cursor from "../../assets/about/cursorIcon.png";
import server from "../../assets/about/serverIcon.png";
import ui from "../../assets/about/uiIcon.png";

export const About = () => {
  return (
    <section className = {styles.container} id = "about">

        <h2 className = {styles.title}>About</h2>
        <div className = {styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src = {cursor} alt ="cursorimg"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                        I am a passionate frontend developer with experience in building responsive and optimized sites
            
                        </p>
                        </div>
                 </li>
                 <li className={styles.aboutItem}>
                    <img src = {server} alt = " serverimg "/>
                    <div className={styles.aboutItemText}>
        <h3>Machine Learning & AI Enthusiast</h3>
         <p>
             Skilled in building intelligent systems using machine learning and AI techniques, with hands-on experience in model development, fine-tuning, and applying AI to solve real-world challenges through data-driven innovation.
        </p>
       </div>

                 </li>
                 <li className={styles.aboutItem}>
                 <img src = {ui} alt = " uiicon "/>
                    <div className={styles.aboutItemText}>
                    
                        <h3>Aspiring Full Stack Developer </h3>
                       
                        <p>

                            Eager to build seamless, user-centric applications by mastering both frontend and backend technologies.
                        </p>
                    </div>
                 </li>
            </ul>
            
            
                
        </div>
        
    </section>
  );
};


