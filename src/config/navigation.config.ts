import { BsInstagram, BsFacebook, BsYoutube, BsTwitterX } from "react-icons/bs";


const BASE_PAGES = {
  projects: {
    href: 'projects',
    image: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1920&h=1080',
    showBreadcrumb: true,
    label: { az: 'Layihələr', tr: 'Projeler', en: 'Projects', ru: 'Проекты' }
  },
  news: {
    href: 'news',
    image: 'https://images.unsplash.com/photo-1579532582937-16c108930bf6?w=1920&h=1080',
    showBreadcrumb: true,
    label: {
      az: 'Xəbərlər',
      tr: 'Haberler',
      en: 'News',
      ru: 'Новости'
    }
  },
  about: {
    href: 'about',
    image: 'https://images.unsplash.com/photo-1746364742672-c6383331b032?w=1920&h=1080',
    showBreadcrumb: true,
    label: { az: 'Haqqımızda', tr: 'Hakkımızda', en: 'About Us', ru: 'О нас' }
  },
  contact: {
    href: 'contact',
    image: 'https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=1920&h=1080',
    showBreadcrumb: true,
    label: { az: 'Əlaqə', tr: 'İletişim', en: 'Contact Us', ru: 'Контакты' }
  },
  sustainability: {
    href: 'sustainability',
    image: '/images/hero/sustainability.jpg',
    showBreadcrumb: true,
    label: { az: 'Davamlılıq', tr: 'Sürdürülebilirlik', en: 'Sustainability', ru: 'Устойчивость' }
  },
  privacy: {
    href: 'privacy',
    image: '/images/hero/privacy.jpg',
    showBreadcrumb: true,
    label: { az: 'Məxfilik Siyasəti', tr: 'Gizlilik Politikası', en: 'Privacy Policy', ru: 'Политика конфиденциальности' }
  }
};


export const NAVBAR_LINKS = [
  BASE_PAGES.projects,
  BASE_PAGES.news,
  BASE_PAGES.about,
  BASE_PAGES.contact
];


export const FOOTER_LINKS = [
  ...NAVBAR_LINKS,
  BASE_PAGES.sustainability,
  BASE_PAGES.privacy
];



export const HOME_HERO = {
  image: '/home.jpg',
  title: {
    az: 'ICONIC DESIGN, INSPIRING AMENITIES',
    tr: 'İKONİK TASARIM, İLHAM VEREN OLANAKLAR',
    en: 'ICONIC DESIGN, INSPIRING AMENITIES',
    ru: 'ИКОНИЧЕСКИЙ ДИZАЙН'
  },
  description: {
    az: 'Lorem ipsum dolor sit amet...',
    tr: 'Lorem ipsum dolor sit amet...',
    en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a mi ac elit efficitur pharetra.',
    ru: 'Lorem ipsum dolor sit amet...'
  }
};

export const HIDE_HERO_PATHS = ['account', 'login', 'register'];

export const SOCIAL_LINKS = [
  { href: 'https://www.instagram.com/yourprofile', icon: BsInstagram },
  { href: 'https://www.facebook.com/yourprofile', icon: BsFacebook },
  { href: 'https://www.youtube.com/yourchannel', icon: BsYoutube },
  { href: 'https://twitter.com/yourprofile', icon: BsTwitterX }
];