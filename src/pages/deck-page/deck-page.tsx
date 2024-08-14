import { ChangeEvent, useState } from 'react'
import { Link, generatePath, useParams, useSearchParams } from 'react-router-dom'

import { ArrowBackOutline } from '@/assets/icons'
import { CardDialogForm } from '@/components/forms'
import { DeckTable, DeckTableMobile, DeckTitle } from '@/components/ui/layout-components'
import { Button, Pagination, TextField } from '@/components/ui/primitives'
import { cn } from '@/pages/deck-page/deck-page.styles'
import { EmptyDeck } from '@/pages/deck-page/empty-deck'
import { PaginationModel, useGetCardsQuery, useGetDeckQuery, useMeQuery } from '@/services'
import { PATH, SCREEN_SIZE } from '@/shared/enums'
import { useCurrentScreenWidth, useSearchParamUpdater } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const DeckPage = () => {
  const [showCreateNewCardDialogForm, setShowCreateNewCardDialogForm] = useState(false)

  const { deckId = '' } = useParams()
  const learnDeckPath = generatePath(PATH.CARD_LEARN, { deckId })

  const [searchParams] = useSearchParams()
  const updateSearchParam = useSearchParamUpdater()

  const search = searchParams.get('search') ?? ''
  const currentPage = Number(searchParams.get('currentPage') ?? 1)
  const itemsPerPage = Number(searchParams.get('itemsPerPage') ?? 10)
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

  const cardsData = currentData ?? data

  const { items: cards = [], pagination = {} as PaginationModel } = cardsData ?? {}

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearchParam({ currentPage: 1, search: e.currentTarget.value })
  }

  const currentScreenWidth = useCurrentScreenWidth()
  const breakpoint = SCREEN_SIZE.TABLET_TINY
  const isTinyScreen = currentScreenWidth <= breakpoint

  let isAuthor = false

  if (!deck) {
    return
  } else if (user && deck) {
    isAuthor = user.id === deck.userId
  }

  const isLoad = isFetchingCards || isFetchingDeck

  const isEmpty = cards.length === 0 && !search && !isLoadingCards

  return (
    <Page load={isLoad}>
      <FlexContainer fd={'column'} gap={'24px'} jc={'space-between'} pd={'0 20px'}>
        <Button as={Link} className={cn.goBack} to={PATH.DECK_LIST} variant={'link'}>
          <ArrowBackOutline className={cn.icon} />
          Back to Decks List
        </Button>
        <FlexContainer ai={'start'} jc={'start'}>
          <DeckTitle deck={deck} isAuthor={isAuthor} learnDeckPath={learnDeckPath} />
          {!isEmpty && (
            <FlexContainer fd={'column'} gap={'20px'}>
              {isAuthor ? (
                <Button className={cn.cardControl} onClick={setShowCreateNewCardDialogForm}>
                  Add New Card
                </Button>
              ) : (
                <Button as={Link} className={cn.cardControl} to={learnDeckPath}>
                  Learn Deck
                </Button>
              )}
            </FlexContainer>
          )}
        </FlexContainer>
        {isEmpty && <EmptyDeck isAuthor={isAuthor} onClick={setShowCreateNewCardDialogForm} />}
        {!isEmpty && (
          <>
            <TextField
              label={'Find card by question'}
              onChange={searchHandler}
              placeholder={'Find card'}
              value={search}
              variant={'search'}
            />
            {isTinyScreen ? (
              <DeckTableMobile cards={cards} isAuthor={isAuthor} />
            ) : (
              <DeckTable cards={cards} isAuthor={isAuthor} />
            )}
            <Pagination
              className={cn.pagination}
              currentPage={currentPage}
              pageSize={itemsPerPage}
              totalCount={pagination.totalItems}
            />
          </>
        )}
        <CardDialogForm
          onOpenChange={setShowCreateNewCardDialogForm}
          open={showCreateNewCardDialogForm}
        />
      </FlexContainer>
    </Page>
  )
}
