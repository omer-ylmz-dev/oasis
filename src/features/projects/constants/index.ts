import { LocalizedString } from '@/shared/types/common.types';
import { ProjectStatus, ProjectType } from '../types/project.types';
import { ProjectSortString } from '../repositories/projectRepository';


export const PROJECT_STATUS_LABELS: Record<ProjectStatus, LocalizedString> = {
    'under-construction': { tr: 'İnşaat Halinde', az: 'İnşaat Prosesində', en: 'Under Construction', ru: 'В процессе строительства' },
    'completed': { tr: 'Tamamlandı', az: 'Tamamlandı', en: 'Completed', ru: 'Завершено' }
};

export const PROJECT_TYPE_LABELS: Record<ProjectType, LocalizedString> = {
    'residential-complex': { tr: 'Konut Kompleksi', az: 'Yaşayış Kompleksi', en: 'Residential Complex', ru: 'Жилой комплекс' },
    'apartment': { tr: 'Apartman', az: 'Mənzil', en: 'Apartment', ru: 'Апартаменты' },
    'villa': { tr: 'Villa', az: 'Villa', en: 'Villa', ru: 'Вилла' },
    'mixed-use': { tr: 'Karma Kullanım', az: 'Qarışıq İstifadə', en: 'Mixed-Use', ru: 'Многофункциональный' },
    'business-center': { tr: 'İş Merkezi', az: 'Biznes Mərkəzi', en: 'Business Center', ru: 'Бизнес-центр' },
    'business-park': { tr: 'İş Parkı', az: 'Biznes Parkı', en: 'Business Park', ru: 'Бизнес-park' },
    'shopping-mall': { tr: 'AVM', az: 'Ticarət Mərkəzi', en: 'Shopping Mall', ru: 'Торговый центр' },
    'resort': { tr: 'Resort', az: 'Resort', en: 'Resort', ru: 'Курорт' }
};

export const PROJECT_LOCATION_LABELS: Record<string, LocalizedString> = {
    'baku-azerbaijan': { tr: 'Bakü, Azerbaycan', az: 'Bakı, Azərbaycan', en: 'Baku, Azerbaijan', ru: 'Баку, Азербайджан' },
    'sumqayit-azerbaijan': { tr: 'Sumgayıt, Azerbaycan', az: 'Sumqayıt, Azərbaycan', en: 'Sumqayit, Azerbaijan', ru: 'Сумгаит, Азербайджан' },
    'ganja-azerbaijan': { tr: 'Gence, Azerbaycan', az: 'Gəncə, Azərbaycan', en: 'Ganja, Azerbaijan', ru: 'Гянджа, Азербайджан' },
    'ankara-turkey': { tr: 'Ankara, Türkiye', az: 'Ankara, Türkiyə', en: 'Ankara, Turkey', ru: 'Анкара, Турция' },
    'istanbul-turkey': { tr: 'İstanbul, Türkiye', az: 'İstanbul, Türkiyə', en: 'Istanbul, Turkey', ru: 'Стамбул, Турция' },
    'antalya-turkey': { tr: 'Antalya, Türkiye', az: 'Antalya, Türkiyə', en: 'Antalya, Turkey', ru: 'Анталья, Турция' }
};



export const PROJECT_SORT_OPTIONS: { value: ProjectSortString; label: LocalizedString }[] = [
    {
        value: 'createdAt-desc',
        label: { tr: 'En Yeni', az: 'Ən Yeni', en: 'Newest', ru: 'Новейшие' }
    },
    {
        value: 'name-asc',
        label: { tr: 'İsim (A-Z)', az: 'Ad (A-Z)', en: 'Name (A-Z)', ru: 'Название (А-Я)' }
    },
    {
        value: 'name-desc',
        label: { tr: 'İsim (Z-A)', az: 'Ad (Z-A)', en: 'Name (Z-A)', ru: 'Название (Я-А)' }
    },
    {
        value: 'area-asc',
        label: { tr: 'Alan (Küçükten Büyüğe)', az: 'Sahə (Kiçikdən Böyüyə)', en: 'Area (Low to High)', ru: 'Площадь (от меньшей)' }
    },
    {
        value: 'area-desc',
        label: { tr: 'Alan (Büyükten Küçüğe)', az: 'Sahə (Böyükdən Kiçiyə)', en: 'Area (High to Low)', ru: 'Площадь (от большей)' }
    }
];