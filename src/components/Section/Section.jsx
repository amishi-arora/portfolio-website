import styles from "./Section.module.css"
export default function Section({children, id, title}) {
    return <section id = {id}>
        {title && <h1 className = {styles.title}>{title}</h1>}
        {children}
    </section>
}