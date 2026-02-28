"use client";

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Button from "../../ui/Button"
import Input from "../../ui/Input"
import styles from "./SubscribeSection.module.scss"
import { 
    subscribeContainerVariants, 
    subscribeItemVariants, 
    subscribeViewportConfig 
} from "./SubscribeSection.animation"

export default function SubscribeSection() {
    const t = useTranslations("Layout.Subscribe");

    return (
        <section className={styles.subscribe}>
            <motion.div 
                className={styles.container}
                variants={subscribeContainerVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={subscribeViewportConfig}
            >
                <motion.h1 variants={subscribeItemVariants}>
                    {t("heading")}
                </motion.h1>

                <motion.p variants={subscribeItemVariants}>
                    {t("summary")}
                </motion.p>
                
                <motion.form 
                    action="" 
                    variants={subscribeItemVariants}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <Input type="email" placeholder={t("input_placeholder")} />
                    <Button.primary type="submit">
                        {t("submit_label")}
                    </Button.primary>
                </motion.form>
            </motion.div>
        </section>
    )
}