import { CharacterCard } from '../CharacterCard'
import { MainContainer } from './styles'
import { Props } from './types'

export const Main = ({
  characters,
  favorites,
  isFavoriteList,
  removeFavorite,
  addToFavorite
}: Props) => {
  return (
    <MainContainer>
      {isFavoriteList
        ? favorites.map((character) => {
            const isFavorite =
              favorites.findIndex(
                (favoRick) => favoRick.id === character.id
              ) !== -1

            return (
              <CharacterCard
                isFavorite={isFavorite}
                character={character}
                addToFavorite={addToFavorite}
                removeFavorite={removeFavorite}
              />
            )
          })
        : characters.map((character) => {
            const isFavorite =
              favorites.findIndex(
                (favoRick) => favoRick.id === character.id
              ) !== -1

            return (
              <CharacterCard
                isFavorite={isFavorite}
                character={character}
                addToFavorite={addToFavorite}
                removeFavorite={removeFavorite}
              />
            )
          })}
    </MainContainer>
  )
}
