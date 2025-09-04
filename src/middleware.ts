import { NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['en', 'ru']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  try {
    const headers = Object.fromEntries(request.headers.entries())
    const languages = new Negotiator({ headers }).languages()

    const baseLanguages = languages.map(l => l.split('-')[0])
    return match(baseLanguages, locales, defaultLocale)
  } catch (e) {
    return 'en'
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next).*)'],
}
