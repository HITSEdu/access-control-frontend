import Link from 'next/link'
import { getDictionary } from '../[lang]/dictionaries'
import { LanguageParams } from '@/app/config/site.config'
import ModeToggle from '@/app/_components/ModeToggle'

export default async function Header({ params }: LanguageParams) {
  const locale = await params
  const dict = await getDictionary(locale.lang)

  return (
    <header className="flex items-center justify-between w-full px-6 py-4 shadow-md">
      <div className="text-2xl font-bold tracking-tight">
        <Link href={`/${locale.lang}`}>Access Control</Link>
      </div>

      <nav className="hidden md:flex space-x-6">
        <Link
          href={`/${locale.lang}`}
          className="hover:text-indigo-400 transition-colors"
        >
          {dict.HomePage.title}
        </Link>
        <Link
          href={`/${locale.lang}/keys`}
          className="hover:text-indigo-400 transition-colors"
        >
          {dict.KeysPage.title}
        </Link>
        <Link
          href={`/${locale.lang}/history`}
          className="hover:text-indigo-400 transition-colors"
        >
          {dict.HistoryPage.title}
        </Link>
      </nav>

      <ModeToggle />
    </header>
  )
}
