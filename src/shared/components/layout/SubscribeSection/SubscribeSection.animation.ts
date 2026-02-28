import { Variants } from 'framer-motion';

export const subscribeViewportConfig = {
  once: true,
  amount: 0.2
};

// Parent Konteyner: Çocukları sırayla tetikler
export const subscribeContainerVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 40 
  },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15, // Çocukların (h1, p, form) arasındaki gecikme
      delayChildren: 0.1     // İlk çocuğun başlamadan önceki beklemesi
    } 
  }
};

// Çocuk Öğeler (H1, P, Form): Ortak animasyon yapısı
export const subscribeItemVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut" 
    } 
  }
};