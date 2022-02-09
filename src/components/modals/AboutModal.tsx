import { CONFIG } from '../../constants/config'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        This is an open source clone of the game Wordle adapted to become{' '}
        {CONFIG.language} by{' '}
        <a href={CONFIG.authorWebsite} className="underline font-bold">
          {CONFIG.author}
        </a>{' '}
        - check out{' '}
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          the original code
        </a>{' '}
        by{' '}
        <a
          href="https://www.hannahmariepark.com/"
          className="underline font-bold"
        >
          Hannah Park
        </a>{' '}
        or have a look at{' '}
        <a
          href="https://github.com/roedoejet/AnyLanguage-Wordle"
          className="underline font-bold"
        >
          Aidan Pine's fork
        </a>{' '}
        and customize it for other languages! Find more Wordles variants at{' '}
        <a
          href="https://rwmpelstilzchen.gitlab.io/wordles/"
          className="underline font-bold"
        >
          Wordles of the World
        </a>.{' '}      
        The words for Whodle are 
        sourced from{' '}
        <a href={CONFIG.wordListSourceLink} className="underline font-bold">
          {CONFIG.wordListSource}
        </a>
        .
        {' Names from all states and D.C. were used as possible guesses (with a few manually added).  Allowable answers were determined by frequency in the data source, where names appearing at least 5000 times in the source data were included. You can also '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          play the original here
        </a>
        . Consider learning about the work{' '}
        <a href='https://www.givewell.org/' className="underline font-bold">
          Givewell
        </a>{' '}
        is doing to identify outstanding charities.
      </p>
    </BaseModal>
  )
}
