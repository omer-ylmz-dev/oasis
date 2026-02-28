import { NewsAPI } from '@/features/news/api/newsApi';
import NewsPage from '@/features/news/NewsPage'
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
  return getPageMetadata('news', locale);

}

export default async function News({ searchParams }: Props) {
  const locale = await getLocale();
  const rawFilters = await searchParams;

  const news = await NewsAPI.getAll(locale, sanitizeFilters(rawFilters));

  return (
    <>
      <JsonLd data={createItemListSchema(news.data, locale, 'News')} />
      <NewsPage news={news} />
    </>
  )
}
