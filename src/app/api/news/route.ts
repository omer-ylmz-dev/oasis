import { NextRequest } from 'next/server';
import { newsService } from '@/features/news/services/newsService';
import { ApiResponseBuilder } from '@/lib/utils/api-response';
import type { Locale } from '@/shared/types/common.types';
import { NewsSortString } from '@/features/news/repositories/newsRepository';

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;

        const result = await newsService.getAll({
            locale: (searchParams.get('locale') || 'en') as Locale,
            filters: {
                category: searchParams.get('category') || undefined,
                featured: searchParams.get('featured') === 'true' ? true : undefined
            },
            sort: (searchParams.get('sort') || 'publishedAt-desc') as NewsSortString,
            page: parseInt(searchParams.get('page') || '1'),
            limit: parseInt(searchParams.get('limit') || '10')
        });

        return ApiResponseBuilder.success(result.data, result.meta);

    } catch (error) {
        console.error('API Error:', error);
        return ApiResponseBuilder.error('Internal server error');
    }
}