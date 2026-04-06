import styles from "./AboutContent.module.css"
import headshot from "../../assets/headshot.png";
export default function AboutContent({ content }) {
    return (
        <div data-aos="fade-up" data-aos-delay="200" className={styles.aboutContentContainer}>
            <img className={styles.aboutImage} src={headshot} alt="headshot" />
            <div className={styles.textContainer}>
                {content.map((p) => <p>{p}</p>)}
                <p className = {styles.links}>Check out my <a href="https://github.com/amishi-arora" target="_blank">GitHub</a> <br />
                    Get in touch through my <a href="mailto:amishia859@gmail.com" target="_blank">Email</a> or <a href="https://www.linkedin.com/in/amishi-arora/" target="_blank">LinkedIn</a></p>
            </div>
        </div>
    )
}