import { ProjectQueryParams } from "@/config/filters.config";

interface ProjectAPIFilters extends ProjectQueryParams {
    page?: string;
}


export const ProjectAPI = {
    async getAll(locale: string, filters: ProjectAPIFilters = {}) {
        const params = new URLSearchParams();
        params.set('locale', locale);


        const page = filters.page || '1';
        const limit = '9';

        params.set('page', page);
        params.set('limit', limit);


        Object.entries(filters).forEach(([key, value]) => {
            if (value && key !== 'page' && key !== 'limit') params.set(key, String(value));
        });

        const response = await fetch(`${process.env.API_URL}/projects?${params.toString()}`);
        return response.json();
    },
    async getBySlug(locale: string, project_slug: string) {
        const params = new URLSearchParams();

        params.set('locale', locale)

        const response = await fetch(`${process.env.API_URL}/projects/${project_slug}?${params.toString()}`,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch project")
        }

        return response.json();
    }
}