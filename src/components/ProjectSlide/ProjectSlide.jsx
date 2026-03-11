import styles from "./ProjectSlide.module.css"
import DoAndDone from "../../assets/DoAndDone.png"

export default function ProjectSlide() {
    return (
        <div className={styles.slide}>

            <div className={styles.imageContainer}>
                <img src={DoAndDone} className={styles.image} alt="Do and Done homepage image" />
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>Do and Done</h3>
                <p className={styles.description}>This project was created for my Introduction to Relational Databases course.
                    I worked with two other team members to create a full-stack project for managing recipes and cooking course registrations.
                    We designed a database schema
                </p>

                <div className={styles.tags}>
                    <span>JavaScript</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>FireBase</span>
                </div>

                <div className={styles.actions}>
                    <button className = {styles.gitHubButton}>GitHub</button>
                    <button className = {styles.demoButton}>Demo</button>
                </div>
            </div >
        </div>
    )
}