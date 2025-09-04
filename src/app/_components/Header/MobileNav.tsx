'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SiteLanguage } from '../../config/site.config'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

type Props = {
  lang: SiteLanguage
  dict: any
}

export default function MobileNav({ lang, dict }: Props) {
  const pathname = usePathname()

  const links = [
    { href: `/${lang}`, label: dict.HomePage.title },
    { href: `/${lang}/keys`, label: dict.KeysPage.title },
    { href: `/${lang}/history`, label: dict.HistoryPage.title },
    { href: `/${lang}/locks`, label: dict.LocksPage.title },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">{dict.Header.open}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {links.map((link) => {
          const active = pathname === link.href
          return (
            <DropdownMenuItem
              key={link.href}
              asChild
              className={active ? 'bg-indigo-100 dark:bg-indigo-600 font-semibold' : ''}
            >
              <Link href={link.href}>{link.label}</Link>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}