import { create } from 'zustand'
import type { PerspectiveKey } from '../types/digest'

interface DigestStore {
  activeTab: 'today' | 'week'
  activePerspective: PerspectiveKey
  setTab: (tab: 'today' | 'week') => void
  setPerspective: (p: PerspectiveKey) => void
}

export const useDigestStore = create<DigestStore>((set) => ({
  activeTab: 'today',
  activePerspective: 'developer',
  setTab: (tab) => set({ activeTab: tab }),
  setPerspective: (activePerspective) => set({ activePerspective }),
}))
