import { Variants } from 'framer-motion';

export const officeVariants = (index: number): Variants => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      delay: index * 0.2, 
      ease: [0.25, 1, 0.5, 1] 
    } 
  }
});

export const showroomVariants = (index: number): Variants => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7, 
      delay: index * 0.2, 
      ease: [0.25, 1, 0.5, 1] 
    } 
  }
});

export const locationViewportConfig = {
  once: true
};