import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { tomorrow } from '../../lib/words'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[][]
  whodleGameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShare: () => void
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  whodleGameStats,
  isGameLost,
  isGameWon,
  handleShare,
}: Props) => {
  if (whodleGameStats.totalGames <= 0) {
    return (
      <BaseModal title="Statistics" isOpen={isOpen} handleClose={handleClose}>
        <StatBar whodleGameStats={whodleGameStats} />
      </BaseModal>
    )
  }
  return (
    <BaseModal title="Statistics" isOpen={isOpen} handleClose={handleClose}>
      <StatBar whodleGameStats={whodleGameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900">
        Guess Distribution
      </h4>
      <Histogram whodleGameStats={whodleGameStats} />
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 columns-2">
          <div>
            <h5>New name in</h5>
            <Countdown
              className="text-lg font-medium text-gray-900"
              date={tomorrow}
              daysInHours={true}
            />
          </div>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              shareStatus(guesses, isGameLost)
              handleShare()
            }}
          >
            Share
          </button>
        </div>
      )}
    </BaseModal>
  )
}
