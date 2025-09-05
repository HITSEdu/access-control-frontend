import { API_URL } from '@/actions/config'
import 'server-only'
import { StateType, KeyType } from '@/types/state.type'
import { mockKeys } from '@/data/mockdata'

export const fetchKey = async (id: string): Promise<StateType<KeyType>> => {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => resolve({
      status: 'success',
      data: mockKeys.find(k => k.id === id)
    }), 400)
  })

  try {
    const response = await fetch(`${API_URL}/keys${id}`, {
      method: 'GET',
      cache: 'no-store',
    })

    if (!response.ok) {
      return {
        status: 'error',
        message: 'Не удалось загрузить ключ',
        data: null,
      }
    }

    const key: KeyType = await response.json()

    return {
      status: 'success',
      message: null,
      data: key,
    }
  } catch (error) {
    return {
      status: 'error',
      message: 'Ошибка при загрузке ключа',
      data: null,
    }
  }
}
