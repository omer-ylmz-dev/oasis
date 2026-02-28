"use client";

import { motion } from "framer-motion"; 
import styles from "../Navbar.module.scss"
import Button from '@/shared/components/ui/Button'
import { IoMdClose } from 'react-icons/io'
import NavLinks from '../NavLinks'
import { ModalState, useModalStore } from "@/store/useModalStore";
import { useTranslations } from "next-intl";
import { mobileMenuHeaderVariants, mobileMenuVariants } from "../Navbar.animation";

export default function MobileMenu() {
    const t = useTranslations("Layout.Navbar");
    const closeModal = useModalStore((state: ModalState) => state.closeModal);

    return (
        <motion.aside
            className={styles.mobileMenu}
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <header className={styles.header}>
                <motion.h1 variants={mobileMenuHeaderVariants}>
                    {t("menu")}
                </motion.h1>

                <Button.link onClick={closeModal} aria-label="Close button">
                    <IoMdClose size={35} color='black' />
                </Button.link>
            </header>

            <motion.nav
                className={styles.navWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <NavLinks variant='mobile' onLinkClick={closeModal} />
            </motion.nav>
        </motion.aside>
    )
}