"use client"

import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import styles from "../Slider.module.scss";
import Overlay from "../Overlay";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { ModalState, useModalStore } from "@/store/useModalStore";


interface GallerySliderProps {
    path: string;
    onSlideChange?: (index: number) => void;
    data: string[];
    autoplay?: boolean;
}




export default function GallerySlider({ path, data, onSlideChange }: GallerySliderProps) {
    const openModal = useModalStore((state: ModalState) => state.openModal);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });

    const handleOpenLightbox = (index: number) => {
        openModal('LIGHTBOX_SLIDER', { images: data, startIndex: index });
      };

    const [selectedIndex, setSelectedIndex] = useState(0);
    
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        const index = emblaApi.selectedScrollSnap();
        setSelectedIndex(index);
        onSlideChange?.(index);
    }, [emblaApi, onSlideChange]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);


        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);


    const formatPath = (text: string) => {
        return text
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const baseAlt = formatPath(path);
    
    return (
        <div className={`${styles.sliderWrapper} ${styles.gallery}`}>
            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {data.map((slide, index) => (
                        <div className={styles.emblaSlide} key={index} onClick={() => handleOpenLightbox(index)} style={{ cursor: 'zoom-in' }}>
                            <Image
                                src={slide}
                                alt={`${baseAlt} - ${index + 1}`}
                                fill
                                priority={index === 0}
                                className={styles.bgImage}
                            />
                        </div>
                    ))}
                </div>
            </div>


            <Overlay.gallery />

            <button className={`${styles.navBtn} ${styles.prev}`} onClick={scrollPrev}>
                <MdKeyboardArrowLeft size={30} />
            </button>
            <button className={`${styles.navBtn} ${styles.next}`} onClick={scrollNext}>
                <MdKeyboardArrowRight size={30} />
            </button>
        </div>
    );
}