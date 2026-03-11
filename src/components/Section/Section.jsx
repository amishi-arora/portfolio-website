import styles from "./Section.module.css"; 
export default function Section({children, id, title}) {
    return <section id = {id}>
        {title && <h2 className = {styles.title}>{title}</h2>}
        {children}
    </section>
}