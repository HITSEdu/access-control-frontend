import { fetchHistory } from '@/data/history/fetchHistory'

export default async function HistoryList({ dict }: any) {
  const { status, data } = await fetchHistory()

  if (status === 'error') {
    return <p className="text-red-500">{dict.HistoryPage.historyError}</p>
  }

  if (!data || data.length === 0) {
    return <p>{dict.HistoryPage.noHistory}</p>
  }

  return (
    <div className="flex flex-col gap-2 max-w-md">
      {data.map((history) => (
        <div
          key={history.id}
          className="rounded-md border px-4 py-2 shadow-sm"
        >
          <p className="font-medium">{history.status}</p>
          <p className="text-sm text-gray-500">
            {history.key_id}
          </p>
          <p className="text-sm text-gray-500">
            {history.lock_id}
          </p>
        </div>
      ))}
    </div>
  )
}
