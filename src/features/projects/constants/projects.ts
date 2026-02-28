import { LocalizedString } from "@/shared/types/common.types";


export const PROJECT_STATUS_VALUES = {
    UNDER_CONSTRUCTION: 'under-construction',
    COMPLETED: 'completed'
} as const;


export const PROJECT_STATUS_LABELS: Record<string, LocalizedString> = {
    [PROJECT_STATUS_VALUES.UNDER_CONSTRUCTION]: {
        tr: 'İnşaat Halinde',
        az: 'İnşaat Prosesində',
        en: 'Under Construction',
        ru: 'В процессе строительства'
    },
    [PROJECT_STATUS_VALUES.COMPLETED]: {
        tr: 'Tamamlandı',
        az: 'Tamamlandı',
        en: 'Completed',
        ru: 'Завершено'
    }
};