import { ListingVariant, LocalizedString } from "@/shared/types/common.types";
import { ProjectStatus, ProjectType } from "@/features/projects/types/project.types";
import { NewsCategory } from "@/features/news/types/news.types";
import { PROJECT_STATUS_LABELS, PROJECT_LOCATION_LABELS, PROJECT_TYPE_LABELS, PROJECT_SORT_OPTIONS } from "@/features/projects/constants";
import { NEWS_CATEGORY_LABELS, NEWS_SORT_OPTIONS } from "@/features/news/constants";


export interface FilterOption<T = string> {
    value: T;
    label: LocalizedString;
}

export interface ProjectFilters {
    status: FilterOption<ProjectStatus>[];
    type: FilterOption<ProjectType>[];
    location: FilterOption<string>[];
}

export interface NewsFilters {
    category: FilterOption<NewsCategory>[];
}

export type SortOptions = {
    [K in ListingVariant]: FilterOption[];
};



export interface ProjectQueryParams {
    status?: string;
    type?: string;
    location?: string;
}





export const PROJECT_FILTERS: ProjectFilters = {
    status: (Object.keys(PROJECT_STATUS_LABELS) as ProjectStatus[]).map((key) => ({
        value: key,
        label: PROJECT_STATUS_LABELS[key]
    })),

    type: (Object.keys(PROJECT_TYPE_LABELS) as ProjectType[]).map((key) => ({
        value: key,
        label: PROJECT_TYPE_LABELS[key]
    })),

    location: (Object.keys(PROJECT_LOCATION_LABELS)).map((key) => ({
        value: key,
        label: PROJECT_LOCATION_LABELS[key]
    }))
};





export const NEWS_FILTERS = {
    category: (Object.keys(NEWS_CATEGORY_LABELS) as NewsCategory[]).map((key) => ({
        value: key,
        label: NEWS_CATEGORY_LABELS[key]
    }))
};




export const SORT_OPTIONS = {
    projects: PROJECT_SORT_OPTIONS,
    news: NEWS_SORT_OPTIONS
};