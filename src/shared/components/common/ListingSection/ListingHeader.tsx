'use client';

import { useFilters } from '@/shared/hooks/useFilters';
import { PROJECT_FILTERS, SORT_OPTIONS } from '@/config/filters.config';
import { useLocale, useTranslations } from 'next-intl';
import { ListingVariant, Locale } from '@/shared/types/common.types';


import styles from "./ListingSection.module.scss"
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import { useState } from 'react';

interface Props { variant: ListingVariant; }

export default function ListingHeader({ variant }: Props) {
    const locale = useLocale() as Locale;
    const t = useTranslations();
    const { updateFilter, updateMultipleFilters, getFilter, clearFilters } = useFilters();

    const [localFilters, setLocalFilters] = useState({
        status: getFilter('status') || '',
        location: getFilter('location') || '',
        type: getFilter('type') || ''
    });

    const handleSearch = () => {
        updateMultipleFilters(localFilters);
    };

    const handleClear = () => {
        setLocalFilters({ status: '', location: '', type: '' });
        clearFilters();
    };

    return (
        <header className={styles.header}>
            {variant === "projects" && (
                <div className={styles.filterWrapper}>
                    <Select
                        value={localFilters.status}
                        onChange={(e) => setLocalFilters(prev => ({ ...prev, status: e.target.value }))}
                        options={PROJECT_FILTERS.status.map(s => ({
                            value: s.value,
                            label: s.label[locale]
                        }))}
                        placeholder={t('Pages.Projects.Filters.projectStatus')}
                    />

                    <Select
                        value={localFilters.location}
                        onChange={(e) => setLocalFilters(prev => ({ ...prev, location: e.target.value }))}
                        options={PROJECT_FILTERS.location.map(l => ({
                            value: l.value,
                            label: l.label[locale]
                        }))}
                        placeholder={t('Pages.Projects.Filters.projectLocation')}
                    />

                    <Select
                        value={localFilters.type}
                        onChange={(e) => setLocalFilters(prev => ({ ...prev, type: e.target.value }))}
                        options={PROJECT_FILTERS.type.map(t => ({
                            value: t.value,
                            label: t.label[locale]
                        }))}
                        placeholder={t('Pages.Projects.Filters.projectType')}
                    />

                    <Button.primary onClick={handleSearch}>
                        {t('Common.Filters.search')}
                    </Button.primary>

                    <Button.outline onClick={handleClear}>
                        {t('Common.Filters.clear')}
                    </Button.outline>
                </div>
            )}

            <div className={styles.sorterWrapper}>
                <Select
                    value={getFilter('sort') || (variant === 'projects' ? 'createdAt-desc' : 'publishedAt-desc')} 
                    onChange={(e) => updateFilter('sort', e.target.value)}
                    options={SORT_OPTIONS[variant].map(s => ({
                        value: s.value,
                        label: s.label[locale]
                    }))}
                    placeholder={t('Common.Filters.sorting')}
                />
            </div>
        </header>
    );
}
