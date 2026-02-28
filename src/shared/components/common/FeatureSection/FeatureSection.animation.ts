import { Variants } from 'framer-motion';

export const featureViewportConfig = {
  once: true,
  amount: 0.3
};

// Başlık ve Açıklama için (Soldan içeri kayma)
export const featureHeaderVariants = (delay: number = 0): Variants => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: 'easeOut',
      delay 
    } 
  }
});

// Feature Kartları için (Sıralı belirme)
export const featureCardVariants = (index: number): Variants => ({
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut', 
      delay: index * 0.1 
    } 
  }
});