"use client";

import { getDynamicPageHeroData } from "@/lib/breadcrumb-helper";
import TextSection from "@/shared/components/common/TextSection";
import Slider from "@/shared/components/ui/Slider";
import { useBreadcrumb } from "@/shared/hooks/useBreadcrumb";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import { NewsDetailData } from "../types/news.types";


export default function NewsDetailPage({ newsDetail }: { newsDetail: NewsDetailData }) {
    const locale = useLocale();

    const heroData = useMemo(
        () => getDynamicPageHeroData(
            'news',
            locale,
            newsDetail.title,
            newsDetail.slug,
            newsDetail.coverPhoto,
            newsDetail.publishedAt
        ),
        [locale, newsDetail.title, newsDetail.slug, newsDetail.coverPhoto, newsDetail.publishedAt]
    );

    useBreadcrumb(heroData);

    return (
        <>
            <Slider.gallery path={newsDetail.slug} data={newsDetail.photos} />
            <TextSection.default content={newsDetail.content} />
        </>
    )
}
