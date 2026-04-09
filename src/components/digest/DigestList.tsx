import { useEffect, useState } from 'react'
import type { DigestItem } from '../../types/digest'
import { digestService } from '../../services/digestService'
import { useDigestStore } from '../../store/useDigestStore'
import { DigestCard } from './DigestCard'
import { DigestCardSkeleton } from '../ui/Skeleton'
import { PerspectivePicker } from '../perspective/PerspectivePicker'
import './DigestList.css'

export function DigestList() {
  const activeTab = useDigestStore((s) => s.activeTab)
  const [items, setItems] = useState<DigestItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    const fetch = activeTab === 'today' ? digestService.getToday : digestService.getWeek
    fetch()
      .then((feed) => setItems(feed.items))
      .catch((e: unknown) => setError(e instanceof Error ? e.message : 'Failed to load'))
      .finally(() => setLoading(false))
  }, [activeTab])

  if (loading) {
    return (
      <div className="digest-list-wrapper">
        <PerspectivePicker />
        <div className="digest-list">
          {Array.from({ length: 4 }, (_, i) => (
            <DigestCardSkeleton key={i} />
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="digest-list-wrapper">
        <PerspectivePicker />
        <div className="digest-empty">
          <span className="empty-icon">⚠️</span>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (!items.length) {
    return (
      <div className="digest-list-wrapper">
        <PerspectivePicker />
        <div className="digest-empty">
          <span className="empty-icon">📭</span>
          <p>No digest available yet.<br />Check back later.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="digest-list-wrapper">
      <PerspectivePicker />
      <div className="digest-list">
        {items.map((item) => (
          <DigestCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
