import styles from "./ListingSection.module.scss"
import ListingCard from './ListingCard';
import { ListingVariant, Locale } from "@/shared/types/common.types";
import { useLocale } from "next-intl";
import { ProjectListItem } from "@/features/projects/types/project.types";
import { NewsListItem } from "@/features/news/types/news.types";

interface Props { variant: ListingVariant; items: ProjectListItem[] | NewsListItem[]; }

export default function ListingGrid({ variant, items }: Props) {
    const locale = useLocale();
    

    return (
        <div className={styles.grid}>
            {items?.map((item, index) => {
                if (variant === 'news') {
                    return <ListingCard.news key={index} item={item as NewsListItem}  />;
                }
                return <ListingCard.project key={index} item={item as ProjectListItem} locale={locale as Locale} />;
            })}
        </div>
    )
    
}
