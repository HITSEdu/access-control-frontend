import { LanguageParams } from '@/app/config/site.config'
import { getDictionary } from '@/app/[lang]/dictionaries'
import HistoryList from '@/app/[lang]/history/_components/HistoryList'
import { Suspense } from 'react'
import SkeletonCard from '@/app/_components/LoadingSkeleton'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'History',
}

export default async function HistoryPage({ params }: LanguageParams) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col items-center mt-4 gap-4 mx-2">
      <Suspense fallback={<SkeletonCard />}>
        <HistoryList dict={dict} />
      </Suspense>
    </div>
  )
}
