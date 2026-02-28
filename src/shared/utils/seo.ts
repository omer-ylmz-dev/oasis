import { Metadata } from 'next';

interface MetaOptions {
  title: string;
  description: string;
  locale: string;
  image?: string;
  path: string;
}

export function constructMetadata({ title, description, locale, image, path }: MetaOptions): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ajansiniz.com';
  
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/${path}`,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/${path}`,
      images: [{ url: image || '/default-og.jpg' }],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image || '/default-og.jpg'],
    },
  };
}