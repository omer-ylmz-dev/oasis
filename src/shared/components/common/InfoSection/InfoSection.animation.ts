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
      duration: 0.6, 
      ease: 'easeOut'
    } 
  }
});

export const infoViewportConfig = {
  once: true,
  amount: 0.3
};