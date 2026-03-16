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
                    {gitHubLink && <a href = {gitHubLink} className = {styles.gitHubButton} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {demoLink && <a href = {demoLink} className = {styles.demoButton} target="_blank" rel="noopener noreferrer">Demo</a>}
                </div>
            </div >
        </div>
    )
}