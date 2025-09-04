import { LanguageParams } from '@/app/config/site.config'
import { getDictionary } from '@/app/[lang]/dictionaries'
import HistoryList from '@/app/[lang]/history/_components/HistoryList'

export default async function HistoryPage({ params }: LanguageParams) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col items-center mt-4 gap-4 mx-2">
      {dict.HistoryPage.title}
      <HistoryList dict={dict} />
    </div>
  )
}
