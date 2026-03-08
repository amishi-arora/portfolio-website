export default function Section({children, id, title}) {
    return <section id = {id}>
        {title && <h2>{title}</h2>}
        {children}
    </section>
}