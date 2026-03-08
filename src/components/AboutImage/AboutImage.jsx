import styles from "./AboutImage.module.css"; 
import headshot from "../../assets/headshot.png"; 
export default function AboutImage() {
    return (
        <img className = {styles.aboutImage} src={headshot}alt="headshot"/>
    )
}