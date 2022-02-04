import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Guess the WORDLE in 6 tries. After each guess, the color of the tiles
        will change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" status="correct" />
        <Cell value="A" />
        <Cell value="M" />
        <Cell value="M" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500">
        The letter S is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="E" />
        <Cell value="L" status="present" />
        <Cell value="L" />
        <Cell value="E" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500">
        The letter L is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="J" />
        <Cell value="A" />
        <Cell value="M" />
        <Cell value="E" status="absent" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500">
        The letter E is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
