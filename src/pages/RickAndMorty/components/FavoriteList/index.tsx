import { FavoriteListAside } from './styles'
import { Props } from './types'

export const FavoriteList = ({ favorites }: Props) => {
  return (
    <FavoriteListAside>
      FavoriteList
      {favorites.map((character) => {
        return <span>{character.name}</span>
      })}
    </FavoriteListAside>
  )
}
