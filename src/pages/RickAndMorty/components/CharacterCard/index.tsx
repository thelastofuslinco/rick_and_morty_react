import { CharacterCardContainer } from './styles'
import { CharacterCardProps } from './types'

export const CharacterCard = ({
  character,
  addToFavorite,
  removeFavorite,
  isFavorite
}: CharacterCardProps) => {
  return (
    <CharacterCardContainer key={character.id}>
      <span>{character.name}</span>
      <img src={character.image} alt={character.name} />
      {!isFavorite && (
        <button onClick={() => addToFavorite(character)}>
          Add to favorite
        </button>
      )}
      {isFavorite && (
        <button onClick={() => removeFavorite(character.id)}>
          Remove favorite
        </button>
      )}
    </CharacterCardContainer>
  )
}
