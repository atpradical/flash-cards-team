import { SortCriteria } from '@/shared/types/common'

export function getOrderByString(sortCriteria: SortCriteria) {
  if (sortCriteria && sortCriteria.id != null && sortCriteria.order != null) {
    return `${sortCriteria.id}-${sortCriteria.order}`
  }

  return ''
}
