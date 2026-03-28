import styles from "./Section.module.css"; 
export default function Section({children, id, title}) {
    return <section id = {id}>
        {title && <h2 data-aos="fade-up" className = {styles.title}>{title}</h2>}
        {children}
    </section>
}