import styles from "./AboutContent.module.css"
import headshot from "../../assets/headshot.png"; 
export default function AboutContent() {
    return (
        <div className = {styles.aboutContentContainer}>
            <img className={styles.aboutImage} src={headshot} alt="headshot" />
            <div className={styles.textContainer}>
                <p>Hi, I'm Amishi! <br /> I'm a third year Computer Science student at the University of British Columbia,
                    passionate about building creative solutions that make a real-world impact. <br /> I have experience in both software development and software testing, equipping me with skills in writing reliable, well-tested code. I am currently interning as a QA Engineer at the BCMEA. <br /> Outside of work and academics, I enjoy baking, reading, and spending time with my family and friends! 
                </p>
            </div>
        </div>
    )
}