import { ProjectAPI } from '@/features/projects/api/projectApi';
import ProjectDetailPage from '@/features/projects/components/ProjectDetailPage'
import { constructMetadata } from '@/shared/utils/seo';
import { getLocale } from 'next-intl/server';


interface Props {
  params: Promise<{
    locale: string;
    project_slug: string;
  }>
}



export async function generateMetadata({params}: Props) {
  const locale = await getLocale();
  
  const { project_slug } = await params;
  
  const project = await ProjectAPI.getBySlug(locale, project_slug);

  
  return constructMetadata({
    title: `${project.data.name} | OASIS`, 
    description: project.data.description, 
    image: project.data.coverPhoto, 
    locale,
    path: `projects/${project_slug}`
  });

}




export default async function ProjectDetail({ params }: Props) {
  const { locale, project_slug } = await params;

  const projectDetail = await ProjectAPI.getBySlug(locale, project_slug)

  return (
    <ProjectDetailPage projectDetail={projectDetail.data} />
  )
}
