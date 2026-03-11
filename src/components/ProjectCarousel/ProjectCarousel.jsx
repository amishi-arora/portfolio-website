import useEmblaCarousel from 'embla-carousel-react'
import styles from "./ProjectCarousel.module.css"
import ProjectSlide from '../ProjectSlide/ProjectSlide'

export default function ProjectCarousel() {
    const [carouselRef, carouselApi] = useEmblaCarousel({ loop: false })
    const goToPrev = () => carouselApi.scrollPrev() 
    const goToNext = () => carouselApi.scrollNext()

    return (
        <div>
            <div className={styles.viewport} ref={carouselRef}>
                <div className={styles.container}>
                    {/* slides here */}
                </div>
            </div>

            <button onClick={goToPrev}>
                Scroll to prev
            </button>
            <button onClick={goToNext}>
                Scroll to next
            </button>
        </div>
    )
}
