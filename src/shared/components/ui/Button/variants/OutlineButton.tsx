import styles from '../Button.module.scss'
import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>


export default function OutlineButton({
    children,
    ...props
}: Props) {
    return (
        <button className={styles.outline} {...props}>
            {children}
        </button>
    )
}
