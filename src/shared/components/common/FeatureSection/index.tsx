import styles from "./FeatureSection.module.scss"
import FeatureCard from './FeatureCard';
import { useLocale } from "next-intl";
import { FeatureSectionData } from "@/features/home/types";
import { motion } from "framer-motion";
import { featureHeaderVariants, featureViewportConfig } from "./FeatureSection.animation";
import { Locale, LocalizedString } from "@/shared/types/common.types";


interface FeatureSectionProps {
    features: FeatureSectionData;
    variant: "home" | "projects";
}

export default function FeatureSection({ features, variant = "home" }: FeatureSectionProps) {
    const locale = useLocale() as Locale;

    const getVal = (val: LocalizedString | string | undefined): string => {
        if (!val) return '';
        if (typeof val === 'string') return val;
        return val[locale];
      };

    

    const titleText = features.title ? getVal(features.title) : '';
    const descText = features.description ? getVal(features.description) : '';

    return (
        <div className={styles.container}>
            {(features.title || features.description) && (
                <div className={styles.description}>
                    {features.title && (
                        <motion.h1
                            variants={featureHeaderVariants(0)}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={featureViewportConfig}
                        >
                            {titleText}
                        </motion.h1>
                    )}
                    {features.description && (
                        <motion.p
                            variants={featureHeaderVariants(0.2)}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={featureViewportConfig}
                        >
                            {descText}
                        </motion.p>
                    )}
                </div>
            )}
            <div className={styles.grid}>
                {features.items.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <FeatureCard
                            key={index}
                            index={index}
                            variant={variant}
                            title={getVal(item.title)}
                            description={getVal(item.description)}
                            icon={Icon ? <Icon size={25} /> : null}
                        />
                    )
                })}
            </div>
        </div>
    )
}

