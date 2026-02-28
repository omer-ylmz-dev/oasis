"use client"

import { useEffect } from 'react';
import { useBreadcrumbStore, HeroData } from '@/store/useBreadcrumbStore';

export function useBreadcrumb(heroData: HeroData) {
  const setHeroData = useBreadcrumbStore(state => state.setHeroData);
  const reset = useBreadcrumbStore(state => state.reset);
  

  useEffect(() => {
    setHeroData(heroData);

    return () => {
      reset();
    };
  }, [heroData, setHeroData, reset]);
}