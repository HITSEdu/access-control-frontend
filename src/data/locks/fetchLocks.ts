import { API_URL } from '@/actions/config'
import 'server-only'
import { StateType, KeyType, LockType } from '@/types/state.type'
import { mockLocks } from '@/data/mockdata'

export const fetchLocks = async (): Promise<StateType<LockType[]>> => {
  return new Promise(async (resolve) => {
    setTimeout(() => resolve({
      status: 'success',
      data: mockLocks
    }), 400)
  })

  try {
    const response = await fetch(`${API_URL}/locks`, {
      method: 'GET',
      cache: 'no-store',
    })

    if (!response.ok) {
      return {
        status: 'error',
        data: null,
      }
    }

    const locks: LockType[] = await response.json()

    return {
      status: 'success',
      data: locks,
    }
  } catch (error) {
    return {
      status: 'error',
      data: null,
    }
  }
}
