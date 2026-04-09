import { useDigestStore } from '../../store/useDigestStore'
import { hapticImpact } from '../../telegram'
import './TabBar.css'

const TABS = [
  { key: 'today' as const, label: "Today's AI", icon: '⚡' },
  { key: 'week' as const, label: 'This Week', icon: '📅' },
]

export function TabBar() {
  const { activeTab, setTab } = useDigestStore()

  function handleTab(key: 'today' | 'week') {
    if (key === activeTab) return
    hapticImpact('light')
    setTab(key)
  }

  return (
    <nav className="tab-bar">
      {TABS.map(({ key, label, icon }) => (
        <button
          key={key}
          className={`tab-btn${activeTab === key ? ' active' : ''}`}
          onClick={() => handleTab(key)}
        >
          <span className="tab-icon">{icon}</span>
          <span className="tab-label">{label}</span>
        </button>
      ))}
    </nav>
  )
}
