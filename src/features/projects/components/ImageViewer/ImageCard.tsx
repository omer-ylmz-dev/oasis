import Image from 'next/image';
import styles from './ImageViewer.module.scss';

interface ImageCardProps {
  src: string;
  alt: string;
  isActive?: boolean;
}

const ImageCard = ({ src, alt, isActive = false }: ImageCardProps) => {
  return (
    <div className={`${styles.imageCard} ${isActive ? styles.imageCardActive : ''}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={alt}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
          priority={isActive}
        />
      </div>
    </div>
  );
};

export default ImageCard;