import styles from "./NavBar.module.css"
import { useState, useEffect, useCallback } from "react";

export default function NavBar() {
    const [highlightedSection, setHighlightedSection] = useState("Home");

    function scrollToSection(id) {
        const el = document.getElementById(id); 
        el.scrollIntoView({behavior: "smooth"}); 
    }

    const handleScroll = useCallback(() => {
        const windowHeight = window.innerHeight;
        const halfWindowH = windowHeight / 2;
        const midPoint = window.scrollY + halfWindowH;

        if (midPoint < windowHeight) {
            setHighlightedSection('Home');
        } else if (midPoint < windowHeight * 2) {
            setHighlightedSection('About');
        } else {
            setHighlightedSection('Projects');
        }
    }, [setHighlightedSection])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); 
        return () => {
            window.removeEventListener('scroll', handleScroll); 
        }; 
    }, [handleScroll])

    return (
        <nav className={styles.navBar}>
            <div className={styles.linksGroup}>
                <button className={`${styles.link} ${highlightedSection === 'Home' ? styles.active : ''}`} onClick= {() => scrollToSection("homeSection")}>Home</button>
                <button className={`${styles.link} ${highlightedSection === 'About' ? styles.active : ''}`} onClick= {() => scrollToSection("aboutSection")}>About</button>
                <button className={`${styles.link} ${highlightedSection === 'Projects' ? styles.active : ''}`} onClick= {() => scrollToSection("projectSection")}>Projects</button>
            </div>
            <div className={styles.contact}>
                <a href="https://github.com/amishi-arora" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/amishi-arora/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="mailto:amishia859@gmail.com" target="_blank"><i className="fa-regular fa-envelope"></i></a>
            </div>
        </nav>
    )
}
