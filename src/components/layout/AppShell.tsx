import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { telegramReady, applyTelegramTheme } from '../../telegram'
import { TabBar } from './TabBar'
import './AppShell.css'

export function AppShell() {
  const location = useLocation()
  const isDetail = location.pathname.startsWith('/item/')

  useEffect(() => {
    telegramReady()
    applyTelegramTheme()
  }, [])

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-inner">
          <span className="header-logo">🤖</span>
          <div>
            <h1 className="header-title">AI Digest</h1>
            <p className="header-subtitle">Daily AI news · 3 perspectives</p>
          </div>
        </div>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      {!isDetail && <TabBar />}
    </div>
  )
}
