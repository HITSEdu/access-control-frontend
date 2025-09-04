'use client'

import { Button } from '@/components/ui/button'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import { createKey } from '@/actions/keys'

export default function AddKeyForm({ dict }: any) {

  const [state, action, pending] = useActionState(createKey, {})

  useEffect(() => {
    if (!pending) {
      if (state.status === 'error') {
        toast.error(dict.KeysPage.createdError)
      } else if (state.status === 'success') {
        toast.success(dict.KeysPage.created)
      }
    }
  }, [state.status])


  return (
    <form
      action={action}
      className="flex max-w-sm items-center gap-2"
    >
      <Button
        type="submit"
        variant="outline"
        disabled={pending}
      >
        {pending ? dict.KeysPage.adding : dict.KeysPage.addButton}
      </Button>
    </form>
  )
}
