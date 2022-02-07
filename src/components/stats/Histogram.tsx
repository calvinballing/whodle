import { GameStats } from '../../lib/localStorage'
import { Progress } from './Progress'

type Props = {
  whodleGameStats: GameStats
}

export const Histogram = ({ whodleGameStats }: Props) => {
  const winDistribution = whodleGameStats.winDistribution
  const maxValue = Math.max(...winDistribution)

  return (
    <div className="columns-1 justify-left m-2 text-sm">
      {winDistribution.map((value, i) => (
        <Progress
          key={i}
          index={i}
          size={90 * (value / maxValue)}
          label={String(value)}
        />
      ))}
    </div>
  )
}
