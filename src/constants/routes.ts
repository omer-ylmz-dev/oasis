export const ROUTES = {
    HOME: '/',
    PROJECTS: '/projects',
    PROJECT_DETAIL: (slug: string) => `/projects/${slug}`,
    NEWS: '/news',
    NEWS_DETAIL: (slug: string) => `/news/${slug}`,
    ABOUT: '/about',
    CONTACT: '/contact',
    ADMIN: '/admin'
  } as const;
