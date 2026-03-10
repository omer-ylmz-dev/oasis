"use client"

import styles from "./Footer.module.scss"
import { Link } from '@/i18n/routing';
import { useLocale, useTranslations } from "next-intl"
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/config/navigation.config"
import { SITE_CONFIG } from "@/config/site.config"
import { motion } from "framer-motion" 
import { footerBottomVariants, footerBrandVariants, footerContainerVariants, footerViewportConfig, getFooterNavLinkVariants } from "./Footer.animation";

export default function Footer() {
  const locale = useLocale()
  const t = useTranslations("Layout.Footer");

  return (
    <motion.footer 
    className={styles.footer}
    variants={footerContainerVariants}
    initial="initial"
    whileInView="whileInView"
    viewport={footerViewportConfig}
    >
      <div className={styles.container}>
        <div className={styles.upperside}>
        
          <motion.h1 
            translate="no"
            variants={footerBrandVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={footerViewportConfig}
          >
            {SITE_CONFIG.brand}
          </motion.h1>

          <ul className={styles.navLinks}>
            {FOOTER_LINKS.map((link, index) => (
              
              <motion.li 
              key={link.href} 
              className={index !== 0 ? styles.withDot : ''}
              variants={getFooterNavLinkVariants(index)}
              initial="initial"
              whileInView="whileInView"
              viewport={footerViewportConfig}
              >
                <Link href={`/${link.href}`} scroll={false}>
                  {link.label[locale as keyof typeof link.label]}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className={styles.lowerside}>
         
          <motion.p
            variants={footerBottomVariants(0.3)}
            initial="initial"
            whileInView="whileInView"
            viewport={footerViewportConfig}
          >
            {t('copyright', {
              year: SITE_CONFIG.currentYear,
              brand: SITE_CONFIG.brand
            })}
          </motion.p>

          <motion.div
            variants={footerBottomVariants(0.4)}
            initial="initial"
            whileInView="whileInView"
            viewport={footerViewportConfig}
          >
            <Link href={SITE_CONFIG.developer.link} scroll={false}>
              {t('developedBy', {
                name: SITE_CONFIG.developer.name
              })}
            </Link>
          </motion.div>

          <motion.div 
             className={styles.social}
             variants={footerBottomVariants(0.5)}
             initial="initial"
             whileInView="whileInView"
             viewport={footerViewportConfig}
          >
            {SOCIAL_LINKS.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  href={link.href}
                  aria-label={`Social link ${index + 1}`}
                  className="hover:opacity-70 transition-opacity"
                  scroll={false}
                >
                  <Icon />
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
