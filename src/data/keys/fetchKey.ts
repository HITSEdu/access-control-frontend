import { API_URL } from '@/actions/config'
import 'server-only'
import { StateType, KeyType } from '@/types/state.type'

export const fetchKey = async (id: string): Promise<StateType<KeyType>> => {
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
