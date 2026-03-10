import { NAVBAR_LINKS, FOOTER_LINKS, BASE_PAGES, HOME_PAGE } from "@/config/navigation.config";
import { BreadcrumbItem, HeroData } from "@/store/useBreadcrumbStore";
import { SUPPORTED_LANGUAGES } from "@/config/languages.config";





function getConfigData(href: string, locale: string) {
  const config = Object.values(BASE_PAGES).find(link => link.href === href);

  if (!config) {
    return null;
  }

  return {
    label: config.label[locale as keyof typeof config.label],
    image: config.image,
    showBreadcrumb: config.showBreadcrumb
  };
}






function buildBreadcrumbs(
  locale: string,
  paths: Array<{ href: string; label: string }>
): BreadcrumbItem[] {
  return [
    {
      label: HOME_PAGE.label[locale as keyof typeof HOME_PAGE.label] || HOME_PAGE.label.en,
      href: '/'
    },
    ...paths.map(path => ({
      label: path.label,
      href: path.href
    }))
  ];
}





export function getHomeHeroData() {
  return {
    isHome: true as const,
    showBreadcrumb: false as const,
    breadcrumbs: [] as [],
  };
}





export function getStaticPageHeroData(pathname: string, locale: string) {
  const locales = SUPPORTED_LANGUAGES;
  const segments = pathname.split('/').filter(p => p && !locales.includes(p));
  const currentPath = segments[0];

  if (!currentPath) {
    return getHomeHeroData();
  }

  const configData = getConfigData(currentPath, locale);

  if (!configData) {
    return {
      title: currentPath.toUpperCase(),
      image: '/images/hero/default.jpg',
      showBreadcrumb: true,
      isHome: false,
      breadcrumbs: buildBreadcrumbs(locale, [
        { href: `/${currentPath}`, label: currentPath.toUpperCase() }
      ])
    };
  }

  return {
    title: configData.label,
    image: configData.image,
    showBreadcrumb: configData.showBreadcrumb,
    isHome: false,
    breadcrumbs: buildBreadcrumbs(locale, [
      { href: `/${currentPath}`, label: configData.label }
    ])
  };
}




export function getDynamicPageHeroData(
  parentHref: string,
  locale: string,
  detailTitle: string,
  detailSlug: string,
  detailImage: string,
  detailDate?: string | Date
): HeroData {
  const parentConfig = getConfigData(parentHref, locale);

 
  const parentLabel = parentConfig?.label || parentHref.toUpperCase();

  return {
    title: detailTitle, 
    image: detailImage || '/images/hero/default.jpg',
    showBreadcrumb: true,
    isHome: false,
    date: detailDate ? (typeof detailDate === 'string' ? detailDate : detailDate.toISOString()) : undefined,
    breadcrumbs: buildBreadcrumbs(locale, [
      {
        href: `/${parentHref}`,
        label: parentLabel
      },
      {
        href: `/${parentHref}/${detailSlug}`,
        label: detailTitle 
      }
    ])
  };
}





export function resolveHeroFromUrl(pathname: string, locale: string): HeroData | null {
  const locales = SUPPORTED_LANGUAGES;
  const segments = pathname.split('/').filter(p => p && !locales.includes(p));

  if (segments.length === 0) {
    return getHomeHeroData();
  }

  if (segments.length > 1) {
    return null;
  }

  const currentPath = segments[0];
  const configData = getConfigData(currentPath, locale);

  if (!configData) {
    return null;
  }

  return {
    title: configData.label,
    image: configData.image,
    showBreadcrumb: configData.showBreadcrumb,
    isHome: false,
    breadcrumbs: buildBreadcrumbs(locale, [
      { href: `/${currentPath}`, label: configData.label }
    ])
  };
}