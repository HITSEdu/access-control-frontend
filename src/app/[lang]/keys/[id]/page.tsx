import { SiteLanguage } from '@/app/config/site.config'
import { Metadata } from 'next'
import { fetchKey } from '@/data/keys/fetchKey'
import KeyItem from '@/app/[lang]/keys/_components/KeyItem'
import { getDictionary } from '@/app/[lang]/dictionaries'

export const metadata: Metadata = {
  title: 'Key',
}

type Props = {
  params: Promise<{ id: string, lang: SiteLanguage }>
}

export default async function KeyPage({ params }: Props) {
  const { id, lang } = await params
  const dict = await getDictionary(lang)
  const { data } = await fetchKey(id)

  if (!data) return null

  return (
    <div className="flex flex-col items-center mt-4 gap-4 mx-2">
      <KeyItem
        mode="details"
        item={data}
        dict={dict}
      />
    </div>
  )
}
