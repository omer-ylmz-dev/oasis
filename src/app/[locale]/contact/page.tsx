import ContactPage from '@/features/contact/ContactPage'
import JsonLd from '@/shared/components/layout/JsonLD';
import { getPageMetadata } from '@/shared/utils/metadata';
import { createOrganizationSchema } from '@/shared/utils/schema';
import { getLocale } from 'next-intl/server';



export async function generateMetadata() {
  const locale = await getLocale();
  return getPageMetadata('contact', locale);
}



export default async function Contact() {
  const locale = await getLocale();

  return (
    <>
      <JsonLd data={createOrganizationSchema(locale)} />
      <ContactPage />
    </>
  )
}
