import styles from '../Button.module.scss'
import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>


export default function LinkButton({
    children,
    ...props
}: Props) {
    return (
        <button className={styles.link} {...props}>
            {children}
        </button>
    )
}
