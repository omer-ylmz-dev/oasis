import styles from './LocationSection.module.scss';
import MapSection from '@/shared/components/common/MapSection';
import { useTranslations } from 'next-intl';


interface LocationMapProps {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  mapRef: React.RefObject<HTMLIFrameElement | null>;
}

const LocationMap = ({ address, coordinates, mapRef }: LocationMapProps) => {
  const t = useTranslations("Pages.Projects.Location");

  return (
    <div className={styles.locationMap}>
      <MapSection ref={mapRef} />
      
      <div className={styles.addressInfo}>
        <h3 className={styles.addressLabel}>{t("address")}</h3>
        <p className={styles.addressText}>{address}</p>
      </div>
    </div>
  );
};

export default LocationMap;