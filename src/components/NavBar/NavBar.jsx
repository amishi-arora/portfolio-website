import styles from "./NavBar.module.css"
import logoImage from "../../assets/logoImage.png"
export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <div>
                <img className = {styles.logoImage} src={logoImage} alt="logo image" />
            </div>
            <div className={styles.links}>
                <a href="#homeSection">Home</a>
                <a href="#aboutSection">About</a>
                <a href="#projectSection">Projects</a>
            </div>
        </nav>
    )
}