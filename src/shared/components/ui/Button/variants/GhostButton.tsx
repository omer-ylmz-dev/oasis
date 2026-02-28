import { ButtonHTMLAttributes } from "react"
import styles from "../Button.module.scss"

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export default function GhostButton({
    children,
    ...props
}: Props) {
    return (
        <button className={styles.ghost} {...props} >
            {children}
        </button>
    )
}
