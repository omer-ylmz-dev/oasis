import { NextRequest } from 'next/server';
import { projectService } from '@/features/projects/services/projectService';
import { ApiResponseBuilder } from '@/lib/utils/api-response';
import type { Locale } from '@/shared/types/common.types';
import { ProjectSortString } from '@/features/projects/repositories/projectRepository';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const result = await projectService.getAll({
      locale: (searchParams.get('locale') || 'en') as Locale,
      filters: {
        status: searchParams.get('status') || undefined,
        type: searchParams.get('type') || undefined,
        location: searchParams.get('location') || undefined,
      },
      sort: (searchParams.get('sort') || 'createdAt-desc') as ProjectSortString,
      page: parseInt(searchParams.get('page') || '1'),
      limit: parseInt(searchParams.get('limit') || '10')
    });

    return ApiResponseBuilder.success(result.data, result.meta);

  } catch (error) {
    console.error('API Error:', error);
    return ApiResponseBuilder.error('Internal server error');
  }
}