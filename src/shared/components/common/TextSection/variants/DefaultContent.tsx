import { getStaggeredTextVariants, textFadeUpVariants, textViewportConfig } from '../TextSection.animation'
import styles from '../TextSection.module.scss'
import { motion } from 'framer-motion'

interface DefaultContentProps {
  title?: string
  content: string
  className?: string
}

const DefaultContent: React.FC<DefaultContentProps> = ({ title, content, className }) => {
  const paragraphs = content.split('\n\n').filter(p => p.trim())

  return (
    <div className={`${styles.defaultContent} ${className || ''}`}>
      {title && (
        <motion.h2
          className={styles.title}
          variants={textFadeUpVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={textViewportConfig}
        >
          {title}
        </motion.h2>
      )}
      <div className={styles.content}>
        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={getStaggeredTextVariants(index)}
            initial="initial"
            whileInView="whileInView"
            viewport={textViewportConfig}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </div>
  )
}

export default DefaultContent