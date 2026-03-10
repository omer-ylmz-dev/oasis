import { Variants } from 'framer-motion';



export const subscribeViewportConfig = {
  once: true,
  amount: 0.2
};



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
      staggerChildren: 0.15, 
      delayChildren: 0.1     
    } 
  }
};




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