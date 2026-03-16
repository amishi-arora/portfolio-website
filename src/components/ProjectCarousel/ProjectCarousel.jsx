import useEmblaCarousel from 'embla-carousel-react'
import styles from "./ProjectCarousel.module.css"
import ProjectSlide from '../ProjectSlide/ProjectSlide'
import projectDescriptions from "../../ProjectDescriptions.js";

export default function ProjectCarousel() {
    const [carouselRef, carouselApi] = useEmblaCarousel({ loop: false, duration: 30 })
    const goToPrev = () => carouselApi.scrollPrev() 
    const goToNext = () => carouselApi.scrollNext()

    return (
        <div>
            <div className={styles.viewport} ref={carouselRef}>
                <div className={styles.container}>
                    {projectDescriptions.map(p => <ProjectSlide key = {p.title} title = {p.title} description = {p.description} image = {p.image} tags = {p.tags} gitHubLink = {p.gitHubLink} demoLink = {p.demoLink}/>)}
                </div>
            </div>

            <div>
                
            </div>
            <button className = {styles.nextAndPrevButt} onClick={goToPrev}>
                &#8249;
            </button>
            <button className = {styles.nextAndPrevButt}  onClick={goToNext}>
                &#8250;
            </button>


        </div>
    )
}
