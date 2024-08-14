import { useMemo } from 'react'

export function useDisableOnLoading(isLoading: boolean): boolean {
  return useMemo(() => isLoading, [isLoading])
}
