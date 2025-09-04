import { getDictionary } from './dictionaries'
import { LanguageParams } from '@/app/config/site.config'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, KeyRound } from 'lucide-react'

export default async function Page({ params }: LanguageParams) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <main className="container mx-auto max-w-4xl py-10 space-y-8 px-4">
      <section className="text-center space-y-4">
        <div className="flex justify-center">
          <KeyRound className="w-14 h-14 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          {dict.HomePage.title}
        </h1>
        <p className="text-lg text-muted-foreground">
          {dict.HomePage.subtitle}
        </p>
        <div className="flex justify-center gap-1">
          {[...Array(3)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-yellow-500 fill-yellow-500"
            />
          ))}
        </div>
      </section>
      <Card>
        <CardHeader>
          <CardTitle>{dict.HomePage.goalTitle}</CardTitle>
          <CardDescription>{dict.HomePage.goalDesc}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3 className="font-semibold">{dict.HomePage.contextTitle}</h3>
          <p className="text-sm text-muted-foreground">
            {dict.HomePage.contextDesc}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>{dict.HomePage.mvpTitle}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2 text-sm text-muted-foreground">
          <p>✔ {dict.HomePage.mvp1}</p>
          <p>✔ {dict.HomePage.mvp2}</p>
          <p>✔ {dict.HomePage.mvp3}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>{dict.HomePage.extraTitle}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2 text-sm text-muted-foreground">
          <p>★ {dict.HomePage.extra1}</p>
          <p>★ {dict.HomePage.extra2}</p>
          <p>★ {dict.HomePage.extra3}</p>
          <p>★ {dict.HomePage.extra4}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>{dict.HomePage.stackTitle}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
          >{dict.HomePage.stack1}</Badge>
          <Badge variant="outline">{dict.HomePage.stack2}</Badge>
        </CardContent>
      </Card>
    </main>
  )
}
