import type { DigestFeed } from '../types/digest'
import { mockToday } from '../data/mock-today'
import { mockWeek } from '../data/mock-week'

const BASE_URL = import.meta.env.VITE_API_BASE_URL as string | undefined

async function fetchFeed(period: 'today' | 'week'): Promise<DigestFeed> {
  if (BASE_URL) {
    const res = await fetch(`${BASE_URL}/digest/${period}`)
    if (!res.ok) throw new Error(`Failed to fetch ${period} digest: ${res.status}`)
    return res.json() as Promise<DigestFeed>
  }
  // Mock fallback
  await new Promise((r) => setTimeout(r, 400))
  return {
    period,
    generatedAt: new Date().toISOString(),
    items: period === 'today' ? mockToday : mockWeek,
  }
}

export const digestService = {
  getToday: () => fetchFeed('today'),
  getWeek: () => fetchFeed('week'),
}
