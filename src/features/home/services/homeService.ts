import { projectService } from '@/features/projects/services/projectService';
import { newsService } from '@/features/news/services/newsService';
import { Locale } from '@/shared/types/common.types';
import { ProjectQueryParams } from '@/config/filters.config';

export const homeService = {
    async getHomePageData(locale: Locale) {
        const [featuredProjects, latestNews] = await Promise.all([
            projectService.getAll({ 
                locale, 
                filters: { featured: true } as ProjectQueryParams, 
                limit: 6 
            }),
            newsService.getAll({ 
                locale, 
                limit: 3, 
                sort: 'publishedAt-desc'
            })
        ]);

        return {
            featuredProjects: featuredProjects.data,
            latestNews: latestNews.data,
            stats: {
                totalProjects: 500,
                happyClients: 5000,
                yearsExperience: 10
            }
        };
    }
};