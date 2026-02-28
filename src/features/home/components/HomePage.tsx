"use client"

import { COMPANY_STATS, FEATURE_INFO_SECTION, FEATURE_SECTION, HOME_CONTENT } from '@/config/home.config'
import FeatureSection from '@/shared/components/common/FeatureSection'
import InfoSection from '@/shared/components/common/InfoSection'
import StatsSection from '@/shared/components/common/StatsSection'
import TextSection from '@/shared/components/common/TextSection'
import { useLocale } from 'next-intl'


export default function HomePage() {
  const locale = useLocale();

  return (
    <>
      <TextSection.default
        title={HOME_CONTENT.title[locale]}
        content={HOME_CONTENT.content[locale]}
      />
      <StatsSection stats={COMPANY_STATS} />
      {FEATURE_INFO_SECTION.items.map((item, index) => (
        <InfoSection key={index} item={item} />
      ))}
      {/* <FeatureSection features={FEATURE_SECTION} variant="home" /> */}
      <FeatureSection
        variant="home"
        features={FEATURE_SECTION}
      />
    </>

  )
}
