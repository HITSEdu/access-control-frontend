import { fetchHistory } from '@/data/history/fetchHistory'
import HistoryItem from './HistoryItem'

export default async function HistoryList({ dict }: any) {
  const { status, data } = await fetchHistory()

  if (status === 'error') {
    return <p className="text-red-500">{dict.HistoryPage.historyError}</p>
  }

  if (!data || data.length === 0) {
    return <p>{dict.HistoryPage.noHistory}</p>
  }

  return (
    <div className="grid gap-4 max-w-md">
      {data.map((history) => (
        <HistoryItem
          key={history.id}
          item={history}
          dict={dict}
        />
      ))}
    </div>
  )
}
