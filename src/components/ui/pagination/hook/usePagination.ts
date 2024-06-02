// https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/

type Props = {
  currentPage: number
  pageSize: number
  siblingCount?: number
  totalCount: number
}

export const usePagination = ({ currentPage, pageSize, siblingCount = 1, totalCount }: Props) => {
  const paginationRange = useMemo(() => {
    // Our implementation logic will go here
  }, [totalCount, pageSize, siblingCount, currentPage])

  return paginationRange
}
