import AddKeyForm from '@/app/[lang]/keys/_components/AddKeyForm'
import KeyList from '@/app/[lang]/keys/_components/KeyList'
import { LanguageParams } from '@/app/config/site.config'
import { getDictionary } from '@/app/[lang]/dictionaries'

export default async function KeysPage({ params }: LanguageParams) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col items-center mt-4 gap-4 mx-2">
      <AddKeyForm dict={dict} />
      <KeyList dict={dict} />
    </div>
  )
}
