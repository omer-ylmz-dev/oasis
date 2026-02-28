import { Variants } from 'framer-motion';

export const statCardVariants: Variants = {
  initial: { opacity: 0, y: 40 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    } 
  }
};

export const statViewportConfig = {
  once: true, 
  amount: 0.5
};