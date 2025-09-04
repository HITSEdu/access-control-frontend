import { LanguageParams } from '@/app/config/site.config'
import { getDictionary } from '@/app/[lang]/dictionaries'
import HistoryList from '@/app/[lang]/history/_components/HistoryList'
import { Suspense } from 'react'
import SkeletonCard from '@/app/_components/LoadingSkeleton'
import { Metadata } from 'next'
import LocksList from '@/app/[lang]/locks/_components/LocksList'

export const metadata: Metadata = {
  title: 'Locks',
}

export default async function LocksPage({ params }: LanguageParams) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col items-center mt-4 gap-4 mx-2">
      {dict.LocksPage.title}
      <Suspense fallback={<SkeletonCard />}>
        <LocksList dict={dict} />
      </Suspense>
    </div>
  )
}
