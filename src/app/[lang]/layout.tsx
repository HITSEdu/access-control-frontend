import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import '../globals.css'
import ThemeProvider from '@/app/_components/providers/ThemeProvider'
import Header from '@/app/_components/Header/Header'
import { ReactNode } from 'react'
import { SiteLanguage } from '@/app/config/site.config'
import { Toaster } from '@/components/ui/sonner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Access Control',
    default: 'Access Control',
  },
  description: 'Система криптографического управления доступом (MVP, InfoTeX).',
  keywords: ['access control', 'crypto', 'InfoTeX', 'security', 'MVP'],
  authors: [{ name: 'ИНФОТЕКС' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/icon0.svg',
    apple: '/apple-icon.png',
  },
  metadataBase: new URL('https://localhost:3000'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'ru-RU': '/ru',
    },
  },
  openGraph: {
    title: 'Access Control',
    description:
      'Криптографическая система управления доступом. Эмулятор карты и контроллера для безопасного входа.',
    siteName: 'Access Control',
    images: [
      {
        url: '/icon1.png',
        width: 512,
        height: 512,
        alt: 'Access Control Logo',
      },
    ],
    locale: 'en_US',
    type: 'website'
  },
}

export default async function RootLayout({
                                           children,
                                           params,
                                         }: Readonly<{
  children: ReactNode
  params: Promise<{ lang: SiteLanguage }>
}>) {
  const locale = await params

  return (
    <html
      lang={locale.lang}
      suppressHydrationWarning
    >
    <body
      className={`${geistSans.variable} antialiased`}
    >
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header params={params} />
      {children}
      <Toaster
        richColors={true}
        closeButton={true}
        position="top-right"
      />
    </ThemeProvider>
    </body>
    </html>
  )
}
