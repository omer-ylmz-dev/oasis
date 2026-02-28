import { SEO_CONFIG, PageKeys } from '@/config/seo.config';
import { constructMetadata } from './seo';
import { Locale } from '../types/common.types';
import { SUPPORTED_LANGUAGES } from '@/config/languages.config';

export async function getPageMetadata(page: PageKeys, locale: string) {
    const activeLocale = (SUPPORTED_LANGUAGES.includes(locale) ? locale : 'en') as Locale;

    const data = SEO_CONFIG[activeLocale][page];

    return constructMetadata({
        title: data.title,
        description: data.description,
        image: data.image,
        locale: activeLocale,
        path: data.path,
    });
}