export interface Filter {
  name?: string
  status?: 'alive' | 'dead' | 'unknown'
  species?: string | 'Human' | 'Alien'
  type?: string
  gender?: 'female' | 'male' | 'genderless' | 'unknown'
  page: number
}

export type GetCharacterProps = {
  characters?: Array<number>
  filter: Filter | null
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: Array<string>
  url: string
  created: string
}

export interface Pagination {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export type RickAndMortyResponse = {
  info: Pagination
  results: Array<Character>
}
