import { InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export default function Checkbox({ label, id, ...props }: Props) {

    const inputId = id || `checkbox-${label?.replace(/\s+/g, '-').toLowerCase()}`;

    return (
        <label className={styles.checkboxWrapper}>
            <input type="checkbox" className={styles.checkbox} {...props} />
            {label && <span>{label}</span>}
        </label>
    );
}