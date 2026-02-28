import { PROJECT_STATUS_LABELS, PROJECT_TYPE_LABELS, PROJECT_LOCATION_LABELS } from '../constants';
import { Locale } from '@/shared/types/common.types';

export const getProjectLabel = {
    status: (val: string, locale: string) => PROJECT_STATUS_LABELS[val as keyof typeof PROJECT_STATUS_LABELS]?.[locale as Locale] || val,
    type: (val: string, locale: string) => PROJECT_TYPE_LABELS[val as keyof typeof PROJECT_TYPE_LABELS]?.[locale as Locale] || val,
    location: (val: string, locale: string) => PROJECT_LOCATION_LABELS[val]?.[locale as Locale] || val
};