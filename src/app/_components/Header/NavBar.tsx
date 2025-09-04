'use client'

import Link from 'next/link'
import { SiteLanguage } from '@/app/config/site.config'
import { usePathname } from 'next/navigation'

type Props = {
  lang: SiteLanguage
  dict: any;
}

export default function NavBar({ lang, dict }: Props) {
  const pathname = usePathname()

  const links = [
    { href: `/${lang}`, label: dict.HomePage.title },
    { href: `/${lang}/keys`, label: dict.KeysPage.title },
    { href: `/${lang}/history`, label: dict.HistoryPage.title },
    { href: `/${lang}/locks`, label: dict.LocksPage.title },
  ]

  return (
    <nav className="hidden sm:flex space-x-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`transition-colors hover:text-indigo-400 ${
            pathname === link.href ? 'text-indigo-500 font-semibold' : 'text-gray-700 dark:text-gray-300'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}