import { API_URL } from '@/actions/config'
import 'server-only'
import { StateType, HistoryType } from '@/types/state.type'

export const fetchHistory = async (): Promise<StateType<HistoryType[]>> => {
  try {
    const response = await fetch(`${API_URL}/records`, {
      method: 'GET',
      cache: 'no-store',
    })

    if (!response.ok) {
      return {
        status: 'error',
        data: null,
      }
    }

    const history: HistoryType[] = await response.json()

    return {
      status: 'success',
      data: history,
    }
  } catch (error) {
    return {
      status: 'error',
      data: null,
    }
  }
}
