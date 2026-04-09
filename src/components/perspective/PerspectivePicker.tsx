import type { PerspectiveKey } from '../../types/digest'
import { useDigestStore } from '../../store/useDigestStore'
import { hapticImpact } from '../../telegram'
import './PerspectivePicker.css'

const PERSPECTIVES: { key: PerspectiveKey; label: string; icon: string }[] = [
  { key: 'developer', label: 'Developer', icon: '⌨️' },
  { key: 'product_manager', label: 'Product', icon: '📦' },
  { key: 'top_manager', label: 'C-Suite', icon: '📈' },
]

export function PerspectivePicker() {
  const { activePerspective, setPerspective } = useDigestStore()

  function handleSelect(key: PerspectiveKey) {
    if (key === activePerspective) return
    hapticImpact('light')
    setPerspective(key)
  }

  return (
    <div className="perspective-picker">
      {PERSPECTIVES.map(({ key, label, icon }) => (
        <button
          key={key}
          className={`perspective-btn${activePerspective === key ? ' active' : ''}`}
          onClick={() => handleSelect(key)}
        >
          <span className="perspective-icon">{icon}</span>
          <span className="perspective-label">{label}</span>
        </button>
      ))}
    </div>
  )
}
