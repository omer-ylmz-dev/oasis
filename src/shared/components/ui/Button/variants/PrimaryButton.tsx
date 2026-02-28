import styles from '../Button.module.scss'
import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export default function PrimaryButton({
    children,
    ...props
}: Props) {
    return (
        <button className={styles.primary} {...props}>
            {children}
        </button>
    )
}
