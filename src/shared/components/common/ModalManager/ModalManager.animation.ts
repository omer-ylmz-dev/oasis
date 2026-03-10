import { Transition, Variants } from 'framer-motion';


export const overlayVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const overlayTransition: Transition = {
  duration: 0.6,
  ease: "easeInOut"
};


export const drawerVariants: Variants = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" }
};

export const drawerTransition: Transition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1]
};