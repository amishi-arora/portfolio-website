import AboutImage from "../AboutImage/AboutImage.jsx";
import AboutDescription from "../AboutDescription/AboutDescription.jsx"
import styles from "./AboutContent.module.css"

export default function AboutContent() {
    return (
        <div className={styles.aboutContentContainer}>
            <AboutImage />
            <AboutDescription />
        </div>
    )
}