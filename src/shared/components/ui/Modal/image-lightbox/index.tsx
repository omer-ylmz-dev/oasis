import { ModalState, useModalStore } from '@/store/useModalStore'
import styles from './ImageLightbox.module.scss'
import Image from 'next/image';
import Button from '../../Button';
import { IoMdClose } from 'react-icons/io';

export default function ImageLightboxModal() {
  const { props, closeModal } = useModalStore();
  const { imageUrl, altText } = props;

  if (!imageUrl) return null;

  return (
    <div className={styles.ImageLightbox}>
      <div className={styles.container}>
        <div className={styles.closeModalBtnWrapper}>
          <Button.link onClick={closeModal} aria-label="Close button">
            <IoMdClose size={30} />
          </Button.link>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl}
            alt={altText || "Lightbox Image"}
            fill
            sizes="(max-width: 1200px) 90vw, 1200px"
            priority
          />
        </div>
      </div>
    </div>
  )
}