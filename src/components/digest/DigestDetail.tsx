import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import type { DigestItem } from '../../types/digest'
import { digestService } from '../../services/digestService'
import { useDigestStore } from '../../store/useDigestStore'
import { showBackButton, hideBackButton, openExternalLink } from '../../telegram'
import { PerspectivePicker } from '../perspective/PerspectivePicker'
import { PerspectiveContent } from '../perspective/PerspectiveContent'
import { Badge } from '../ui/Badge'
import { Skeleton } from '../ui/Skeleton'
import './DigestDetail.css'

export function DigestDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { activeTab, activePerspective } = useDigestStore()
  const [item, setItem] = useState<DigestItem | null>(null)
  const [loading, setLoading] = useState(true)

  const goBack = () => navigate(-1)

  useEffect(() => {
    showBackButton(goBack)
    return () => hideBackButton(goBack)
  }, [])

  useEffect(() => {
    const fetch = activeTab === 'today' ? digestService.getToday : digestService.getWeek
    fetch()
      .then((feed) => {
        const found = feed.items.find((i) => i.id === id) ?? null
        setItem(found)
      })
      .finally(() => setLoading(false))
  }, [id, activeTab])

  if (loading) {
    return (
      <div className="detail-loading">
        <div style={{ padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
          <Skeleton height={14} width={80} borderRadius={100} />
          <Skeleton height={24} />
          <Skeleton height={24} width="70%" />
          <Skeleton height={14} width={120} />
        </div>
      </div>
    )
  }

  if (!item) {
    return (
      <div className="detail-not-found">
        <p>Item not found.</p>
        <button onClick={goBack} className="back-link">Go back</button>
      </div>
    )
  }

  const view = item.perspectives[activePerspective]
  const timeAgo = formatDistanceToNow(new Date(item.publishedAt), { addSuffix: true })

  return (
    <div className="detail-container">
      <div className="detail-header">
        <div className="detail-meta">
          <Badge topic={item.topic} />
          <span className="detail-time">{timeAgo} · {item.sourceName}</span>
        </div>
        <h1 className="detail-headline">{item.headline}</h1>
        <button
          className="detail-source-link"
          onClick={() => openExternalLink(item.sourceUrl)}
        >
          Read original →
        </button>
      </div>

      <PerspectivePicker />

      <div className="detail-body">
        <PerspectiveContent view={view} perspectiveKey={activePerspective} />
      </div>
    </div>
  )
}
