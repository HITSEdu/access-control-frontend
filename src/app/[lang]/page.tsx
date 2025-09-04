import { getDictionary } from './dictionaries'
import { LanguageParams } from '@/app/config/site.config'

export default async function Page({ params }: LanguageParams) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <h1>{dict.HomePage.title}</h1>
}
