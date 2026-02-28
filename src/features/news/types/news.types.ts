import { LocalizedString, Image, SEO, PaginationMeta } from '@/shared/types/common.types';

export type NewsCategory =
  | 'company'
  | 'market'
  | 'guide'
  | 'announcement'
  | 'urban'
  | 'infrastructure'
  | 'community'
  | 'residential'
  | 'commercial';

export interface NewsAuthor {
  name: string;
  avatar?: string;
  role: LocalizedString;
}



export interface News {
  id: string;
  slug: string;
  title: LocalizedString;
  shortDescription: LocalizedString;
  content: LocalizedString;
  category: NewsCategory;
  tags: { tr: string; az: string; en: string; ru: string }[];
  author: { name: string; avatar?: string; role: LocalizedString; };
  publishedAt: string | Date;
  updatedAt?: string | Date;
  coverPhoto: string;
  photos?: string[];
  readTime: number;
  views?: number;
  featured?: boolean;
  relatedNews?: string[];
}


export interface NewsDetailData extends Omit<News, 'title' | 'shortDescription' | 'content' | 'tags' | 'author' | 'photos' | 'publishedAt'> {
  title: string;
  shortDescription: string;
  content: string;
  tags: string[];
  photos: string[];
  publishedAt: string;
  author: { name: string; avatar?: string; role: string; };
}



export interface NewsListItem extends Omit<NewsDetailData, 'content' | 'photos' | 'relatedNews'> {
  thumbnail: string;
}


export interface NewsResponse {
  success: boolean;
  data: NewsListItem[]; 
  meta: PaginationMeta;
}