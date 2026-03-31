import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import styles from "./ProjectCarousel.module.css"
import ProjectSlide from '../ProjectSlide/ProjectSlide'
import projectDescriptions from "../../ProjectDescriptions.js";

export default function ProjectCarousel() {
    const [carouselRef, carouselApi] = useEmblaCarousel({ loop: false, duration: 30 })
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [highlightedIndex, setIndex] = useState(0);

    const goToPrev = () => carouselApi?.scrollPrev()
    const goToNext = () => carouselApi?.scrollNext()

    const goTo = (index) => carouselApi?.scrollTo(index)
    const setupSnaps = (carouselApi) => setScrollSnaps(carouselApi.scrollSnapList())
    let nextButtonDisabled = false;
    let prevButtonDisabled = false;

    if (highlightedIndex === 0) {
        prevButtonDisabled = true;
    } else if (highlightedIndex === scrollSnaps.length - 1) {
        nextButtonDisabled = true;
    }

    useEffect(() => {
        if (!carouselApi) return;
        setupSnaps(carouselApi)
        carouselApi.on('reinit', setupSnaps)
    }, [carouselApi])

    function handleDotClick(index) {
        goTo(index);
        setIndex(index);
    }

    function handleNextClick() {
        setIndex(prevIndex => prevIndex + 1);
        goToNext();
    }


    function handlePrevClick() {
        setIndex(prevIndex => prevIndex - 1);
        goToPrev();
    }

    return (
        <div data-aos="fade-up" data-aos-delay="200" className={styles.wrapper}>

            <div className={styles.viewportAndButtons}>
                <button className={styles.nextAndPrevButt} onClick={handlePrevClick} disabled={prevButtonDisabled}>
                    &#8249;
                </button>
                <div className={styles.viewport} ref={carouselRef}>
                    <div className={styles.container}>
                        {projectDescriptions.map(p => <ProjectSlide key={p.title} title={p.title} description={p.description} image={p.image} tags={p.tags} gitHubLink={p.gitHubLink} demoLink={p.demoLink} />)}
                    </div>
                </div>
                <button className={styles.nextAndPrevButt} onClick={handleNextClick} disabled={nextButtonDisabled}>
                    &#8250;
                </button>
            </div>
            <div className={styles.dotsContainer}>
                {
                    scrollSnaps.map((_, index) => {
                        const isActive = index === highlightedIndex;
                        return <button
                            className={`${styles.slideDots} ${isActive ? styles.highlightedDot : ""}`}
                            key={index}
                            onClick={() => handleDotClick(index)}
                        >
                        </button>
                    })}
            </div>
        </div>
    )
}
