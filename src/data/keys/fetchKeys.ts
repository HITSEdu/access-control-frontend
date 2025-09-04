import { API_URL } from '@/actions/config'
import 'server-only'
import { StateType, KeyType } from '@/types/state.type'

export const fetchKeys = async (): Promise<StateType<KeyType[]>> => {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => resolve({
      status: 'success',
      data: [{
        id: '123-213-dfa',
        seed: 'dasdasdasdasda',
        time: 2134214141
      }]
    }), 400)
  })

  try {
    const response = await fetch(`${API_URL}/keys`, {
      method: 'GET',
      cache: 'no-store',
    })

    if (!response.ok) {
      return {
        status: 'error',
        data: null,
      }
    }

    const keys: KeyType[] = await response.json()

    return {
      status: 'success',
      data: keys,
    }
  } catch (error) {
    return {
      status: 'error',
      data: null,
    }
  }
}
