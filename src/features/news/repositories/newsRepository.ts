import { newsData } from '@/data/news';
import { News } from '@/features/news/types/news.types';

export interface NewsFilters {
    category?: string;
    featured?: boolean;
    tags?: string[];
}



export interface PaginationOptions {
    page: number;
    limit: number;
}

export type NewsSortField = 'title' | 'views' | 'publishedAt';
export type SortOrder = 'asc' | 'desc';


export type NewsSortString = `${NewsSortField}-${SortOrder}`;

export type NewsSortOptions = NewsSortString;


export class NewsRepository {
    private data: News[] = newsData;

    findAll(): News[] {
        return [...this.data];
    }

    findBySlug(slug: string): News | null {
        return this.data.find(n => n.slug === slug) || null;
    }

    findById(id: string): News | null {
        return this.data.find(n => n.id === id) || null;
    }

    filter(filters: NewsFilters): News[] {
        let result = this.findAll();

        if (filters.category) {
            result = result.filter(n => n.category === filters.category);
        }

        if (filters.featured !== undefined) {
            result = result.filter(n => n.featured === filters.featured);
        }

        if (filters.tags && filters.tags.length > 0) {
            result = result.filter(n =>
                filters.tags!.some(tag =>
                    n.tags.some(t =>
                        Object.values(t).some(val =>
                            val.toLowerCase().includes(tag.toLowerCase())
                        )
                    )
                )
            );
        }

        return result;
    }

    

    sort(news: News[], sortParam: string = 'publishedAt-desc'): News[] {
        // String parçalama işlemini güvenli hale getirelim
        const [field, order] = sortParam.split('-') as [NewsSortField, SortOrder];

        return [...news].sort((a, b) => {
            if (field === 'title') {
                // Title'ın string mi yoksa Record mu olduğunu kontrol etmeliyiz
                const aTitle = typeof a.title === 'string' ? a.title : a.title.en || "";
                const bTitle = typeof b.title === 'string' ? b.title : b.title.en || "";

                return order === 'desc'
                    ? bTitle.localeCompare(aTitle)
                    : aTitle.localeCompare(bTitle);
            }

            let aValue: number = 0;
            let bValue: number = 0;

            switch (field) {
                case 'views':
                    aValue = a.views || 0;
                    bValue = b.views || 0;
                    break;
                case 'publishedAt':
                default:
                    // Date objesi veya string gelebilir, getTime() ile sayıya çeviriyoruz
                    aValue = new Date(a.publishedAt).getTime();
                    bValue = new Date(b.publishedAt).getTime();
            }

            return order === 'desc' ? bValue - aValue : aValue - bValue;
        });
    }


    paginate(news: News[], options: PaginationOptions) {
        const { page, limit } = options;
        const total = news.length;
        const totalPages = Math.ceil(total / limit);
        const start = (page - 1) * limit;
        const end = start + limit;

        return {
            items: news.slice(start, end),
            meta: {
                total,
                page,
                limit,
                totalPages,
                hasMore: page < totalPages
            }
        };
    }

    findRelated(newsId: string, limit: number = 3): News[] {
        const news = this.findById(newsId);
        if (!news || !news.relatedNews) return [];

        return news.relatedNews
            .map(id => this.findById(id))
            .filter((n): n is News => n !== null)
            .slice(0, limit);
    }
}
