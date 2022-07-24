import { Dispatch, SetStateAction } from 'react'
import { FilterType, PaginationType } from '../../types'

export type PaginationProps = {
  pages: PaginationType
  onChangePage: Dispatch<SetStateAction<FilterType>>
  filter: FilterType
}
