import { Variants } from 'framer-motion';

export const footerViewportConfig = {
  once: true,
  amount: 0.1
};


export const footerContainerVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};


export const footerBrandVariants: Variants = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { duration: 0.4 } 
  }
};


export const getFooterNavLinkVariants = (index: number): Variants => ({
  initial: { opacity: 0, x: -15 },
  whileInView: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5, 
      delay: index * 0.1, 
      ease: "easeOut"
    } 
  }
});


export const footerBottomVariants = (delay: number): Variants => ({
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { duration: 0.5, delay } 
  }
});