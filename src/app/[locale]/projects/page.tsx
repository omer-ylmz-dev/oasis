import { ProjectAPI } from '@/features/projects/api/projectApi'
import ProjectsPage from '@/features/projects/ProjectsPage'
import JsonLd from '@/shared/components/layout/JsonLD';
import { sanitizeFilters } from '@/shared/utils/filter';
import { getPageMetadata } from '@/shared/utils/metadata';
import { createItemListSchema } from '@/shared/utils/schema';
import { getLocale } from 'next-intl/server';

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata() {
  const locale = await getLocale();
  return getPageMetadata('projects', locale);

}

export default async function Projects({ searchParams }: Props) {
  const locale = await getLocale();
  const rawFilters = await searchParams;

  const projects = await ProjectAPI.getAll(locale, sanitizeFilters(rawFilters));

  
  return (
    <>
      <JsonLd data={createItemListSchema(projects.data, locale, 'Project')} />
      <ProjectsPage projects={projects} />
    </>
  )
}
