import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useGetDecksQuery, useGetMinMaxQuery, useMeQuery } from '@/services'
import { DEFAULT_CURRENT_PAGE, DEFAULT_ITEMS_PER_PAGE, DEFAULT_TAB } from '@/shared/constants'
import { useSearchParamUpdater } from '@/shared/hooks/use-search-param-updater'

import { TABS } from '../enums'

export const useDeckListPageData = () => {
  const [showAddDeckDialog, setShowAddDeckDialog] = useState(false)
  const [searchParams] = useSearchParams()
  const [skip, setSkip] = useState(true)

  const currentPage = Number(searchParams.get('currentPage') ?? DEFAULT_CURRENT_PAGE)
  const itemsPerPage = Number(searchParams.get('itemsPerPage') ?? DEFAULT_ITEMS_PER_PAGE)
  const min = Number(searchParams.get('min'))
  const max = Number(searchParams.get('max'))
  const search = searchParams.get('search') ?? ''
  const orderBy = searchParams.get('orderBy') ?? ''
  const tab = searchParams.get('tab') ?? DEFAULT_TAB
  const [sliderState, setSliderState] = useState<number[]>([min, max])

  const { data: user } = useMeQuery()
  const authorId = tab === TABS.MY ? user?.id : undefined
  const favoritedBy = tab === TABS.FAVORITE ? user?.id : undefined

  const { data: minMax, isFetching: isFetchingMin } = useGetMinMaxQuery()

  const updateSearchParam = useSearchParamUpdater()

  useEffect(() => {
    if (minMax) {
      updateSearchParam({ max: minMax.max, min: minMax.min })
      setSliderState([minMax.min, minMax.max])
      setSkip(false)
    }
    // 'updateSearchParam' mustn't be added to avoid cyclical dependence
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minMax])

  const { currentData, data, isFetching } = useGetDecksQuery(
    {
      authorId,
      currentPage,
      favoritedBy,
      itemsPerPage,
      maxCardsCount: max,
      minCardsCount: min,
      name: search || undefined,
      orderBy: orderBy || undefined,
    },
    { skip }
  )

  const decks = currentData ?? data

  const sliderRangeChangeHandler = (newRange: number[]) => {
    setSliderState(newRange)
  }
  const sliderValueCommitHandler = (newRange: number[]) => {
    setSliderState(newRange)
    updateSearchParam({ currentPage: DEFAULT_CURRENT_PAGE, max: newRange[1], min: newRange[0] })
  }

  const clearFiltersHandler = () => {
    setSliderState([minMax.min, minMax.max])
    updateSearchParam({
      currentPage: DEFAULT_CURRENT_PAGE,
      itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
      max: minMax.max,
      min: minMax.min,
      orderBy: '',
      search: '',
      tab: TABS.ALL,
    })
  }

  return {
    authorId,
    clearFiltersHandler,
    currentPage,
    decks,
    favoritedBy,
    isFetching,
    isFetchingMin,
    itemsPerPage,
    max,
    min,
    minMax,
    orderBy,
    search,
    setShowAddDeckDialog,
    showAddDeckDialog,
    skip,
    sliderRangeChangeHandler,
    sliderState,
    sliderValueCommitHandler,
    tab,
    user,
  }
}
