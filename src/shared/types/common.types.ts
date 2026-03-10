import { Languages } from "@/config/languages.config";

export type Locale = 'tr' | 'az' | 'en' | 'ru';

export interface LocalizedString {
  tr: string;
  az: string;
  en: string;
  ru: string;
}

export interface Image {
  url: string;
  alt: LocalizedString;
  width: number;
  height: number;
}

export interface SEO {
  title: LocalizedString;
  description: LocalizedString;
  keywords: LocalizedString;
  ogImage?: string;
}

export interface SliderDataItem {
  image: string;
  title: Record<Languages, string>;
  description?: Record<Languages, string>;
}




export type ModalType = 'MOBILE_MENU' | 'IMAGE_VIEWER' | 'LIGHTBOX_SLIDER';

export interface ModalProps {
  IMAGE_VIEWER: { 
    src: string; 
    alt?: string;
  };
  MOBILE_MENU: Record<string, never>; 
}




export type ListingVariant = "projects" | "news";



export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasMore: boolean;
}