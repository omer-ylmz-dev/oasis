import { SelectHTMLAttributes } from 'react';
import styles from './Select.module.scss';

interface Option {
    value: string;
    label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[];
    placeholder?: string;
}

export default function Select({ options, placeholder, ...props }: SelectProps) {
    return (
        <div className={styles.selectWrapper}>
            <select className={styles.select} {...props}>
                {placeholder && (
                    <option value="" disabled hidden>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}