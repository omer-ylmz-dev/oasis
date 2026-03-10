'use client';

import { useState, useRef } from 'react';
import styles from './LocationSection.module.scss';
import LocationMap from './LocationMap';
import NearbyPlaces from './NearbyPlaces';
import { useTranslations } from 'next-intl';

interface LocationSectionProps {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  nearbyPlaces: Array<{
    name: string;
    distance: number;
    type: string;
  }>;
}

type TabType = 'location' | 'nearby';

const LocationSection = ({ 
  address, 
  coordinates, 
  nearbyPlaces
}: LocationSectionProps) => {
  const t = useTranslations("Pages.Projects.Location");

  const [activeTab, setActiveTab] = useState<TabType>('location');
  const mapRef = useRef<HTMLIFrameElement>(null);

 
  const updateMapSrc = () => {
    if (mapRef.current) {
      const mapUrl = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&hl=tr&z=15&output=embed`;
      mapRef.current.src = mapUrl;
    }
  };

 
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    if (tab === 'location') {
      setTimeout(updateMapSrc, 100);
    }
  };

  return (
    <section className={styles.locationSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t("heading")}</h2>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'location' ? styles.active : ''}`}
            onClick={() => handleTabChange('location')}
          >
            {t("location")}
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'nearby' ? styles.active : ''}`}
            onClick={() => handleTabChange('nearby')}
          >
            {t("nearbyPlaces")}
          </button>
        </div>
      </div>

      <div className={styles.content}>
        {activeTab === 'location' ? (
          <LocationMap 
            address={address} 
            coordinates={coordinates}
            mapRef={mapRef}
          />
        ) : (
          <NearbyPlaces 
            places={nearbyPlaces}
            coordinates={coordinates}
          />
        )}
      </div>
    </section>
  );
};

export default LocationSection;