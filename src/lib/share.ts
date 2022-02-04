import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { CONFIG } from '../constants/config'

export const shareStatus = (guesses: string[][], lost: boolean) => {
  navigator.clipboard.writeText(
    CONFIG.language +
      ' Whodle ' +
      solutionIndex +
      ' ' +
      `${lost ? 'X' : guesses.length}` +
      '/' +
      CONFIG.tries.toString() +
      '\n\n' +
      generateEmojiGrid(guesses)
  )
}

export const generateEmojiGrid = (guesses: string[][]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🤑'
            case 'present':
              return '😒'
            default:
              return '💀'
          }
        })
        .join('')
    })
    .join('\n')
}
