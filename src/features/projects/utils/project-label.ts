import { Locale } from '@/shared/types/common.types';
import { PROJECT_STATUS_LABELS } from '../constants/projects';

export function getProjectStatusLabel(status: string, locale: string): string {
  const labels = PROJECT_STATUS_LABELS[status];
  
  if (!labels) return status; // Eşleşme yoksa bozma, olduğu gibi bas

  return labels[locale as Locale] || labels['en'];
}