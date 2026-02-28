import styles from './ProjectOverview.module.scss';


interface ProjectFactProps {
    icon: React.ElementType;
    label: string;
    value: string;
}

export default function ProjectFact({ icon: Icon, label, value }: ProjectFactProps) {
    return (
        <div className={styles.fact}>
            <span className={styles.icon}>
                <Icon size={24} color="white" />
            </span>
            <div className={styles.description}>
                <h5>{label}</h5>
                <p>{value}</p>
            </div>
        </div>
    );
}
