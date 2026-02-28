"use client";

import { FaPhone } from "react-icons/fa";
import styles from "../../LocationsSection.module.scss";
import { OfficeProps } from "@/features/contact/types";
import { motion } from "framer-motion";
import { locationViewportConfig, officeVariants } from "../../LocationSection.animation";


const Office: React.FC<OfficeProps> = ({ title, address, phone, location, mapRef, index }) => {
    const goToLocation = (lat: number, lng: number) => {
        mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mapRef.current) {
            mapRef.current.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=tr&z=15&output=embed`;
        }
    }

    return (
        <motion.div
            className={styles.office}
            onClick={() => goToLocation(location.lat, location.lng)}
            variants={officeVariants(index)}
            initial="initial"
            whileInView="whileInView"
            viewport={locationViewportConfig}
        >
            <h1>{title}</h1>
            <p>{address}</p>
            <span>
                <FaPhone />
                {phone}
            </span>
        </motion.div>
    )
}

export default Office;