import AboutImage from "../../components/AboutImage/AboutImage.jsx";
import AboutDecription from "../../components/AboutDescription/AboutDescription.jsx";
import styles from "./AboutSection.module.css";
export default function AboutSection() {
    return <section>
        <div className = {styles.aboutContent}>
            <AboutImage></AboutImage>
            <AboutDecription></AboutDecription>
        </div>
    </section>
}