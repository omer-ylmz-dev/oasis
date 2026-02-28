import { NewsAPI } from '@/features/news/api/newsApi';
import NewsDetailPage from '@/features/news/NewsDetailPage'
import { constructMetadata } from '@/shared/utils/seo';
import { getLocale } from 'next-intl/server';


interface Props {
  params: Promise<{
    locale: string;
    news_slug: string;
  }>;
}


export async function generateMetadata({params}: Props) {
  const locale = await getLocale();
  
  const { news_slug } = await params;
  
  const news = await NewsAPI.getBySlug(locale, news_slug);

  return constructMetadata({
    title: `${news.data.title} | OASIS`, 
    description: news.data.shortDescription, 
    image: news.data.coverPhoto, 
    locale,
    path: `news/${news_slug}`
  });

}

export default async function NewsDetail({ params }: Props) {
  const { locale, news_slug } = await params;

  const newsDetail = await NewsAPI.getBySlug(locale, news_slug);

  return (
    <NewsDetailPage newsDetail={newsDetail.data} />
  )
}
