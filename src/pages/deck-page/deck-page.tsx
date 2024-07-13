import { ChangeEvent, useState } from 'react'
import { Link, generatePath, useParams } from 'react-router-dom'

import { ArrowBackOutline } from '@/assets/icons'
import { CardDialogForm, DeckDialogForm, DeleteDialogForm } from '@/components/forms'
import { DeckTitle } from '@/components/ui/layout-components'
import { DeckTable } from '@/components/ui/layout-components/tables'
import { Button, Progress, TextField } from '@/components/ui/primitives'
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
  const [showAddNewDeckDialogForm, setShowAddNewDeckDialogForm] = useState(false)
  const [showDeleteDeckDialogForm, setShowDeleteDeckDialogForm] = useState(false)

  const { deckId } = useParams()
  const learnDeckPath = deckId ? generatePath(PATH.CARD_LEARN, { deckId }) : 'bad-deckId'

  const [search, setSearch] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const {
    data: deck = {} as Deck,
    error: deckError,
    isLoading: isLoadingDeck,
  } = useGetDeckQuery({ id: deckId ?? '' })

  const {
    data: cardsData,
    error: cardsError,
    isLoading: isLoadingCards,
  } = useGetCardsQuery({
    currentPage,
    deckId: deckId ?? '',
    itemsPerPage,
    question: search || undefined,
  })

  const { items: cards = [], pagination = {} as PaginationModel } = cardsData ?? {}

  // todo: delete console.log with error during err handling task completion
  console.log(cardsError)
  console.log(deckError)
  console.log('deck', deck)
  console.log('deckId', deckId)

  const editDeckHandler = () => {
    setShowAddNewDeckDialogForm(!showAddNewDeckDialogForm)
  }

  const deleteDeckHandler = () => {
    setShowDeleteDeckDialogForm(!showDeleteDeckDialogForm)
  }

  const createCardHandler = () => {
    setShowCreateNewCardDialogForm(!showCreateNewCardDialogForm)
  }

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

  if (isLoadingCards || isLoadingDeck) {
    return <Progress />
  }

  const isEmpty = cards.length === 0

  // todo: delete mock data from components props during relevant Routing or RTKQuery task.
  return (
    <Page>
      <FlexContainer fd={'column'} gap={'24px'} jc={'space-between'} pd={'0 20px'}>
        <Button as={Link} className={cn.goBack} to={PATH.DECK_LIST} variant={'link'}>
          <ArrowBackOutline className={cn.icon} />
          Back to Decks List
        </Button>
        <FlexContainer ai={'start'} jc={'start'}>
          <DeckTitle
            cover={deck.cover}
            learnDeckPath={learnDeckPath}
            onDelete={deleteDeckHandler}
            onEdit={editDeckHandler}
            title={(deck.name ??= 'Name Deck')}
          />
          {!isEmpty && (
            <FlexContainer fd={'column'} gap={'20px'}>
              <Button as={Link} className={cn.cardControl} to={learnDeckPath}>
                Learn Deck
              </Button>
              {/* todo: add check if current Deck Author is me then show Button*/}
              <Button className={cn.cardControl} onClick={createCardHandler}>
                Add New Card
              </Button>
            </FlexContainer>
          )}
        </FlexContainer>
        {isEmpty && <EmptyDeck createCardHandler={createCardHandler} />}
        {!isEmpty && (
          <>
            <TextField
              label={'Find question'}
              onChange={searchCardHandler}
              placeholder={'Find card'}
              value={search}
              variant={'search'}
            />
            <DeckTable cards={cards} onSort={() => console.log('onSort invoked!')} />
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
        <CardDialogForm onOpenChange={createCardHandler} open={showCreateNewCardDialogForm} />
        <DeckDialogForm
          onOpenChange={setShowAddNewDeckDialogForm}
          open={showAddNewDeckDialogForm}
        />
        <DeleteDialogForm
          entityId={deckId ?? ''}
          name={deck.name}
          onOpenChange={deleteDeckHandler}
          open={showDeleteDeckDialogForm}
        />
      </FlexContainer>
    </Page>
  )
}
