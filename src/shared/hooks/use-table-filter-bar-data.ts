import { ChangeEvent, useCallback, useMemo } from 'react'

import { DEFAULT_CURRENT_PAGE } from '@/shared/constants'
import { useSearchParamUpdater } from '@/shared/hooks/use-search-param-updater'
import { Tab } from '@/shared/types/common'

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

  const searchHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      updateSearchParam({ currentPage: DEFAULT_CURRENT_PAGE, search: e.currentTarget.value })
    },
    [updateSearchParam]
  )

  const tabHandler = useCallback(
    (tab: string) => {
      updateSearchParam({ currentPage: DEFAULT_CURRENT_PAGE, tab })
    },
    [updateSearchParam]
  )

  return { searchHandler, tabHandler, tabs }
}
