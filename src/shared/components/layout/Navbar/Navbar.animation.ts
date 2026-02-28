import { Variants } from 'framer-motion';

export const navVariants: Variants = {
  initial: { y: -20, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export const logoVariants: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { duration: 0.5, delay: 0.2 } 
  }
};

export const languageSwitcherVariants: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { duration: 0.5, delay: 0.6 } 
  }
};

// NavLinks için Staggered (Sıralı) Animasyon
export const getNavLinkVariants = (variant: 'desktop' | 'mobile', index: number): Variants => {
  const isDesktop = variant === 'desktop';
  
  return {
    initial: isDesktop 
      ? { opacity: 0, y: -10 } 
      : { opacity: 0, x: -24 },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: isDesktop 
        ? { duration: 0.4, delay: 0.3 + (index * 0.1), ease: "easeOut" }
        : { duration: 0.6, delay: 0.35 + (index * 0.15), ease: [0.32, 0.72, 0, 1] }
    }
  };
};

export const mobileMenuVariants: Variants = {
  initial: { x: "-100%", opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  },
  exit: { 
    x: "-100%", 
    opacity: 0, 
    transition: { duration: 0.5, ease: "easeInOut" } 
  }
};

export const mobileMenuHeaderVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.9, delay: 0.7, ease: "easeOut" } 
  }
};