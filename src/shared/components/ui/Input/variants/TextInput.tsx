import { InputHTMLAttributes } from 'react'
import styles from '../Input.module.scss'

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ type = 'text',  ...props }: Props) {
  return <input type={type} className={styles.input} {...props} />
}
