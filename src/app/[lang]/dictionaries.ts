import 'server-only'
import { SiteLanguage } from '@/app/config/site.config'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((mod) => mod.default),
  ru: () => import('./dictionaries/ru.json').then((mod) => mod.default),
}

export const getDictionary = async (locale: SiteLanguage) =>
  dictionaries[locale]()
