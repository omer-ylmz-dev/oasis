import { formatDate } from "@/shared/utils/date";
import Breadcrumb from "../../../../layout/Breadcrumb";
import styles from "../Overlay.module.scss"

interface StaticHeroOverlayProps {
    title: string;
    locale: string;
    date?: string;
    showBreadcrumb?: boolean;
    breadcrumbs?: Array<{ href: string; label: string }>;
}

export default function StaticHeroOverlay({ title, locale, date, showBreadcrumb, breadcrumbs }: StaticHeroOverlayProps) {
    
    
    const upperTitle = title.toLocaleUpperCase(
        locale === 'tr' ? 'tr-TR' : locale === 'az' ? 'az-AZ' : 'en-US'
    );

    return (
        <>
            <div className={styles.overlay}></div>
            <div className={`${styles.content} ${styles.breadcrumbVariant}`}>
                {date && (
                    <span className={styles.label}>
                        {formatDate(date)}
                    </span>
                )}
                <h1 className={styles.title}>{upperTitle}</h1>
                {showBreadcrumb && breadcrumbs && (
                    <Breadcrumb items={breadcrumbs} />
                )}
            </div>
        </>
    );
}