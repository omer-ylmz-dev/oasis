import { NewsRepository, NewsFilters, NewsSortOptions } from '../repositories/newsRepository';
import { News, NewsListItem } from '@/features/news/types/news.types';
import type { Locale } from '@/shared/types/common.types';

export interface NewsOptions {
    locale: Locale;
    filters?: NewsFilters;
    sort?: NewsSortOptions;
    page?: number;
    limit?: number;
}

export class NewsService {
    private newsRepository = new NewsRepository();


    toListItem(news: News, locale: Locale) {
        return {
            id: news.id,
            slug: news.slug,
            title: news.title[locale],
            shortDescription: news.shortDescription[locale],
            category: news.category,
            publishedAt: news.publishedAt,
            readTime: news.readTime,
            featured: news.featured,
            thumbnail: news.coverPhoto,
            author: {
                name: news.author.name
            }
        };
    }


    localizeNews(news: News, locale: Locale) {
        return {
            id: news.id,
            slug: news.slug,
            title: news.title[locale],
            shortDescription: news.shortDescription[locale],
            content: news.content[locale],
            category: news.category,
            tags: news.tags?.map((t: { [key in Locale]: string }) => t[locale as Locale]) || [],
            author: {
                name: news.author.name,
                avatar: news.author.avatar,
                role: news.author.role[locale]
            },
            publishedAt: news.publishedAt,
            updatedAt: news.updatedAt,
            coverPhoto: news.coverPhoto,
            photos: news.photos || [],
            readTime: news.readTime,
            views: news.views,
            featured: news.featured,
            relatedNews: news.relatedNews || [],
        };
    }

    async getAll(options: NewsOptions) {
        const {
            locale,
            filters = {},
            sort = 'publishedAt-desc',
            page = 1,
            limit = 10
        } = options;

        let news = this.newsRepository.filter(filters);
        news = this.newsRepository.sort(news, sort as string);
        const { items, meta } = this.newsRepository.paginate(news, { page, limit });

        const localizedNews = items.map(n => this.toListItem(n, locale));

        return {
            data: localizedNews,
            meta
        };
    }

    async getBySlug(slug: string, locale: Locale) {
        const news = this.newsRepository.findBySlug(slug);

        if (!news) {
            return null;
        }

        return this.localizeNews(news, locale);
    }

    async getRelated(newsId: string, locale: Locale, limit: number = 3) {
        const related = this.newsRepository.findRelated(newsId, limit);
        return related.map(n => this.toListItem(n, locale));
    }
}


export const newsService = new NewsService();