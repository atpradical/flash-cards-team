import { ChangeEvent, useState } from 'react'
import { Link, generatePath, useParams, useSearchParams } from 'react-router-dom'

import { ArrowBackOutline } from '@/assets/icons'
import { CardDialogForm } from '@/components/forms'
import { DeckTable, DeckTitle } from '@/components/ui/layout-components'
import { Button, Pagination, TextField } from '@/components/ui/primitives'
import { cn } from '@/pages/deck-page/deck-page.styles'
import { Deck, PaginationModel, useGetCardsQuery, useGetDeckQuery } from '@/services'
import { PATH } from '@/shared/enums'
import { useSearchParamUpdater } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

import { EmptyDeck } from './empty-deck'

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

  const { data: deck = {} as Deck, isFetching: isFetchingDeck } = useGetDeckQuery({
    id: deckId,
  })

  const {
    data: cardsData,
    isFetching: isFetchingCards,
    isLoading: isLoadingCards,
  } = useGetCardsQuery({
    currentPage,
    deckId: deckId,
    itemsPerPage,
    orderBy: orderBy || undefined,
    question: search || undefined,
  })

  const { items: cards = [], pagination = {} as PaginationModel } = cardsData ?? {}

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearchParam({ currentPage: 1, search: e.currentTarget.value })
  }

  const fetching = isFetchingCards || isFetchingDeck

  const isEmpty = cards.length === 0 && !search && !isLoadingCards

  return (
    <Page load={fetching}>
      <FlexContainer fd={'column'} gap={'24px'} jc={'space-between'} pd={'0 20px'}>
        <Button as={Link} className={cn.goBack} to={PATH.DECK_LIST} variant={'link'}>
          <ArrowBackOutline className={cn.icon} />
          Back to Decks List
        </Button>
        <FlexContainer ai={'start'} jc={'start'}>
          <DeckTitle deck={deck} learnDeckPath={learnDeckPath} />
          {!isEmpty && (
            <FlexContainer fd={'column'} gap={'20px'}>
              <Button as={Link} className={cn.cardControl} to={learnDeckPath}>
                Learn Deck
              </Button>
              <Button className={cn.cardControl} onClick={setShowCreateNewCardDialogForm}>
                Add New Card
              </Button>
            </FlexContainer>
          )}
        </FlexContainer>
        {isEmpty && <EmptyDeck onClick={setShowCreateNewCardDialogForm} />}
        {!isEmpty && (
          <>
            <TextField
              label={'Find card by question'}
              onChange={searchHandler}
              placeholder={'Find card'}
              value={search}
              variant={'search'}
            />
            <DeckTable cards={cards} />
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
