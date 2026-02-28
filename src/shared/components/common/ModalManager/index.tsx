"use client";

import { useState, useEffect } from "react";
import { useModalStore } from "@/store/useModalStore";
import { MODAL_COMPONENTS } from "./ModalRegistry";
import styles from "./ModalManager.module.scss";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { drawerTransition, drawerVariants, overlayTransition, overlayVariants } from "./ModalManager.animation";


export default function ModalManager() {
    const [mounted, setMounted] = useState(false);
    const { type, props, isOpen, closeModal } = useModalStore();

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [closeModal]);

    if (!mounted) return null;



    const ActiveModal = MODAL_COMPONENTS[type as keyof typeof MODAL_COMPONENTS] as React.ComponentType<any>;

    const getContentClass = () => {
        if (type === 'MOBILE_MENU') return styles.drawer;
        if (type === 'LIGHTBOX_SLIDER') return styles.lightboxContent;
        return styles.modalContent;
    };

    return (
        <AnimatePresence mode="wait">
            {isOpen && type && (
                <motion.div
                    key="modal-overlay"
                    className={styles.overlay}
                    onClick={closeModal}
                    variants={overlayVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={overlayTransition}
                >
                    {type !== 'MOBILE_MENU' && (
                        <button className={styles.closeBtn} onClick={closeModal} aria-label="Close">
                            <MdClose size={26} />
                        </button>
                    )}
                    {type === 'MOBILE_MENU' ? (
                        <motion.div
                            className={getContentClass()}
                            onClick={(e) => e.stopPropagation()}
                            variants={drawerVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={drawerTransition}
                        >
                            <ActiveModal {...props} />
                        </motion.div>
                    ) : (
                        <div
                            className={getContentClass()}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ActiveModal {...props} />
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
