import Link from 'next/link'
import { LanguageParams } from '@/app/config/site.config'
import ModeToggle from '@/app/_components/Header/ModeToggle'
import MobileNav from '@/app/_components/Header/MobileNav'
import NavBar from '@/app/_components/Header/NavBar'
import { getDictionary } from '@/app/[lang]/dictionaries'

export default async function Header({ params }: LanguageParams) {
  const locale = await params
  const dict = await getDictionary(locale.lang)

  return (
    <header className="flex items-center justify-between w-full px-6 py-4 shadow-md">
      <div className="text-2xl font-bold tracking-tight">
        <Link href={`/${locale.lang}`}>Access Control</Link>
      </div>
      <NavBar
        lang={locale.lang}
        dict={dict}
      />
      <div className="flex items-center justify-between gap-2">
        <div className="sm:hidden">
          <MobileNav
            lang={locale.lang}
            dict={dict}
          />
        </div>
        <ModeToggle dict={dict} />
      </div>
    </header>
  )
}
