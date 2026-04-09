import { formatDistanceToNow } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import type { DigestItem } from '../../types/digest'
import { Badge } from '../ui/Badge'
import './DigestCard.css'

interface DigestCardProps {
  item: DigestItem
}

export function DigestCard({ item }: DigestCardProps) {
  const navigate = useNavigate()
  const timeAgo = formatDistanceToNow(new Date(item.publishedAt), { addSuffix: true })

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
      <div className="card-footer">
        <span className="card-source">{item.sourceName}</span>
        <div className="card-perspectives">
          <span className="perspective-chip">⌨️</span>
          <span className="perspective-chip">📦</span>
          <span className="perspective-chip">📈</span>
        </div>
      </div>
    </article>
  )
}
