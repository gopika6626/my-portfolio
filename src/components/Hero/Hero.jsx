import React from 'react';
import Myimg from "../../assets/hero/myimg.jpeg";
import styles from "../Hero/Hero.module.css";
/*import Myimg from "../../assets/hero/myimg.jpeg";*/
 export const Hero = () => {
  return (
    <section className =  {styles.container}>
        
        <div className = {styles.content}>
        <img className= {styles.profile}
             src = { Myimg } alt = "myprofilepicture"/>

            <h1 className  = {styles.title}>
            <span>Hi,</span>
            <span>I am </span>
            <span>Gopika</span>
            </h1>
            <p className = {styles.description}>
                I'm a FrontEnd Developer and an aspiring Full Stack Developer with experience in React 
            </p>
            <a href = "mailto:gopikar075@gmail.com" className = {styles.contactBtn}>Let's Collaborate</a>
           
        </div>
    
       <div className= { styles.topBlur}/>
       <div className = {styles.bottomBlur}/>
    </section>
  );
};


