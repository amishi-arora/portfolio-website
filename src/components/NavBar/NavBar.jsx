import styles from "./NavBar.module.css"
export default function NavBar() {
    return (
        <nav className = {styles.navBar}>
            <a href="#homeSection">Home</a>
            <a href="#aboutSection">About</a>
            <a href="#projectSection">Project</a>
        </nav>
    )
}