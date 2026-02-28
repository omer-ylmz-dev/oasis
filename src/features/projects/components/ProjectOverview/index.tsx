import { useLocale, useTranslations } from 'next-intl';
import ProjectFact from './ProjectFact';
import styles from './ProjectOverview.module.scss'
import { Project } from '../../types/project.types';
import { overviewConfig } from '../../config/overview.config';

export default function ProjectOverview({ data }: { data: Project['overview'] }) {

    const locale = useLocale();
    const t = useTranslations('Pages.Projects.Overview');

    const facts = overviewConfig(data, locale);

    return (
        <header className={styles.projectOverview}>
            {facts.map((fact) => (
                <ProjectFact
                    key={fact.key}
                    icon={fact.icon}
                    label={t(fact.key)}
                    value={fact.value}
                />
            ))}
        </header>
    );

}
