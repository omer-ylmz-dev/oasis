/* import { NextRequest } from 'next/server';
import { projectQueryService } from '@/lib/services/projectQueryService';
import { ApiResponseBuilder } from '@/lib/utils/api-response';
import { withDelay } from '@/lib/utils/api-delay';
import type { Locale } from '@/shared/types/common.types';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const locale = (searchParams.get('locale') || 'en') as Locale;

    const project = await withDelay(
      () => projectQueryService.getBySlug(params.slug, locale),
      200
    );

    if (!project) {
      return ApiResponseBuilder.notFound('Project');
    }

    return ApiResponseBuilder.success(project);

  } catch (error) {
    console.error('API Error:', error);
    return ApiResponseBuilder.error('Internal server error');
  }
} */



import { NextRequest } from 'next/server';
import { projectService } from '@/features/projects/services/projectService';
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

        const project = await projectService.getBySlug(slug, locale);

        if (!project) {
            return ApiResponseBuilder.notFound('Project');
        }

        return ApiResponseBuilder.success(project);

    } catch (error) {
        console.error('API Error:', error);
        return ApiResponseBuilder.error('Internal server error');
    }
}