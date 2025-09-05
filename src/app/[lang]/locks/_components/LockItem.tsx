'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LockType } from '@/types/state.type'
import { KeyIcon } from 'lucide-react'

type Props = {
  lock: LockType
  dict: any
}

export default function LockItem({ lock, dict }: Props) {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <KeyIcon className="w-5 h-5 text-primary" />
          {lock.id}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {lock.keys.length > 0 ? (
          lock.keys.map((keyId) => (
            <Link
              key={keyId}
              href={`/keys/${keyId}`}
            >
              <Button
                variant="outline"
                size="sm"
              >
                🔑 {keyId}
              </Button>
            </Link>
          ))
        ) : (
          <p className="text-muted-foreground text-sm">{dict.KeysPage.noKeys}</p>
        )}
      </CardContent>
    </Card>
  )
}
