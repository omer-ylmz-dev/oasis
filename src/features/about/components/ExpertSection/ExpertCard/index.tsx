"use client";

import Image from "next/image"
import styles from "../ExpertSection.module.scss"
import { useLocale } from "next-intl";
import { ExpertItem } from "@/config/about.config";
import { motion } from "framer-motion";
import { getExpertCardVariants, viewportConfig } from "../ExpertSection.animation";

interface ExpertCardProps {
  item: ExpertItem;
  index: number;
}

export default function ExpertCard({ item, index }: ExpertCardProps) {
  const locale = useLocale();
  const variants = getExpertCardVariants(index);


  return (
    <motion.div
      className={styles.card}
      variants={variants}
      initial="initial"
      whileInView="whileInView"
      viewport={viewportConfig}
    >
      <div className={styles.imageContainer}>
        <Image
          src={item.image}
          alt={item.name[locale]}
          fill
          className="object-cover"
        />
      </div>
      <div className={styles.name}>
        <h1>{item.name[locale]}</h1>
        <span>{item.role[locale]}</span>
      </div>
    </motion.div>
  )
}
