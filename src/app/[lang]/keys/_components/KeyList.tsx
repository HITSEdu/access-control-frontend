import { fetchKeys } from '@/data/keys/fetchKeys'
import KeyItem from '@/app/[lang]/keys/_components/KeyItem'
import { KeyType } from '@/types/state.type'

export default async function KeyList({ dict }: any) {
  const { status, data } = await fetchKeys()

  if (status === 'error') {
    return <p className="text-red-500">{dict.KeysPage.keysError}</p>
  }


  if (!data || data.length === 0) {
    return <p>{dict.KeysPage.noKeys}</p>
  }

  return (
    <div className="flex flex-col gap-2 max-w-md">
      {data.map((key: KeyType) => (
        <KeyItem
          key={key.id}
          item={key}
          dict={dict}
        />
      ))}
    </div>
  )
}
