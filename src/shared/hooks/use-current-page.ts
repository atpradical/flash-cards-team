import { useLocation } from 'react-router-dom'

export function useCurrentPage(defaultPage: number = 1): number {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const currentPage = searchParams.get('currentPage')

  return currentPage ? Number(currentPage) : defaultPage
}
