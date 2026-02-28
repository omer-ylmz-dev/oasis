import { Variants } from 'framer-motion';

export const footerViewportConfig = {
  once: true,
  amount: 0.1
};

// Ana Footer konteyneri (Aşağıdan yukarı yumuşak giriş)
export const footerContainerVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

// Marka/Logo alanı (Sadece fade-in)
export const footerBrandVariants: Variants = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { duration: 0.4 } 
  }
};

// Navigasyon linkleri için (Soldan sağa staggered)
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

// Alt kısımdaki metinler ve sosyal medya (Gecikmeli fade-in)
export const footerBottomVariants = (delay: number): Variants => ({
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { duration: 0.5, delay } 
  }
});