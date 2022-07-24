import { Dispatch, SetStateAction } from 'react'
import { FilterType } from '../../types'

export type SpeciesToggleProps = {
  onChangeSpecies: Dispatch<SetStateAction<FilterType>>
  filter: FilterType
}
