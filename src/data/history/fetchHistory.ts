import { API_URL } from '@/actions/config'
import 'server-only'
import { StateType, HistoryType } from '@/types/state.type'

export const fetchHistory = async (): Promise<StateType<HistoryType[]>> => {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => resolve({
      status: 'success',
      data: [{
        id: 123,
        status: 'success',
        lock_id: '21s',
        key_id: '2341'
      }]
    }), 400)
  })

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
