'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function useFilters() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const updateFilter = useCallback((key: string, value: string | null) => {
        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        
        params.set('page', '1');

        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }, [searchParams, pathname, router]);

    const updateMultipleFilters = useCallback((filters: Record<string, string | null>) => {
        const params = new URLSearchParams(searchParams.toString());

        Object.entries(filters).forEach(([key, value]) => {
            if (value) {
                params.set(key, value);
            } else {
                params.delete(key);
            }
        });

        params.set('page', '1');
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }, [searchParams, pathname, router]);
    

    const clearFilters = useCallback(() => {
        router.push(pathname, { scroll: false });
    }, [pathname, router]);

    const getFilter = useCallback((key: string) => {
        return searchParams.get(key);
    }, [searchParams]);

    const getAllFilters = useCallback(() => {
        return Object.fromEntries(searchParams.entries());
    }, [searchParams]);

    return {
        updateFilter,
        updateMultipleFilters,
        clearFilters,
        getFilter,
        getAllFilters
    };
}