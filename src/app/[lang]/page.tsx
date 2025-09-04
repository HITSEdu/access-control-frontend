import { getDictionary } from './dictionaries'
import { SiteLanguage } from '@/app/config/site.config'

export type LanguageProps = {
  params: { lang: SiteLanguage }
}

export default async function Home({ params }: LanguageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <div>
      <h1>{dict.HomePage.title}</h1>
    </div>
  )
}
