import { SortCriteria } from '@/common/types'

export function getSortString(sortCriteria: SortCriteria) {
  if (sortCriteria && sortCriteria.id != null && sortCriteria.order != null) {
    return `${sortCriteria.id}-${sortCriteria.order}`
  }

  return ''
}
