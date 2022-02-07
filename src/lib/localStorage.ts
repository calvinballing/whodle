const gameStateKey = 'gameState'

type StoredGameState = {
  guesses: string[][]
  solution: string
}

export const saveGameStateToLocalStorage = (whodleGameState: StoredGameState) => {
  localStorage.setItem(whodleGameStateKey, JSON.stringify(whodleGameState))
}

export const loadGameStateFromLocalStorage = () => {
  const state = localStorage.getItem(whodleGameStateKey)
  return state ? (JSON.parse(state) as StoredGameState) : null
}

const whodleGameStatKey = 'whodleGameStats'

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}

export const saveStatsToLocalStorage = (whodleGameStats: GameStats) => {
  localStorage.setItem(whodleGameStatKey, JSON.stringify(whodleGameStats))
}

export const loadStatsFromLocalStorage = () => {
  const stats = localStorage.getItem(whodleGameStatKey)
  return stats ? (JSON.parse(stats) as GameStats) : null
}
