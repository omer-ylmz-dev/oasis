"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdClose } from "react-icons/md";
import { useModalStore, ModalState } from "@/store/useModalStore";
import styles from "./LightboxSlider.module.scss";
import Button from "../../Button";
import { IoMdClose } from "react-icons/io";

interface LightboxSliderProps {
    images: string[];
    startIndex?: number;
}

export default function LightboxSlider({ images, startIndex = 0 }: LightboxSliderProps) {
    

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        duration: 20,
        startIndex,
    });

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    // Arrow key navigation — ESC zaten ModalManager'da handle ediliyor
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") emblaApi?.scrollPrev();
            if (e.key === "ArrowRight") emblaApi?.scrollNext();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [emblaApi]);

    return (
        <div className={styles.lightbox}>
            <div className={styles.sliderWrapper}>
                <div className={styles.embla} ref={emblaRef}>
                    <div className={styles.emblaContainer}>
                        {images.map((src, index) => (
                            <div className={styles.emblaSlide} key={index}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={src}
                                        alt={`Image ${index + 1}`}
                                        fill
                                        priority={index === startIndex}
                                        className={styles.image}
                                        sizes="90vw"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className={`${styles.navBtn} ${styles.prev}`}
                    onClick={scrollPrev}
                    aria-label="Previous image"
                >
                    <MdKeyboardArrowLeft size={36} />
                </button>
                <button
                    className={`${styles.navBtn} ${styles.next}`}
                    onClick={scrollNext}
                    aria-label="Next image"
                >
                    <MdKeyboardArrowRight size={36} />
                </button>
            </div>
        </div>
    );
}