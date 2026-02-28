"use client"

import { getDynamicPageHeroData } from "@/lib/breadcrumb-helper";
import { useBreadcrumb } from "@/shared/hooks/useBreadcrumb";
import { useLocale } from "next-intl"
import { useMemo } from "react";
import ProjectOverview from "./components/ProjectOverview";
import TextSection from "@/shared/components/common/TextSection";
import FeatureSection from "@/shared/components/common/FeatureSection";
import InfoSection from "@/shared/components/common/InfoSection";
import ImageViewer from "./components/ImageViewer";
import LocationSection from "./components/LocationSection";
import { ProjectDetailData } from "./types/project.types";



export default function ProjectDetailPage({ projectDetail }: { projectDetail: ProjectDetailData }) {

  const locale = useLocale();

  const heroData = useMemo(
    () => getDynamicPageHeroData(
      'projects',
      locale,
      projectDetail.name,
      projectDetail.slug,
      projectDetail.coverPhoto
    ),
    [locale, projectDetail.name, projectDetail.slug, projectDetail.coverPhoto]
  );

  useBreadcrumb(heroData);
  

  return (
    <>
      <ProjectOverview data={projectDetail.overview} />
      <TextSection.default
        content={projectDetail.description}
      />

      {projectDetail.highlights.map((highlight: { title: string; description: string; image: string; }, index: number) => (
        <InfoSection
          key={index}
          item={{
            direction: index % 2 === 0 ? "ltr" : "rtl",
            title: highlight.title,
            content: highlight.description,
            image: highlight.image
          }}
        />
      ))}

      <FeatureSection
        variant="projects"
        features={{ items: projectDetail.features }}
      />

      <ImageViewer images={projectDetail.photos} />

      <LocationSection
        address={projectDetail.address}
        coordinates={projectDetail.coordinates}
        nearbyPlaces={projectDetail.nearbyPlaces}
      />
    </>
  )
}
