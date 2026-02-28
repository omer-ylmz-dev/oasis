"use client";

import styles from "./ExpertSection.module.scss"
import ExpertCard from './ExpertCard';
import { ExpertSectionData } from "@/config/about.config";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { descriptionVariants, viewportConfig } from "./ExpertSection.animation";

interface ExpertSectionProps {
    experts: ExpertSectionData;
}

export default function ExpertSection({ experts }: ExpertSectionProps) {
    const locale = useLocale();

    return (
        <div className={styles.container}>
            {(experts.title[locale] || experts.description[locale]) && (
                <motion.div
                    className={styles.description}
                    variants={descriptionVariants}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={viewportConfig}
                >
                    {experts.title[locale] && <h1>{experts.title[locale]}</h1>}
                    {experts.description[locale] && <p>{experts.description[locale]}</p>}
                </motion.div>
            )}
            <div className={styles.grid}>
                {experts.items.map((item, index) => (
                    <ExpertCard
                        key={index}
                        item={item}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}
