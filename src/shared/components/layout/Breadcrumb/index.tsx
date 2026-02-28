"use client"

import { Link } from '@/i18n/routing';
import styles from "./Breadcrumb.module.scss";

interface BreadcrumbItem {
    href: string;
    label: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    if (!items || items.length === 0) return null;

    
    return (
        <nav className={styles.breadcrumb}>
            {items.map((item, index) => (
                <span key={item.href} className={styles.crumbWrapper}>
                    <Link
                        href={item.href as string}
                        className={styles.crumbLink}
                        scroll={false}
                    >
                        {item.label}
                    </Link>

                    {index < items.length - 1 && (
                        <span className={styles.separator}> &gt; </span>
                    )}
                </span>
            ))}
        </nav>
    );
}