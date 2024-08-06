import { ChangeEvent, useCallback, useMemo } from 'react'

import { DEFAULT_CURRENT_PAGE } from '@/shared/constants'
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
    updateSearchParam({ currentPage: DEFAULT_CURRENT_PAGE, search: value })
  }, 500) // 500ms debounce delay

  const searchHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value

      if (value === '') {
        // no delay needed
        updateSearchParam({ currentPage: DEFAULT_CURRENT_PAGE, search: value })
      } else {
        // delay 500ms before search params update
        debouncedSearchHandler(value)
      }
    },
    [debouncedSearchHandler, updateSearchParam]
  )

  const tabHandler = useCallback(
    (tab: string) => {
      updateSearchParam({ currentPage: DEFAULT_CURRENT_PAGE, tab })
    },
    [updateSearchParam]
  )

  return { searchHandler, tabHandler, tabs }
}
