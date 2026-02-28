import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';
import HeroSection from '@/shared/components/layout/HeroSection';
import SubscribeSection from '@/shared/components/layout/SubscribeSection';

import "@/styles/globals.scss"
import { poppins } from '@/lib/fonts';
import ScrollReset from '@/shared/components/layout/ScrollReset';
import ModalManager from '@/shared/components/common/ModalManager';
import { Languages } from '@/config/languages.config';


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;

  if (!routing.locales.includes(locale as Languages)) {
    notFound();
  }

  const messages = await getMessages();


  return (
    <html lang={locale}>
      <body className={`${poppins.className} `}>
        <NextIntlClientProvider messages={messages}>
          <ScrollReset />
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            <HeroSection locale={locale} />
            <div id="main-section">
              {children}
            </div>
          </main>
          <SubscribeSection />
          <Footer />
          <ModalManager />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}