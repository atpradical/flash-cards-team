import { ChangeEvent, useCallback, useMemo } from 'react'

import { useSearchParamUpdater } from '@/shared/hooks/use-search-param-updater'
import { Tab } from '@/shared/types/common'
import { useDebounceCallback } from 'usehooks-ts'

export const useTableFilterBarData = () => {
  const tabs: Tab[] = useMemo(
    () => [
      { title: 'All Decks', value: 'allDecks' },
      { title: 'My Decks', value: 'myDecks' },
      { title: 'Favorites', value: 'favorites' },
    ],
    []
  )

  const updateSearchParam = useSearchParamUpdater()

  const debouncedSearchHandler = useDebounceCallback((value: string) => {
    updateSearchParam({ currentPage: '1', search: value })
  }, 500) // 500ms debounce delay

  const searchHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value

      if (value === '') {
        // no delay needed
        updateSearchParam({ currentPage: '1', search: value })
      } else {
        // delay 500ms before search params update
        debouncedSearchHandler(value)
      }
    },
    [debouncedSearchHandler, updateSearchParam]
  )

  const tabHandler = useCallback(
    (tab: string) => {
      updateSearchParam({ currentPage: '1', tab })
    },
    [updateSearchParam]
  )

  return { searchHandler, tabHandler, tabs }
}
