"use client"

import { ABOUT_CONTENT, ABOUT_QUOTE, ABOUT_STATS, EXPERT_SECTION } from '@/config/about.config'
import TextSection from '@/shared/components/common/TextSection'
import { useLocale } from 'next-intl';
import ExpertSection from '../components/ExpertSection';
import StatsSection from '@/shared/components/common/StatsSection';
import Slider from '@/shared/components/ui/Slider';


export default function AboutPage() {
    const locale = useLocale();
    

    return (
        <>
            
            <TextSection.quote
                quote={ABOUT_QUOTE.quote[locale]}
                author={ABOUT_QUOTE.author[locale]}
                role={ABOUT_QUOTE.role?.[locale]}
            />
            <Slider.gallery path="about" data={ABOUT_CONTENT.images} />
            <TextSection.default
                title={ABOUT_CONTENT.title[locale]}
                content={ABOUT_CONTENT.content[locale]}
            />
            <StatsSection stats={ABOUT_STATS} />
            <ExpertSection experts={EXPERT_SECTION} />
        </>
    )
}
