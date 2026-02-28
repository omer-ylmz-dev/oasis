import { Variants } from 'framer-motion';

export const getInfoTextVariants = (isRtl: boolean): Variants => ({
  initial: { 
    opacity: 0, 
    x: isRtl ? 60 : -60 
  },
  whileInView: { 
    opacity: 1, 
    x: 0,
    transition: { 
     /*  duration: 0.8, // Biraz daha oturaklı bir giriş için süreyi hafif artırdım
      ease: [0.22, 1, 0.36, 1] // Quint Out ease: Daha profesyonel bir duruş sağlar */
      duration: 0.6, 
      ease: 'easeOut'
    } 
  }
});

export const infoViewportConfig = {
  once: true,
  amount: 0.3
};