"use client";

import { Link } from '@/i18n/routing';
import { useLocale } from "next-intl";
import { NAVBAR_LINKS } from "@/config/navigation.config";
import styles from "./Navbar.module.scss";
import { motion } from "framer-motion";
import { getNavLinkVariants } from './Navbar.animation';

interface NavLinksProps {
  variant: 'desktop' | 'mobile';
  onLinkClick?: () => void;
}

export default function NavLinks({ variant, onLinkClick }: NavLinksProps) {
  const locale = useLocale();
  const variantClass = styles[`navLinks-${variant}`];

  return (
    <ul className={variantClass}>
      {NAVBAR_LINKS.map((link, index) => (
        <motion.li
          key={link.href}
          variants={getNavLinkVariants(variant, index)}
          initial="initial"
          animate="animate"
        >
          <Link href={`/${link.href}`} onClick={() => onLinkClick?.()}>
            {link.label[locale as keyof typeof link.label]}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}