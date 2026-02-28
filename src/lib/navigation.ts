import { SUPPORTED_LANGUAGES } from "@/config/languages.config";
import { NAVBAR_LINKS, FOOTER_LINKS } from "@/config/navigation.config";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function getBreadcrumbs(pathname: string = "/", locale: string): BreadcrumbItem[] {
  const safePathname = pathname || "/";

  const locales = SUPPORTED_LANGUAGES;
  const pathParts = pathname.split('/').filter(part => part && !locales.includes(part));
  
  const homeLabels: Record<string, string> = { 
    az: 'Ana səhifə', 
    tr: 'Ana sayfa', 
    en: 'Home', 
    ru: 'Главная'
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { label: homeLabels[locale] || 'Home', href: '/' }
  ];

  const allLinks = [...NAVBAR_LINKS, ...FOOTER_LINKS];

  pathParts.forEach((part, index) => {
    const configMatch = allLinks.find(l => l.href === part);
    const label = configMatch 
        ? configMatch.label[locale as keyof typeof configMatch.label] 
        : part.replace(/-/g, ' ').toUpperCase();

    breadcrumbs.push({
      label: label,
      href: `/${pathParts.slice(0, index + 1).join('/')}`
    });
  });

  return breadcrumbs;
}