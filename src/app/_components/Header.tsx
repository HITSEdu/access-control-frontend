import ModeToggle from '@/app/_components/ModeToggle'
import Link from 'next/link'
import { LanguageProps } from '@/app/[lang]/page'

export default async function Header({ params }: LanguageProps) {
  return (
    <header className="flex items-center justify-between w-full px-6 py-4 shadow-md">
      <div className="text-2xl font-bold tracking-tight">
        <Link href="/">MyApp</Link>
      </div>

      <nav className="hidden md:flex space-x-6">
        <Link
          href="/"
          className="hover:text-indigo-400 transition-colors"
        >Home</Link>
        <Link
          href="/about"
          className="hover:text-indigo-400 transition-colors"
        >About</Link>
        <Link
          href="/contact"
          className="hover:text-indigo-400 transition-colors"
        >Contact</Link>
      </nav>

      <ModeToggle />
    </header>
  )
}
