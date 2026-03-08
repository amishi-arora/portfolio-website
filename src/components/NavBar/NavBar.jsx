import styles from "./NavBar.module.css"
import logo from "../../assets/logo.png"
export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <div>
                <img className = {styles.logoImage} src={logo} alt="logo image" />
            </div>
            <div className={styles.links}>
                <a href="#homeSection">Home</a>
                <a href="#aboutSection">About</a>
                <a href="#projectSection">Projects</a>
            </div>
        </nav>
    )
}