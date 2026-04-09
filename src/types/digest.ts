export type PerspectiveKey = 'developer' | 'product_manager' | 'top_manager'

export interface PerspectiveView {
  summary: string
  keyPoints: string[]
  callToAction?: string
}

export type DigestTopic =
  | 'models'
  | 'tools'
  | 'research'
  | 'industry'
  | 'regulation'
  | 'open_source'

export interface DigestItem {
  id: string
  headline: string
  sourceName: string
  sourceUrl: string
  publishedAt: string
  topic: DigestTopic
  imageUrl?: string
  perspectives: Record<PerspectiveKey, PerspectiveView>
}

export interface DigestFeed {
  period: 'today' | 'week'
  generatedAt: string
  items: DigestItem[]
}
