import { HistoryType, KeyType, LockType } from '@/types/state.type'

export const mockKeys: KeyType[] = [
  { id: 'key-1', seed: 'abcd1234', time: 1693891200 },
  { id: 'key-2', seed: 'efgh5678', time: 1693977600 },
  { id: 'key-3', seed: 'ijkl9012', time: 1694064000 },
]

export const mockLocks: LockType[] = [
  { id: 'lock-1', keys: ['key-1', 'key-2'] },
  { id: 'lock-2', keys: ['key-3'] },
  { id: 'lock-3', keys: [] }
]

export const mockHistory: HistoryType[] = [
  { id: 1, status: 'success', lock_id: 'lock-1', key_id: 'key-1' },
  { id: 2, status: 'failed', lock_id: 'lock-1', key_id: 'key-3' },
  { id: 3, status: 'denied', lock_id: 'lock-2', key_id: 'key-2' },
  { id: 4, status: 'success', lock_id: 'lock-2', key_id: 'key-3' },
  { id: 5, status: 'failed', lock_id: 'lock-3', key_id: 'key-1' },
]
