"use client"

import Image from "next/image";
import styles from "./HeroSection.module.scss";
import { usePathname } from "next/navigation";
import { HOME_SLIDER_DATA } from "@/config/home.config";
import Slider from "../../ui/Slider";
import Overlay from "../../ui/Slider/Overlay";
import { HeroData, useBreadcrumbStore } from "@/store/useBreadcrumbStore";
import { useMemo } from "react";
import { resolveHeroFromUrl } from "@/lib/breadcrumb-helper";


interface HeroProps {
  locale: string;
}


export default function HeroSection({ locale }: HeroProps) {

  const pathname = usePathname();
  const dynamicHeroData = useBreadcrumbStore(state => state.heroData);

  
  const staticHeroData = useMemo(
    () => resolveHeroFromUrl(pathname, locale),
    [pathname, locale]
  );
  
  
  const heroData: HeroData | null = dynamicHeroData || staticHeroData;

  const isHome = heroData?.isHome || false;

  if (!heroData) {
    return null; 
  }

  const { title, image, showBreadcrumb, breadcrumbs, date } = heroData;

  
  return (
    <header className={styles.hero}>
      {isHome ? (
        <Slider.hero locale={locale} data={HOME_SLIDER_DATA} autoplay={true} />
      ) : (
        <>
          <Image src={image} alt={title} fill priority className={styles.bgImage} />
          <Overlay.breadcrumb
            title={title}
            locale={locale}
            showBreadcrumb={showBreadcrumb}
            breadcrumbs={breadcrumbs}
            date={date}
          />
        </>
      )}
    </header>
  );
}