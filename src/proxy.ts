import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // Layout'un URL'i okuyabilmesi için header ekliyoruz
  response.headers.set('x-url', request.nextUrl.pathname);

  return response;
}

export const config = {
  // Dil ve sayfa rotalarını yakalayan matcher
  matcher: ['/', '/(tr|az|en|ru)/:path*', '/((?!api|_next|.*\\..*).*)']
};