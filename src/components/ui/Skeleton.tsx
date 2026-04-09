import './Skeleton.css'

interface SkeletonProps {
  height?: number | string
  width?: number | string
  borderRadius?: number | string
}

export function Skeleton({ height = 16, width = '100%', borderRadius = 6 }: SkeletonProps) {
  return (
    <div
      className="skeleton"
      style={{ height, width, borderRadius }}
    />
  )
}

export function DigestCardSkeleton() {
  return (
    <div className="digest-card-skeleton">
      <div className="skeleton-header">
        <Skeleton width={80} height={18} borderRadius={100} />
        <Skeleton width={60} height={14} />
      </div>
      <Skeleton height={20} />
      <Skeleton height={20} width="80%" />
      <Skeleton height={16} width="50%" />
    </div>
  )
}
