import styles from "./NavBar.module.css"
import { useState, useEffect } from "react";

export default function NavBar() {
    const [highlightedSection, setHighlightedSection] = useState("Home"); 
    console.log(highlightedSection); 

    useEffect(() => {
        const windowHeight = window.innerHeight; 
        const halfWindowH = windowHeight / 2 
        window.addEventListener('scroll', () => {
            if(window.pageYOffset + halfWindowH < windowHeight) {
                setHighlightedSection('Home'); 
            } else if (
                window.pageYOffset + halfWindowH > windowHeight &&
                window.pageYOffset + halfWindowH < windowHeight * 2
            ) {
                setHighlightedSection('About')
            } else {
                setHighlightedSection('Projects'); 
            }
        }); 
    })

    return (
        <nav className={styles.navBar}>
            <div className={styles.linksGroup}>
                <a className = {`${styles.link} ${highlightedSection === 'Home' ? styles.active : ''}`} href="#homeSection">Home</a>
                <a className = {`${styles.link} ${highlightedSection === 'About' ? styles.active : ''}`}  href="#aboutSection">About</a>
                <a className = {`${styles.link} ${highlightedSection === 'Projects' ? styles.active : ''}`}  href="#projectSection">Projects</a>
            </div>
            <div className={styles.contact}>
                <a href="https://github.com/amishi-arora" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/amishi-arora/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="mailto:amishia859@gmail.com" target="_blank"><i className="fa-regular fa-envelope"></i></a>
            </div>
        </nav>
    )
}
