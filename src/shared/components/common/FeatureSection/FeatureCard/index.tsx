import { motion } from "framer-motion";
import styles from "../FeatureSection.module.scss";
import { featureCardVariants, featureViewportConfig } from "../FeatureSection.animation";

interface FeatureCardProps {
  variant: string;
  title: string;
  description: string;
  icon?: React.ReactNode | null;
  index: number;
}

export default function FeatureCard({ variant, title, description, icon, index }: FeatureCardProps) {
  return (
    <motion.div
      className={`${styles.card} ${styles[variant]}`}
      variants={featureCardVariants(index)}
      initial="initial"
      whileInView="whileInView"
      viewport={featureViewportConfig}
    >
      {variant === "home" && <span>{icon}</span>}
      <h1>{title}</h1>
      <p>{description}</p>
    </motion.div>
  );
}
