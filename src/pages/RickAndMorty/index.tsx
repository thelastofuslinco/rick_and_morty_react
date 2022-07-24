import { Button, Input, Toggle } from '@/components'
import { getCharacter } from '@/services/rickAndMortyServices'
import { useEffect, useState } from 'react'
import { FavoriteList, Main, Pagination, SpeciesToggle } from './components'
import { HeaderContainer, RickAndMortyContainer } from './styles'
import { FilterType, CharacterType, PaginationType } from './types'

export const RickAndMorty = () => {
  const [characters, setCharacters] = useState<Array<CharacterType>>([])
  const [favoRicks, setFavoRicks] = useState<Array<CharacterType>>([])
  const [pages, setPages] = useState<PaginationType>(null)
  const [filter, setFilter] = useState<FilterType>({ page: 1 })
  const [inputValue, setInputValue] = useState<string>('')
  const [isFavoriteList, setIsFavoriteList] = useState<boolean>(false)

  const listCharacters = () => {
    getCharacter({ filter })
      .then((response) => {
        setCharacters(response.data.results)
        setPages(response.data.info)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const addToFavorite = (character: CharacterType) => {
    setFavoRicks((prev) => [...prev, character])
  }

  const removeFavorite = (id: number) => {
    const newFavoRicks = favoRicks.filter((favoRick) => favoRick.id !== id)
    setFavoRicks(newFavoRicks)
  }

  useEffect(() => {
    listCharacters()
  }, [filter])

  return (
    <RickAndMortyContainer>
      <HeaderContainer>
        <span>The Rick and Morty</span>
        <Input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button
          onClick={() => setFilter((prev) => ({ ...prev, name: inputValue }))}
        >
          Buscar
        </Button>
        <SpeciesToggle onChangeSpecies={setFilter} filter={filter} />
        <Pagination filter={filter} pages={pages} onChangePage={setFilter} />
        <Toggle
          firstContent="All"
          secondContent="Favoritos"
          value={isFavoriteList}
          onClick={() => setIsFavoriteList(!isFavoriteList)}
        />
      </HeaderContainer>
      <FavoriteList favorites={favoRicks} />
      <Main
        favorites={favoRicks}
        characters={characters}
        isFavoriteList={isFavoriteList}
        addToFavorite={addToFavorite}
        removeFavorite={removeFavorite}
      />
    </RickAndMortyContainer>
  )
}
