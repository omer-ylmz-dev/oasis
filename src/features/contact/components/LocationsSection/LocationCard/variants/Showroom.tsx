"use client";

import Image from "next/image";
import styles from "../../LocationsSection.module.scss";
import Button from "@/shared/components/ui/Button";
import { useTranslations } from "next-intl";
import { ShowroomProps } from "@/features/contact/types";
import { motion } from "framer-motion";
import { locationViewportConfig, showroomVariants } from "../../LocationSection.animation";


const Showroom: React.FC<ShowroomProps> = ({ title, location, mapRef, index }) => {
    const t = useTranslations("Pages.Contact");

    const goToLocation = (lat: number, lng: number) => {
        mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mapRef.current) {
            mapRef.current.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=tr&z=15&output=embed`;
        }
    }

    return (
        <motion.div
            className={styles.showroom}
            variants={showroomVariants(index)}
            initial="initial"
            whileInView="whileInView"
            viewport={locationViewportConfig}
        >
            <div className={styles.imageContainer}>
                <Image
                    src="/home.jpg"
                    alt={title}
                    fill
                    className="object-cover"
                />
                <div className={styles.overlay}>
                    <h1>{title}</h1>
                    <Button.link onClick={() => goToLocation(location.lat, location.lng)}>
                        {t("Showrooms.buttonMap")}
                    </Button.link>
                </div>
            </div>
        </motion.div>
    )
}

export default Showroom;