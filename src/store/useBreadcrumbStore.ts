import { create } from 'zustand';

export interface BreadcrumbItem {
  label: string;
  href: string;
}



export type HeroData =
  | {
    isHome: true;
    showBreadcrumb: false;
    breadcrumbs: [];
    }
  | {
    isHome: false;
    title: string;
    image: string;
    showBreadcrumb: boolean;
    breadcrumbs: BreadcrumbItem[];
    date?: string;
  };



interface BreadcrumbState {
  heroData: HeroData | null;
  isError: boolean;
  clearHeroData: () => void;
  setHeroData: (data: HeroData) => void;
  setError: (val: boolean) => void;
  reset: () => void;
}

export const useBreadcrumbStore = create<BreadcrumbState>((set) => ({
  heroData: null,
  isError: false,
  clearHeroData: () => set({ heroData: null, isError: false }),
  setHeroData: (data) => set({ heroData: data }),
  setError: (val) => set({ isError: val }),
  reset: () => set({ heroData: null })
}));