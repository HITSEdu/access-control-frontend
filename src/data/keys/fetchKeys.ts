import 'server-only'

import { cache } from 'react'

export const fetchKeys = cache(async () => {
  const response = await fetch(`${API_URL}/keys`, {
    method: 'GET',
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch keys')
  }

  return response.json()
})