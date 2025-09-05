'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { KeyType } from '@/types/state.type'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useActionState, useEffect } from 'react'
import { deleteKey } from '@/actions/keys'
import { Copy, Trash2, LockOpen } from 'lucide-react'

type Props = {
  item: KeyType
  dict: any
  mode?: 'list' | 'details'
}

export default function KeyItem({ item, dict, mode = 'list' }: Props) {
  const [state, action, pending] = useActionState(deleteKey.bind(null, item.id), {})

  useEffect(() => {
    if (!pending) {
      if (state.status === 'error') {
        toast.error(dict.KeysPage.deletedError)
      } else if (state.status === 'success') {
        toast.success(dict.KeysPage.deleted)
      }
    }
  }, [state.status])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(item.seed)
      toast.success(dict.KeysPage.copied)
    } catch {
      toast.error(dict.KeysPage.copyError)
    }
  }

  return (
    <Card className="shadow-sm hover:shadow-md transition-all">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{dict.KeysPage.keyTitle}</span>
          <Badge
            variant="outline"
            className="bg-chart-2"
          >
            {item.id.slice(0, 6)}…
          </Badge>
        </CardTitle>
        <CardDescription className="font-mono break-all text-sm">
          {item.seed}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {dict.KeysPage.generatedAt}:{' '}
          <span className="font-medium">
            {new Date(item.time).toLocaleDateString()}
          </span>
        </p>
      </CardContent>

      <CardFooter className="flex justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
        >
          <Copy className="h-4 w-4 mr-1" />
          {dict.KeysPage.copy}
        </Button>

        {mode === 'list' ? (
          <form action={action}>
            <Button
              variant="destructive"
              size="sm"
              disabled={pending}
              type="submit"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              {pending ? dict.KeysPage.deleting : dict.KeysPage.delete}
            </Button>
          </form>
        ) : (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => toast.info(dict.KeysPage.detachInfo)}
          >
            <LockOpen className="h-4 w-4 mr-1" />
            {dict.KeysPage.detachFromLock}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
