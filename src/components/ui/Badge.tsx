import type { DigestTopic } from '../../types/digest'
import './Badge.css'

const TOPIC_LABELS: Record<DigestTopic, string> = {
  models: 'Models',
  tools: 'Tools',
  research: 'Research',
  industry: 'Industry',
  regulation: 'Regulation',
  open_source: 'Open Source',
}

const TOPIC_COLORS: Record<DigestTopic, string> = {
  models: '#5856d6',
  tools: '#007aff',
  research: '#34c759',
  industry: '#ff9500',
  regulation: '#ff3b30',
  open_source: '#32ade6',
}

interface BadgeProps {
  topic: DigestTopic
}

export function Badge({ topic }: BadgeProps) {
  return (
    <span
      className="badge"
      style={{ '--badge-color': TOPIC_COLORS[topic] } as React.CSSProperties}
    >
      {TOPIC_LABELS[topic]}
    </span>
  )
}
