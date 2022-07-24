import { CharacterType } from '../../types'

export type CharacterCardProps = {
  character: CharacterType
  isFavorite: boolean
  addToFavorite: (character: CharacterType) => void
  removeFavorite: (id: number) => void
}
