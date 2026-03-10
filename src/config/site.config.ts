export interface SiteConfig {
  brand: string;
  developer: {
    name: string;
    link: string;
  }
  currentYear: number;
}


export const SITE_CONFIG: SiteConfig = {
  brand: "OASIS",
  developer: {
    name: "omer-ylmz-dev",
    link: "https://github.com/omer-ylmz-dev"
  },
  currentYear: new Date().getFullYear()
};

