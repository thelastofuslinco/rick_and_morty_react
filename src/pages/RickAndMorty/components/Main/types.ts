import { CharacterType } from '../../types'

export type Props = {
  characters: Array<CharacterType>
  favorites: Array<CharacterType>
  isFavoriteList: boolean 
  removeFavorite: (id: number) => void
  addToFavorite: (character: CharacterType) => void
}
