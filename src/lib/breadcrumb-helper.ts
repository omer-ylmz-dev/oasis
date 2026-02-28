import { NAVBAR_LINKS, FOOTER_LINKS, HOME_HERO } from "@/config/navigation.config";
import { BreadcrumbItem } from "@/store/useBreadcrumbStore";
import { SUPPORTED_LANGUAGES } from "@/config/languages.config";

const HOME_LABELS = {
  az: 'Ana səhifə',
  tr: 'Ana sayfa',
  en: 'Home',
  ru: 'Главная'
} as const;

const allLinks = [...NAVBAR_LINKS, ...FOOTER_LINKS];

/**
 * Config'den sayfa bilgilerini al
 */
function getConfigData(href: string, locale: string) {
  const config = allLinks.find(link => link.href === href);
  
  if (!config) {
    return null;
  }
  
  return {
    label: config.label[locale as keyof typeof config.label],
    image: config.image,
    showBreadcrumb: config.showBreadcrumb
  };
}

/**
 * Breadcrumb item'larını oluştur
 */
function buildBreadcrumbs(
  locale: string,
  paths: Array<{ href: string; label: string }>
): BreadcrumbItem[] {
  return [
    {
      label: HOME_LABELS[locale as keyof typeof HOME_LABELS] || HOME_LABELS.en,
      href: '/'
    },
    ...paths.map(path => ({
      label: path.label,
      href: path.href
    }))
  ];
}

/**
 * HOME SAYFASI İÇİN
 */
export function getHomeHeroData(locale: string) {
  return {
    title: HOME_HERO.title[locale as keyof typeof HOME_HERO.title],
    description: HOME_HERO.description?.[locale as keyof typeof HOME_HERO.description],
    image: HOME_HERO.image,
    showBreadcrumb: false,
    isHome: true,
    breadcrumbs: [],
  };
}

/**
 * STATİK SAYFALAR İÇİN (projects, news, about, contact, vs.)
 */
export function getStaticPageHeroData(pathname: string, locale: string) {
  const locales = SUPPORTED_LANGUAGES;
  const segments = pathname.split('/').filter(p => p && !locales.includes(p));
  const currentPath = segments[0];

  if (!currentPath) {
    return getHomeHeroData(locale);
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

/**
 * DİNAMİK SAYFALAR İÇİN (projects/[slug], news/[slug])
 * Page component'lerinden çağrılır
 */
export function getDynamicPageHeroData(
  parentHref: string,
  locale: string,
  detailTitle: string,
  detailSlug: string,
  detailImage: string,
  detailDate?: string | Date
) {
  const parentConfig = getConfigData(parentHref, locale);
  
  // Fallback değerler
  const parentLabel = parentConfig?.label || parentHref.toUpperCase();
  
  return {
    title: detailTitle, // Slug'dan BÜYÜTME! Direkt başlığı kullan
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
        label: detailTitle // Slug'dan BÜYÜTME! Direkt başlığı kullan
      }
    ])
  };
}

/**
 * LAYOUT İÇİN - URL'den otomatik resolve
 * Sadece statik sayfalarda kullanılır
 */
export function resolveHeroFromUrl(pathname: string, locale: string) {
  const locales = SUPPORTED_LANGUAGES;
  const segments = pathname.split('/').filter(p => p && !locales.includes(p));
  
  // Home
  if (segments.length === 0) {
    return getHomeHeroData(locale);
  }
  
  // Detail sayfası mı? (segment > 1)
  // Detail sayfalar kendi component'lerinde useBreadcrumb ile set eder
  if (segments.length > 1) {
    return null; // Layout'a null döndür, store'dan okusun
  }
  
  // Statik sayfa
  return getStaticPageHeroData(pathname, locale);
}