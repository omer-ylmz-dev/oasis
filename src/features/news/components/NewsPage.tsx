import ListingSection from '@/shared/components/common/ListingSection'
import { NewsResponse } from '../types/news.types'


interface Props {
  news: NewsResponse; 
}

export default function NewsPage({ news }: Props) {
  return (
    <ListingSection
      variant="news"
      data={news.data}
      meta={news.meta}
    />
  )
}
