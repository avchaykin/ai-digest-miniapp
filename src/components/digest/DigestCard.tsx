import { formatDistanceToNow } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import type { DigestItem } from '../../types/digest'
import { useDigestStore } from '../../store/useDigestStore'
import { Badge } from '../ui/Badge'
import './DigestCard.css'

interface DigestCardProps {
  item: DigestItem
}

export function DigestCard({ item }: DigestCardProps) {
  const navigate = useNavigate()
  const activePerspective = useDigestStore((s) => s.activePerspective)
  const timeAgo = formatDistanceToNow(new Date(item.publishedAt), { addSuffix: true })
  const summary = item.perspectives[activePerspective].summary

  return (
    <article
      className="digest-card"
      onClick={() => navigate(`/item/${item.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/item/${item.id}`)}
    >
      <div className="card-meta">
        <Badge topic={item.topic} />
        <span className="card-time">{timeAgo}</span>
      </div>
      <h2 className="card-headline">{item.headline}</h2>
      <p className="card-preview">{summary}</p>
      <span className="card-source">{item.sourceName}</span>
    </article>
  )
}
