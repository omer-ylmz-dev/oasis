import { quoteAuthorVariants, textFadeUpVariants, textViewportConfig } from '../TextSection.animation'
import styles from '../TextSection.module.scss'
import { motion } from 'framer-motion'

interface QuoteContentProps {
  quote: string
  author: string
  role?: string
  className?: string
}

const QuoteContent: React.FC<QuoteContentProps> = ({ quote, author, role, className }) => {
  return (
    <div className={`${styles.quoteContent} ${className || ''}`}>
      <blockquote className={styles.quote}>
        <motion.p
          className={styles.quoteText}
          variants={textFadeUpVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={textViewportConfig}
        >
          "{quote}"
        </motion.p>
        <motion.footer
          className={styles.author}
          variants={quoteAuthorVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={textViewportConfig}
        >
          <cite>{author}</cite>
          {role && <span className={styles.role}>{role}</span>}
        </motion.footer>
      </blockquote>
    </div>
  )
}

export default QuoteContent