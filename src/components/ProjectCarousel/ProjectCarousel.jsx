import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import styles from "./ProjectCarousel.module.css"
import ProjectSlide from '../ProjectSlide/ProjectSlide'
import projectDescriptions from "../../ProjectDescriptions.js";

export default function ProjectCarousel() {
    const [carouselRef, carouselApi] = useEmblaCarousel({ loop: false, duration: 30 })
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const goToPrev = () => carouselApi?.scrollPrev()
    const goToNext = () => carouselApi?.scrollNext()

    const goTo = (index) => carouselApi?.scrollTo(index)
    const setupSnaps = (carouselApi) => setScrollSnaps(carouselApi.scrollSnapList())

    useEffect(() => {
        if (!carouselApi) return;
        setupSnaps(carouselApi)
        carouselApi.on('reinit', setupSnaps)
    }, [carouselApi])


    return (
        <div className = {styles.wrapper}>
            <div className={styles.viewport} ref={carouselRef}>
                <div className={styles.container}>
                    {projectDescriptions.map(p => <ProjectSlide key={p.title} title={p.title} description={p.description} image={p.image} tags={p.tags} gitHubLink={p.gitHubLink} demoLink={p.demoLink} />)}
                </div>
            </div>


            <div className={styles.carouselControls}>
                <div >
                    <button className={styles.nextAndPrevButt} onClick={goToPrev}>
                        &#8249;
                    </button>
                    <button className={styles.nextAndPrevButt} onClick={goToNext}>
                        &#8250;
                    </button>
                </div>

                <div className={styles.dotsContainer}>
                    {scrollSnaps.map((_, index) => (
                        <button
                            className={styles.slideDots}
                            key={index}
                            onClick={() => goTo(index)}
                        >
                        </button>
                    ))}
                </div>
            </div>

        </div>
    )
}
