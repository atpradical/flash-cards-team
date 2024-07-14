import { ChangeEvent, useState } from 'react'
import { Link, generatePath, useParams } from 'react-router-dom'

import { ArrowBackOutline } from '@/assets/icons'
import { CardDialogForm } from '@/components/forms'
import { DeckTitle } from '@/components/ui/layout-components'
import { DeckTable } from '@/components/ui/layout-components/tables'
import { Button, TextField } from '@/components/ui/primitives'
import { Pagination } from '@/components/ui/primitives/pagination'
import { cn } from '@/pages/deck-page/deck-page.styles'
import { PaginationModel } from '@/services/cards/cards.types'
import { Deck } from '@/services/decks/deck.types'
import { useGetCardsQuery, useGetDeckQuery } from '@/services/flashcards-api'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

import { EmptyDeck } from './empty-deck'

export const DeckPage = () => {
  const [showCreateNewCardDialogForm, setShowCreateNewCardDialogForm] = useState(false)

  const { deckId = '' } = useParams()
  const learnDeckPath = generatePath(PATH.CARD_LEARN, { deckId })

  const [search, setSearch] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

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
    question: search || undefined,
  })

  const { items: cards = [], pagination = {} as PaginationModel } = cardsData ?? {}

  const searchCardHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }

  const paginationPageSizeHandler = (pageSize: string) => {
    setCurrentPage(1)
    setItemsPerPage(Number(pageSize))
  }

  const paginationCurrentPageHandler = (currentPage: number) => {
    setCurrentPage(currentPage)
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
              {/* todo: add check if current Deck Author is me then show Button*/}
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
              onChange={searchCardHandler}
              placeholder={'Find card'}
              value={search}
              variant={'search'}
            />
            <DeckTable cards={cards} onSort={() => {}} />
            <Pagination
              className={cn.pagination}
              currentPage={currentPage}
              onPageChange={paginationCurrentPageHandler}
              onPageSizeChange={paginationPageSizeHandler}
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
