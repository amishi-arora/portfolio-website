import styles from "./AboutImage.module.css"; 
export default function AboutImage() {
    return (
        <img className = {styles.aboutImage} src="src/assets/headshot.png" alt="headshot"/>
    )
}