"use client"

import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import styles from "../Slider.module.scss";
import Overlay from "../Overlay";
import { SliderDataItem } from "@/shared/types/common.types";



interface HeroSliderProps {
    locale: string;
    onSlideChange?: (index: number) => void;
    data: SliderDataItem[];
    autoplay?: boolean;
}




export default function HeroSlider({ locale, data, onSlideChange, autoplay = false }: HeroSliderProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        const index = emblaApi.selectedScrollSnap();
        setSelectedIndex(index);
        onSlideChange?.(index);
    }, [emblaApi, onSlideChange]);


    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);

        let autoplayInterval: NodeJS.Timeout;
        if (autoplay) {
            autoplayInterval = setInterval(() => {
                emblaApi.scrollNext();
            }, 5000);
        }

        return () => {
            if (autoplayInterval) clearInterval(autoplayInterval);
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect, autoplay]);

    const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

    return (
        <div className={`${styles.sliderWrapper} ${styles.hero}`}>
            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {data.map((slide, index) => (
                        <div className={styles.emblaSlide} key={index}>
                            <Image
                                src={slide.image}
                                alt={slide.title[locale as keyof typeof slide.title]}
                                fill
                                sizes="100vw"
                                priority={index === 0}
                                className={styles.bgImage}
                            />
                        </div>
                    ))}
                </div>
            </div>


            <Overlay.hero
                locale={locale}
                data={data}
                selectedIndex={selectedIndex}
            />

            <div className={styles.dots}>
                {data.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === selectedIndex ? styles.dotActive : ''}`}
                        onClick={() => scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}