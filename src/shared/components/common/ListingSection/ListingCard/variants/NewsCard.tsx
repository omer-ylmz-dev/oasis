import Image from 'next/image'
import styles from "../ListingCard.module.scss"
import { formatDate } from '@/shared/utils/date'
import { Link } from '@/i18n/routing'
import { NewsListItem } from '@/features/news/types/news.types'

export default function NewsCard({ item }: { item: NewsListItem }) {

    return (
        <Link href={`/news/${item.slug}`} target="_blank" rel="noopener noreferrer" className={styles.newsCard}>
            <div className={styles.imageContainer}>
                <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                />
                <div className={styles.overlay}>
                    <span className={styles.statusLabel}>
                        {formatDate(item.publishedAt)}
                    </span>
                </div>
            </div>
            <div className={styles.description}>
                <h3>{item.title}</h3>
            </div>
        </Link>
    )
}