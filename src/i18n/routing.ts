import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { SUPPORTED_LANGUAGES } from '@/config/languages.config';

export const routing = defineRouting({
  locales: SUPPORTED_LANGUAGES,
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);