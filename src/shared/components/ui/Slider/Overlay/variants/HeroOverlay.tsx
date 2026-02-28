import { SliderDataItem } from "@/shared/types/common.types";
import styles from "../Overlay.module.scss"

interface HeroOverlayProps {
    locale: string;
    data: SliderDataItem[];
    selectedIndex: number;
}



export default function HeroOverlay({ locale, data, selectedIndex }: HeroOverlayProps) {
    const item = data[selectedIndex];

    return (
        <>
            <div className={`${styles.overlay} ${styles.hero}`}></div>
            <div className={`${styles.content} ${styles.heroVariant}`}>
                <h1 className={styles.title}>
                    {item.title[locale].toLocaleUpperCase(locale === 'tr' ? 'tr-TR' : locale === 'az' ? 'az-AZ' : 'en-US')}
                </h1>
                <p className={styles.description}>
                    {item.description?.[locale]}
                </p>
            </div>
        </>
    )
}