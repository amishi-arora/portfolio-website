import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import styles from "./ProjectCarousel.module.css"
import ProjectSlide from '../ProjectSlide/ProjectSlide'
import projectDescriptions from "../../ProjectDescriptions.js";

export default function ProjectCarousel() {
    const [carouselRef, carouselApi] = useEmblaCarousel({ loop: true, duration: 30})
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const goToPrev = () => carouselApi?.scrollPrev()
    const goToNext = () => carouselApi?.scrollNext()
    const goTo = (index) => carouselApi?.scrollTo(index)

    const setupSnaps = useCallback((api) => {
        setScrollSnaps(api.scrollSnapList());
    }, []);

    const onSelect = useCallback((api) => {
        setSelectedIndex(api.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!carouselApi) return;
        setupSnaps(carouselApi)
        onSelect(carouselApi);
        carouselApi.on('select', onSelect);
        carouselApi.on('reinit', setupSnaps);
    }, [carouselApi, setupSnaps, onSelect])


    return (
        <div data-aos="fade-up" data-aos-delay="200" className={styles.wrapper}>

            <div className={styles.viewport} ref={carouselRef}>
                <div className={styles.container}>
                    {projectDescriptions.map((p, index) => <ProjectSlide key={p.title} title={p.title} description={p.description} image={p.image} tags={p.tags} gitHubLink={p.gitHubLink} demoLink={p.demoLink} isSelected = {index === selectedIndex}/>)}
                </div>
            </div>

            <div className={styles.carouselControls}>
                <button className={styles.nextAndPrevButt} onClick={goToPrev}>
                    &#8249;
                </button>
                <div className={styles.dotsContainer}>
                    {
                        scrollSnaps.map((_, index) => {
                            const isActive = index === selectedIndex;
                            return <button
                                className={`${styles.slideDots} ${isActive ? styles.highlightedDot : ""}`}
                                key={index}
                                onClick={() => goTo(index)}
                            >
                            </button>
                        })}
                </div>
                <button className={styles.nextAndPrevButt} onClick={goToNext}>
                    &#8250;
                </button>

            </div>
        </div>
    )
}
