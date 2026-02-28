"use client";

import { Link } from '@/i18n/routing';
import styles from "./Navbar.module.scss";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenuButton from './MobileMenuButton';
import NavLinks from './NavLinks';
import { SITE_CONFIG } from '@/config/site.config';
import { motion } from "framer-motion"; 
import { languageSwitcherVariants, logoVariants, navVariants } from './Navbar.animation';

export default function Navbar() {
    return (
        <motion.nav 
            className={styles.navbar}
            variants={navVariants}
            initial="initial"
            animate="animate"
        >
            <div className={styles.container}>
                <MobileMenuButton />

                <motion.div variants={logoVariants}>
                    <Link href="/">
                        <h1 className={styles.logo} translate="no">{SITE_CONFIG.brand}</h1>
                    </Link>
                </motion.div>

                <NavLinks variant='desktop' />

                <motion.div variants={languageSwitcherVariants}>
                    <LanguageSwitcher />
                </motion.div>
            </div>
        </motion.nav>
    )
}

