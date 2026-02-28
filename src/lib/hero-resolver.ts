import { SUPPORTED_LANGUAGES } from "@/config/languages.config";
import { NAVBAR_LINKS, FOOTER_LINKS, HOME_HERO } from "@/config/navigation.config";

export function resolveHeroData(pathname: string = "/", locale: string) {
    const safePath = pathname || "/";

    const locales = SUPPORTED_LANGUAGES;
    const segments = pathname.split('/').filter(p => p && !locales.includes(p));
    const currentPath = segments[0] || '';
    const slug = segments[1];



    if (!currentPath) {
        return {
            title: HOME_HERO.title[locale as keyof typeof HOME_HERO.title],
            description: HOME_HERO.description[locale as keyof typeof HOME_HERO.description], // Bu eklendi
            image: HOME_HERO.image,
            showBreadcrumb: false,
            isHome: true 
        };
    }

    if (slug) {
        return {
            title: slug.replace(/-/g, ' ').toUpperCase(),
            image: `/images/hero/${currentPath}/${slug}.jpg`,
            showBreadcrumb: true,
            pathname
        };
    }

    
    const allLinks = [...NAVBAR_LINKS, ...FOOTER_LINKS];
    const config = allLinks.find(link => link.href === currentPath);

    if (config) {
        return {
            title: config.label[locale as keyof typeof config.label],
            image: config.image,
            showBreadcrumb: config.showBreadcrumb,
            pathname
        };
    }


    return { title: '', image: '/images/hero/default.jpg', showBreadcrumb: true, pathname };
}