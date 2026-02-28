import { ProjectQueryParams } from '@/config/filters.config';
import { projectsData } from '@/data/projects';
import { Project } from '@/features/projects/types/project.types';


export interface PaginationOptions {
    page: number;
    limit: number;
}

export type ProjectSortField = 'name' | 'area' | 'createdAt';
export type SortOrder = 'asc' | 'desc';

export type ProjectSortString = `${ProjectSortField}-${SortOrder}`;

export type ProjectSortOptions = ProjectSortString;


export class ProjectRepository {
    private data: Project[] = projectsData;

    findAll(): Project[] {
        return [...this.data];
    }

    findBySlug(slug: string): Project | null {
        return this.data.find(p => p.slug === slug) || null;
    }

    findById(id: string): Project | null {
        return this.data.find(p => p.id === id) || null;
    }

    filter(filters: ProjectQueryParams): Project[] {
        let result = this.findAll();

        if (filters.status) {
            result = result.filter(p => p.overview.status === filters.status);
        }

        if (filters.type) {
            result = result.filter(p => p.overview.type === filters.type);
        }

        if (filters.location) {
            const searchSlug = filters.location.toLowerCase();

            result = result.filter(p => {
                const projectLocationSlug = `${p.location.city.slug}-${p.location.country.slug}`.toLowerCase();
                return projectLocationSlug === searchSlug;
            });
        }

        return result;
    }


    sort(projects: Project[], sortParam: ProjectSortOptions = 'createdAt-desc'): Project[] {
        const [field, order] = sortParam.split('-') as [ProjectSortField, SortOrder];

        return [...projects].sort((a, b) => {
            switch (field) {
                case 'name':
                    return order === 'desc'
                        ? b.name.en.localeCompare(a.name.en)
                        : a.name.en.localeCompare(b.name.en);

                case 'area': {
                    const diff = a.overview.area - b.overview.area;
                    return order === 'desc' ? -diff : diff;
                }

                case 'createdAt':
                default: {
                    const diff = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                    return order === 'desc' ? -diff : diff;
                }
            }
        });
    }

    paginate(projects: Project[], options: PaginationOptions) {
        const { page, limit } = options;
        const total = projects.length;
        const totalPages = Math.ceil(total / limit);
        const start = (page - 1) * limit;
        const end = start + limit;

        return {
            items: projects.slice(start, end),
            meta: {
                total,
                page,
                limit,
                totalPages,
                hasMore: page < totalPages
            }
        };
    }
}
