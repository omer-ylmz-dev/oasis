import AboutPage from '@/features/about/components/AboutPage'
import JsonLd from '@/shared/components/layout/JsonLD'
import { getPageMetadata } from '@/shared/utils/metadata';
import { createOrganizationSchema } from '@/shared/utils/schema'
import { getLocale } from 'next-intl/server';


export async function generateMetadata() {
  const locale = await getLocale();
  return getPageMetadata('about', locale);
}

export default async function About() {
  const locale = await getLocale();

  return (
    <>
    <JsonLd data={createOrganizationSchema(locale)} />
      <AboutPage />
    </>
  )
}
