export type StateType<T = unknown> = {
  status?: 'success' | 'error'
  message?: string | null
  data?: T | null
}

export type StatusType = 'success' | 'failed' | 'denied'

export type KeyType = {
  id: string
  seed: string
  time: number
}

export type HistoryType = {
  id: number
  status: StatusType
  lock_id: string
  key_id: string
}

export type LockType = {
  id: string
  keys: string[]
}