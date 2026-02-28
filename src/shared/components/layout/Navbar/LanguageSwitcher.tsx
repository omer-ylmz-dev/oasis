"use client"

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing'; 
import { ChangeEvent, useTransition } from 'react';
import { BsGlobe2 } from 'react-icons/bs';
import styles from "./Navbar.module.scss";
import { languages } from '@/config/languages.config';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale, scroll: false });
    });
  };

  return (
    <div className={`${styles.languageSwitcher} ${isPending ? styles.loading : ''}`}>
      <BsGlobe2 />
      <select 
        defaultValue={locale} 
        onChange={onSelectChange}
        disabled={isPending}
      >
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
