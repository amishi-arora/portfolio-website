import styles from "./NavBar.module.css"

export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <div className={styles.linksGroup}>
                <a href="#homeSection">Home</a>
                <a href="#aboutSection">About</a>
                <a href="#projectSection">Projects</a>
            </div>
            <div className={styles.contact}>
                <a href="https://github.com/amishi-arora" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/amishi-arora/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="mailto:amishia859@gmail.com" target="_blank"><i class="fa-regular fa-envelope"></i></a>
            </div>
        </nav>
    )
}
