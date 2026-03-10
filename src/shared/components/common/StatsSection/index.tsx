import { StatItem } from "@/shared/types/content.types";
import StatCard from "./StatCard";
import styles from "./StatsSection.module.scss"
import { useLocale } from "next-intl";


interface StatsSectionProps {
    stats: StatItem[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
    const locale = useLocale();

    return (
        <div className={styles.container}>
            {
                stats.map((stat, index) =>
                    <StatCard key={index} value={stat.value} label={stat.label[locale]} />
                )
            }

        </div>
    )
}
