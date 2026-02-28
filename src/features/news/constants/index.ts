import { LocalizedString } from '@/shared/types/common.types';
import { NewsCategory } from '../types/news.types';
import { NewsSortString } from '../repositories/newsRepository';

export const NEWS_CATEGORY_LABELS: Record<NewsCategory, LocalizedString> = {
    'company': { tr: 'Kurumsal', az: 'Korporativ', en: 'Company', ru: 'Корпоративные' },
    'market': { tr: 'Piyasa', az: 'Bazar', en: 'Market', ru: 'Рынок' },
    'guide': { tr: 'Rehber', az: 'Bələdçi', en: 'Guide', ru: 'Руководство' },
    'announcement': { tr: 'Duyuru', az: 'Elan', en: 'Announcement', ru: 'Объявление' },
    'urban': { tr: 'Kentsel', az: 'Şəhər', en: 'Urban', ru: 'Городской' },
    'infrastructure': { tr: 'Altyapı', az: 'İnfrastruktur', en: 'Infrastructure', ru: 'Инфраструктура' },
    'community': { tr: 'Topluluk', az: 'İcma', en: 'Community', ru: 'Сообщество' },
    'residential': { tr: 'Konut', az: 'Yaşayış', en: 'Residential', ru: 'Жилая' },
    'commercial': { tr: 'Ticari', az: 'Kommersiya', en: 'Commercial', ru: 'Коммерческая' }
};


export const NEWS_SORT_OPTIONS: { value: NewsSortString; label: LocalizedString }[] = [
    {
        value: 'publishedAt-desc',
        label: { tr: 'En Yeni (Tarih)', az: 'Ən Yeni (Tarix)', en: 'Newest (Date)', ru: 'Сначала новые' }
    },
    {
        value: 'publishedAt-asc',
        label: { tr: 'En Eski (Tarih)', az: 'Ən Köhnə (Tarix)', en: 'Oldest (Date)', ru: 'Сначала старые' }
    },
    {
        value: 'title-asc',
        label: { tr: 'Başlık (A-Z)', az: 'Başlıq (A-Z)', en: 'Title (A-Z)', ru: 'Заголовок (А-Я)' }
    },
    {
        value: 'title-desc',
        label: { tr: 'Başlık (Z-A)', az: 'Başlıq (Z-A)', en: 'Title (Z-A)', ru: 'Заголовок (Я-А)' }
    }
];