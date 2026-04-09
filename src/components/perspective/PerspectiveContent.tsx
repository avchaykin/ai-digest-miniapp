import { useRef, useEffect } from 'react'
import type { PerspectiveView } from '../../types/digest'
import './PerspectiveContent.css'

interface PerspectiveContentProps {
  view: PerspectiveView
  perspectiveKey: string
}

export function PerspectiveContent({ view, perspectiveKey }: PerspectiveContentProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.remove('fade-in')
    void el.offsetWidth // force reflow
    el.classList.add('fade-in')
  }, [perspectiveKey])

  return (
    <div ref={ref} className="perspective-content fade-in">
      <p className="perspective-summary">{view.summary}</p>
      <ul className="perspective-points">
        {view.keyPoints.map((point, i) => (
          <li key={i} className="perspective-point">
            <span className="point-bullet" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      {view.callToAction && (
        <div className="perspective-cta">
          <span className="cta-label">Next step</span>
          <p className="cta-text">{view.callToAction}</p>
        </div>
      )}
    </div>
  )
}
