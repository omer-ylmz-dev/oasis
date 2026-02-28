import { ProjectQueryParams } from '@/config/filters.config';
import { ProjectRepository, ProjectSortOptions, } from '../repositories/projectRepository';
import { NearbyPlace, Project, ProjectDetailData, ProjectFeature, ProjectHighlight, ProjectListItem } from '@/features/projects/types/project.types';
import type { Locale } from '@/shared/types/common.types';

export interface ProjectOptions {
    locale: Locale;
    filters?: ProjectQueryParams;
    sort?: ProjectSortOptions;
    page?: number;
    limit?: number;
}

export class ProjectService {
    private projectRepository = new ProjectRepository();

    toListItem(project: Project, locale: Locale): ProjectListItem {
        return {
            id: project.id,
            slug: project.slug,
            name: project.name[locale],
            overview: project.overview,
            location: project.location,
            isFeatured: project.isFeatured,
            thumbnail: project.coverPhoto
        };
    }



    localizeProject(project: Project, locale: Locale): ProjectDetailData {
        return {
            ...project,
            name: project.name[locale],
            description: project.description[locale],
            address: project.address[locale],
            location: project.location,
            nearbyPlaces: project.nearbyPlaces.map((place: NearbyPlace) => ({
                ...place,
                name: place.name[locale]
            })),
            features: project.features.map((f: ProjectFeature) => ({
                ...f,
                title: f.title[locale],
                description: f.description[locale],
            })),
            highlights: project.highlights.map((h: ProjectHighlight) => ({
                ...h,
                title: h.title[locale],
                description: h.description[locale]
            })),
        };
    }

    async getAll(options: ProjectOptions) {
        const {
            locale,
            filters = {},
            sort = 'createdAt-desc',
            page = 1,
            limit = 10
        } = options;

        let projects = this.projectRepository.filter(filters);
        projects = this.projectRepository.sort(projects, sort);
        const { items, meta } = this.projectRepository.paginate(projects, { page, limit });

        const localizedProjects = items.map(p => this.toListItem(p, locale));

        return {
            data: localizedProjects,
            meta
        };
    }

    async getBySlug(slug: string, locale: Locale) {
        const project = this.projectRepository.findBySlug(slug);

        if (!project) {
            return null;
        }

        return this.localizeProject(project, locale);
    }
}

export const projectService = new ProjectService();