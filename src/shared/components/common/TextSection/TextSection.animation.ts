import { Variants } from 'framer-motion';

export const textViewportConfig = {
  once: true,
  amount: 0.3
};

// Başlık ve temel metin bloğu için
export const textFadeUpVariants: Variants = {
  initial: { opacity: 0, y: 40 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

// Paragraflar veya ardışık öğeler için dinamik delay varyantı
export const getStaggeredTextVariants = (index: number): Variants => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut', 
      delay: index * 0.1 
    } 
  }
});

// Alıntı (Quote) yazarı için özel delay
export const quoteAuthorVariants: Variants = {
  initial: { opacity: 0, y: 40 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.15 } 
  }
};