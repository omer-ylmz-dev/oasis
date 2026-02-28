import { Variants } from 'framer-motion';

export const descriptionVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 } 
  }
};

export const getExpertCardVariants = (index: number): Variants => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      delay: (index % 3) * 0.15, 
      ease: "easeOut" 
    } 
  }
});

export const viewportConfig = {
  once: true,
  amount: 0.2
};