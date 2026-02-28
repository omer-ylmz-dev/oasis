import { NextResponse } from 'next/server';

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
  meta?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasMore: boolean;
  };
}

export interface ApiErrorResponse {
  success: false;
  error: string;
  code?: string;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export class ApiResponseBuilder {
  static success<T>(data: T, meta?: ApiSuccessResponse<T>['meta']): NextResponse {
    return NextResponse.json({
      success: true,
      data,
      ...(meta && { meta })
    });
  }

  static error(message: string, status: number = 500, code?: string): NextResponse {
    return NextResponse.json(
      {
        success: false,
        error: message,
        ...(code && { code })
      },
      { status }
    );
  }

  static notFound(resource: string = 'Resource'): NextResponse {
    return this.error(`${resource} not found`, 404, 'NOT_FOUND');
  }
}