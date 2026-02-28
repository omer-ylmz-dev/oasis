import { create } from 'zustand';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface HeroData {
  title: string;
  image: string;
  isHome: boolean;
  showBreadcrumb: boolean;
  breadcrumbs: BreadcrumbItem[];
  date?: string;
}

interface BreadcrumbState {
  heroData: HeroData | null;
  setHeroData: (data: HeroData) => void;
  reset: () => void;
}

export const useBreadcrumbStore = create<BreadcrumbState>((set) => ({
  heroData: null,
  
  setHeroData: (data) => set({ heroData: data }),
  
  reset: () => set({ heroData: null })
}));