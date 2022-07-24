import axios, { AxiosResponse } from 'axios'
import { GetCharacterProps, RickAndMortyResponse } from './types'

const rickAndMorty = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
})

export const getCharacter = ({
  characters,
  filter
}: GetCharacterProps): Promise<AxiosResponse<RickAndMortyResponse>> =>
  rickAndMorty.get(characters ? `/character/${characters}` : `/character`, {
    params: filter
  })
