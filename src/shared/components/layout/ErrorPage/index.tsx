"use client"

import { useEffect } from 'react'
import { useBreadcrumbStore } from '@/store/useBreadcrumbStore'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import Button from '../../ui/Button'
import styles from './ErrorPage.module.scss'

interface Props {
    reset: () => void
}

export default function ErrorPage({ reset }: Props) {
    const resetStore = useBreadcrumbStore(state => state.reset)
    const setError = useBreadcrumbStore(state => state.setError)
    const router = useRouter()
    const t = useTranslations('Layout.Error')

    useEffect(() => {
        resetStore()
        setError(true)
        return () => setError(false)
    }, [resetStore, setError])

   
    return (
        <div className={styles.errorPage}>
            <div className={styles.container}>
                <h1>{t('title')}</h1>
                <p>{t('description')}</p>
                <Button.primary onClick={reset}>
                    {t('retryText')}
                </Button.primary>
                <Button.outline onClick={() => router.push('/')}>
                    {t('linkText')}
                </Button.outline>
            </div>
        </div>
    )
}