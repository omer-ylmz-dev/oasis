"use client"

import { AiOutlineLoading3Quarters } from "react-icons/ai"
import styles from "./PageLoader.module.scss"

export default function PageLoader() {
  return (
    <div className={styles.pageLoader}>
      <div className={styles.spinner}>
        <AiOutlineLoading3Quarters size={48} />
      </div>
    </div>
  )
}
