export type SiteLanguage = 'en' | 'ru'

export const sitePages = {
  home: { path: '/', labelKey: 'HomePage.title' },
  keys: { path: '/keys', labelKey: 'KeysPage.title' },
  history: { path: '/history', labelKey: 'HistoryPage.title' },
} as const

export type SitePageKey = keyof typeof sitePages

export type LanguageParams = {
  params: Promise<{ lang: SiteLanguage }>
}