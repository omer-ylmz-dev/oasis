import ListingSection from '@/shared/components/common/ListingSection'
import { ProjectResponse } from '../types/project.types'


export default function ProjectsPage({ projects }: { projects: ProjectResponse }) {
  
  return (
    <ListingSection
      variant="projects"
      data={projects.data}
      meta={projects.meta}
    />
  )
}
