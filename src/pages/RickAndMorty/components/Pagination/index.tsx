import { Button } from '@/components/Button'
import { PaginationProps } from './types'

export const Pagination = ({
  pages,
  onChangePage,
  filter
}: PaginationProps) => {
  return (
    <>
      {' '}
      {pages?.prev && (
        <Button
          onClick={() =>
            onChangePage((prev) => ({
              ...prev,
              page: filter.page - 1
            }))
          }
        >
          previous page
        </Button>
      )}
      <span>{filter.page}</span>
      {pages?.next && (
        <Button
          onClick={() =>
            onChangePage((prev) => ({
              ...prev,
              page: filter.page + 1
            }))
          }
        >
          next page
        </Button>
      )}
    </>
  )
}
