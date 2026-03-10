"use client"

import ErrorPage from '@/shared/components/layout/ErrorPage'

interface Props {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  return <ErrorPage reset={reset} />
}