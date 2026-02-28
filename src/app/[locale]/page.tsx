import HomePage from "@/features/home/components/HomePage";
import JsonLd from "@/shared/components/layout/JsonLD";
import { getPageMetadata } from "@/shared/utils/metadata";
import { createOrganizationSchema } from "@/shared/utils/schema";
import { getLocale } from "next-intl/server";


export async function generateMetadata() {
  const locale = await getLocale();
  return getPageMetadata('home', locale);

}

export default async function Home() {
  const locale = await getLocale();

  
  return (
    <>
      <JsonLd data={createOrganizationSchema(locale)} />
      <HomePage />
    </>
  );
}
