import { TextareaHTMLAttributes } from 'react'
import styles from '../Input.module.scss'

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ ...props }: Props) {
  return <textarea className={styles.textarea} {...props} />
}
