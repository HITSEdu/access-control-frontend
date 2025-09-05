import { fetchLocks } from '@/data/locks/fetchLocks'
import { LockType } from '@/types/state.type'
import LockItem from '@/app/[lang]/locks/_components/LockItem'

export default async function LocksList({ dict }: any) {
  const { status, data } = await fetchLocks()

  if (status === 'error') {
    return <p className="text-red-500">{dict.LocksPage.locksError}</p>
  }


  if (!data || data.length === 0) {
    return <p>{dict.LocksPage.noLocks}</p>
  }

  return (
    <div className="flex flex-col gap-4 max-w-md">
      {data.map((lock: LockType) => (
        <LockItem
          key={lock.id}
          lock={lock}
          dict={dict}
        />
      ))}
    </div>
  )
}
