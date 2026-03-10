import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  response.headers.set('x-url', request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: ['/', '/(tr|az|en|ru)/:path*', '/((?!api|_next|.*\\..*).*)']
};