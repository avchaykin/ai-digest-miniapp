declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp
    }
  }
}

interface TelegramWebApp {
  ready: () => void
  expand: () => void
  close: () => void
  colorScheme: 'light' | 'dark'
  themeParams: {
    bg_color?: string
    text_color?: string
    hint_color?: string
    link_color?: string
    button_color?: string
    button_text_color?: string
    secondary_bg_color?: string
  }
  BackButton: {
    show: () => void
    hide: () => void
    onClick: (fn: () => void) => void
    offClick: (fn: () => void) => void
    isVisible: boolean
  }
  HapticFeedback: {
    impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void
    notificationOccurred: (type: 'error' | 'success' | 'warning') => void
    selectionChanged: () => void
  }
  openLink: (url: string) => void
}

export const isTelegramContext = !!window.Telegram?.WebApp

const tg = (): TelegramWebApp | null => window.Telegram?.WebApp ?? null

export function telegramReady() {
  tg()?.ready()
  tg()?.expand()
}

export function getColorScheme(): 'light' | 'dark' {
  return tg()?.colorScheme ?? 'light'
}

export function openExternalLink(url: string) {
  const app = tg()
  if (app) {
    app.openLink(url)
  } else {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}

export function hapticImpact(style: 'light' | 'medium' | 'heavy' = 'light') {
  tg()?.HapticFeedback.impactOccurred(style)
}

export function showBackButton(onBack: () => void) {
  const app = tg()
  if (!app) return
  app.BackButton.show()
  app.BackButton.onClick(onBack)
}

export function hideBackButton(onBack: () => void) {
  const app = tg()
  if (!app) return
  app.BackButton.offClick(onBack)
  app.BackButton.hide()
}

export function applyTelegramTheme() {
  const params = tg()?.themeParams
  if (!params) return
  const root = document.documentElement
  const map: Record<string, string | undefined> = {
    '--tg-bg': params.bg_color,
    '--tg-text': params.text_color,
    '--tg-hint': params.hint_color,
    '--tg-link': params.link_color,
    '--tg-button': params.button_color,
    '--tg-button-text': params.button_text_color,
    '--tg-secondary-bg': params.secondary_bg_color,
  }
  for (const [key, value] of Object.entries(map)) {
    if (value) root.style.setProperty(key, value)
  }
}
