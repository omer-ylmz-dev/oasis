"use client"

import { useEffect } from 'react'
import { useBreadcrumbStore } from '@/store/useBreadcrumbStore'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import Button from '../../ui/Button'
import styles from './NotFound.module.scss'

export default function NotFoundPage() {
  const reset = useBreadcrumbStore(state => state.reset)
  const router = useRouter()
  const t = useTranslations('Layout.NotFound')

  useEffect(() => {
    reset()
  }, [reset])

  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <Button.primary onClick={() => router.push('/')}>
          {t('linkText')}
        </Button.primary>
      </div>
    </div>
  )
}