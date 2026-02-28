import ProjectCard from './variants/ProjectCard'
import NewsCard from './variants/NewsCard'

export const ListingCard = {
  project: ProjectCard,
  news: NewsCard,
} as const

export type ListingCardVariant = keyof typeof ListingCard

export default ListingCard;