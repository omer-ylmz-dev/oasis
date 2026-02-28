import styles from "./MapSection.module.scss"
import { forwardRef } from "react";


const MapSection = forwardRef<HTMLIFrameElement | null>((props, ref) => {
  return (
    <div className={styles.mapSection}>
      <iframe
        ref={ref}
        src="https://www.google.com/maps?q=40.3777,49.8461&hl=tr&z=12&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
})


export default MapSection;


