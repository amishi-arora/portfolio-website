import styles from "./ProjectSlide.module.css"

export default function ProjectSlide({title, description, image, tags, gitHubLink, demoLink}) {
    return (
        <div className={styles.slide}>

            <div className={styles.imageContainer}>
                <img src={image} className={styles.image} alt="Project Image" />
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                <div className={styles.tags}>
                    {tags && tags.map(t => <span>{t}</span>)}
                </div>

                <div className={styles.actions}>
                    {gitHubLink && <button className = {styles.gitHubButton}>GitHub</button>}
                    {demoLink && <button className = {styles.demoButton}>Demo</button>}
                </div>
            </div >
        </div>
    )
}