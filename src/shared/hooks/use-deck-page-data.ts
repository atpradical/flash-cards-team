import { ChangeEvent, useState } from 'react'
import { generatePath, useNavigate, useParams, useSearchParams } from 'react-router-dom'

import { useGetCardsQuery, useGetDeckQuery, useMeQuery } from '@/services'
import { DEFAULT_CURRENT_PAGE, DEFAULT_ITEMS_PER_PAGE } from '@/shared/constants'
import { PATH, SCREEN_SIZE } from '@/shared/enums'
import { useCurrentScreenWidth } from '@/shared/hooks/use-current-screen-width'
import { useSearchParamUpdater } from '@/shared/hooks/use-search-param-updater'
import { combineLoadingStates } from '@/shared/utils'

export const useDeckPageData = () => {
  const currentScreenWidth = useCurrentScreenWidth()
  const breakpoint = SCREEN_SIZE.TABLET_TINY
  const isTinyScreen = currentScreenWidth <= breakpoint

  const navigate = useNavigate()
  const [showCreateNewCardDialogForm, setShowCreateNewCardDialogForm] = useState(false)

  const { deckId = '' } = useParams()
  const learnDeckPath = generatePath(PATH.CARD_LEARN, { deckId })

  const [searchParams] = useSearchParams()
  const updateSearchParam = useSearchParamUpdater()

  const search = searchParams.get('search') ?? ''
  const currentPage = Number(searchParams.get('currentPage') ?? DEFAULT_CURRENT_PAGE)
  const itemsPerPage = Number(searchParams.get('itemsPerPage') ?? DEFAULT_ITEMS_PER_PAGE)
  const orderBy = searchParams.get('orderBy') ?? ''

  const { data: user } = useMeQuery()

  const { data: deck, isFetching: isFetchingDeck } = useGetDeckQuery({
    id: deckId,
  })

  const {
    currentData,
    data,
    isFetching: isFetchingCards,
    isLoading: isLoadingCards,
  } = useGetCardsQuery({
    currentPage,
    deckId: deckId,
    itemsPerPage,
    orderBy: orderBy || undefined,
    question: search || undefined,
  })

  const goBackHandler = () => {
    navigate(-1)
  }

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearchParam({ currentPage: DEFAULT_CURRENT_PAGE, search: e.currentTarget.value })
  }

  const clearSearchHandler = () => {
    updateSearchParam({ currentPage: DEFAULT_CURRENT_PAGE, search: undefined })
  }

  let isAuthor = false

  if (user && deck) {
    isAuthor = user.id === deck.userId
  }

  const isLoad = combineLoadingStates(isFetchingCards, isFetchingDeck)

  return {
    clearSearchHandler,
    currentData,
    currentPage,
    data,
    deck,
    goBackHandler,
    isAuthor,
    isLoad,
    isLoadingCards,
    isTinyScreen,
    itemsPerPage,
    learnDeckPath,
    search,
    searchHandler,
    setShowCreateNewCardDialogForm,
    showCreateNewCardDialogForm,
  }
}
