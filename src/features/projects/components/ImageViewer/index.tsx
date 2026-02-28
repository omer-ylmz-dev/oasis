'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ImageCard from './ImageCard';
import styles from './ImageViewer.module.scss';
import { useTranslations } from 'next-intl';
import { ModalState, useModalStore } from '@/store/useModalStore';

interface ImageViewerProps {
  images?: string[];
}

const ImageViewer = ({ images = [] }: ImageViewerProps) => {
  const openModal = useModalStore((state: ModalState) => state.openModal);
  const t = useTranslations("Pages.Projects.Gallery");

  const handleOpenLightbox = (index: number) => {
    openModal('LIGHTBOX_SLIDER', { images, startIndex: index });
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
    containScroll: false,
    slidesToScroll: 1,
    breakpoints: {
      '(max-width: 640px)': { containScroll: 'trimSnaps' },
    }
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);



  return (
    <div className={styles.imageViewer}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t("heading")}</h2>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {images.length > 0 && images.map((image, index) => (
              <div className={styles.emblaSlide} key={index} onClick={() => handleOpenLightbox(index)} style={{ cursor: 'zoom-in' }}>
                <ImageCard
                  src={image}
                  alt={`Photo ${index + 1}`}
                  isActive={index === selectedIndex}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;