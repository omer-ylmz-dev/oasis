import MapSection from '@/shared/components/common/MapSection';
import styles from './LocationSection.module.scss';
import { useTranslations } from 'next-intl';


interface NearbyPlace {
  name: string;
  distance: number;
  type: string;
}

interface NearbyPlacesProps {
  places: NearbyPlace[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

const NearbyPlaces = ({ places, coordinates }: NearbyPlacesProps) => {
  const t = useTranslations("Pages.Projects.Location");

  return (
    <div className={styles.nearbyPlaces}>
      <div className={styles.placesList}>
        <h3 className={styles.listTitle}>{t("viewOnMap")} : </h3>
        
        <div className={styles.places}>
          {places.map((place, index) => (
            <div key={index} className={styles.placeItem}>
              <div className={styles.placeInfo}>
                <span className={styles.placeName}>{place.name}</span>
              </div>
              <span className={styles.placeDistance}>{place.distance}m</span>
            </div>
          ))}
        </div>
      </div>

      <MapSection />
    </div>
  );
};

export default NearbyPlaces;