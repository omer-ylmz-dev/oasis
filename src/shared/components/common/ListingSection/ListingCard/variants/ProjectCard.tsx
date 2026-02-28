import Image from 'next/image'
import styles from "../ListingCard.module.scss"
import { getProjectLocationLabel } from '@/shared/utils/location';
import { getProjectStatusLabel } from '@/features/projects/utils/project-label';
import { Link } from '@/i18n/routing';
import { ProjectListItem } from '@/features/projects/types/project.types';
import { Locale } from '@/shared/types/common.types';


export default function ProjectCard({ item, locale }: { item: ProjectListItem; locale: Locale }) {
    const locationLabel = getProjectLocationLabel(item.location, locale);
    const statusLabel = getProjectStatusLabel(item.overview.status, locale);


    return (
        <Link href={`/projects/${item.slug}`} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
            <div className={styles.imageContainer}>
                <Image
                    src={item.thumbnail}
                    alt={item.name}
                    fill
                />
                <div className={styles.overlay}>
                    <span className={styles.statusLabel}>
                        {statusLabel}
                    </span>
                </div>
            </div>
            <div className={styles.description}>
                <h1>{item.name}</h1>
                <p>{locationLabel}</p>
            </div>
        </Link>
    )
}