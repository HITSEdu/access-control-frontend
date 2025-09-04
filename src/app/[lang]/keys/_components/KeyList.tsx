import { fetchKeys } from '@/data/keys/fetchKeys'

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
      {data.map((key) => (
        <div
          key={key.id}
          className="rounded-md border px-4 py-2 shadow-sm"
        >
          <p className="font-medium">{key.seed}</p>
          <p className="text-sm text-gray-500">
            {new Date(key.time).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  )
}
