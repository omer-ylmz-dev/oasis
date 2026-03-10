import { NextRequest } from 'next/server';
import { newsService } from '@/features/news/services/newsService';
import { ApiResponseBuilder } from '@/lib/utils/api-response';
import type { Locale } from '@/shared/types/common.types';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const searchParams = request.nextUrl.searchParams;
        const locale = (searchParams.get('locale') || 'en') as Locale;

        const news = await newsService.getBySlug(slug, locale);

        if (!news) {
            return ApiResponseBuilder.notFound('News');
        }

        return ApiResponseBuilder.success(news);

    } catch (error) {
        console.error('API Error:', error);
        return ApiResponseBuilder.error('Internal server error');
    }
}