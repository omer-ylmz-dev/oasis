import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './InfoSection.module.scss'
import { useLocale } from 'next-intl';
import { InfoItem } from './types';
import { getInfoTextVariants, infoViewportConfig } from './InfoSection.animation';
import { Locale, LocalizedString } from '@/shared/types/common.types';

interface InfoSectionProps {
    item: InfoItem
}

export default function InfoSection({ item }: InfoSectionProps) {
    const locale = useLocale() as Locale;
    const isRtl = item.direction === 'rtl'

    const sectionClass = `${styles.infoSection} ${item.direction === 'rtl' ? styles.reverse : ''}`;

    const getVal = (val: LocalizedString | string | undefined): string => {
        if (!val) return '';
        if (typeof val === 'string') return val;
        return val[locale];
      };

   


    return (
        <section className={sectionClass}>
            <motion.div
                className={styles.textContent}
                variants={getInfoTextVariants(isRtl)}
                initial="initial"
                whileInView="whileInView"
                viewport={infoViewportConfig}
            >
                <div className={styles.titleGroup}>
                    <span>{getVal(item.category)}</span>
                    <h1>{getVal(item.title)}</h1>
                </div>
                <p>{getVal(item.content)}</p>
            </motion.div>

            <div className={styles.imageContainer}>
                <Image
                    src={item.image}
                    alt={getVal(item.title)}
                    fill
                    priority
                    sizes="(max-width: 500px) 100vw, 500px"
                    quality={85}
                />
            </div>
        </section>
    )
}