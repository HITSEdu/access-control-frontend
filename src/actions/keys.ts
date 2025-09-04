'use server'

import { revalidatePath } from 'next/cache'
import { StateType } from '@/types/state.type'
import { API_URL } from './config'

export async function createKey(
  _prevState: StateType): Promise<StateType> {
  try {
    const response = await fetch(`${API_URL}/keys`, {
      method: 'POST',
    })

    if (!response.ok) throw new Error()
    revalidatePath('/keys')

    return {
      status: 'success',
      message: 'created',
    }
  } catch (e) {
    return {
      status: 'error',
      message: 'createdError',
    }
  }
}

export async function deleteKey(
  id: number,
  _prevState: StateType
): Promise<StateType> {
  try {
    const response = await fetch(`${API_URL}/keys/${id}`, {
      method: 'DELETE',
      cache: 'no-store',
    })

    if (!response.ok) throw new Error()
    revalidatePath('/keys')

    return { status: 'success', message: 'deleted' }
  } catch {
    return { status: 'error', message: 'deletedError' }
  }
}
