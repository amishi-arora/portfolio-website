import styles from "./AboutContent.module.css"
import headshot from "../../assets/headshot.png";
export default function AboutContent({content}) {
    return (
        <div data-aos="fade-up" data-aos-delay="200" className={styles.aboutContentContainer}>
            <img className={styles.aboutImage} src={headshot} alt="headshot" />
            <div className={styles.textContainer}>
                {content.map((p) => <p>{p}</p>)}
            </div>
        </div>
    )
}