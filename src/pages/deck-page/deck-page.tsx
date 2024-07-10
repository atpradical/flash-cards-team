import { ChangeEvent, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { ArrowBackOutline } from '@/assets/icons'
import { AddNewCardDialogForm, AddNewDeckDialogForm, DeleteDialogForm } from '@/components/forms'
import { DeckTable, DeckTitle } from '@/components/ui/layout-components'
import { Button, Progress, TextField } from '@/components/ui/primitives'
import { Pagination } from '@/components/ui/primitives/pagination'
import { PaginationModel } from '@/services/cards/cards.types'
import { Deck } from '@/services/decks/deck.types'
import { useGetCardsQuery, useGetDeckQuery } from '@/services/flashcards-api'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'
import clsx from 'clsx'

import s from './deck-page.module.scss'

import { EmptyDeck } from './empty-deck'

export const DeckPage = () => {
  const cn = {
    cardControl: clsx(s.cardControl),
    goBack: clsx(s.goBack),
    icon: clsx(s.icon),
    image: clsx(s.image),
    pagination: clsx(s.pagination),
  }

  const [showCreateNewCardDialogForm, setShowCreateNewCardDialogForm] = useState(false)
  const [showUpdateCardDialogForm, setShowUpdateCardDialogForm] = useState(false)
  const [showDeleteCardDialogForm, setShowDeleteCardDialogForm] = useState(false)
  const [showAddNewDeckDialogForm, setShowAddNewDeckDialogForm] = useState(false)
  const [showDeleteDeckDialogForm, setShowDeleteDeckDialogForm] = useState(false)

  const { deckId } = useParams()
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

  const editDeckHandler = () => {
    setShowAddNewDeckDialogForm(!showAddNewDeckDialogForm)
  }

  const deleteDeckHandler = () => {
    setShowDeleteDeckDialogForm(!showDeleteDeckDialogForm)
  }

  const createCardHandler = () => {
    setShowCreateNewCardDialogForm(!showCreateNewCardDialogForm)
  }

  const updateCardHandler = () => {
    setShowUpdateCardDialogForm(!showUpdateCardDialogForm)
  }

  const deleteCardHandler = () => {
    setShowDeleteCardDialogForm(!showDeleteCardDialogForm)
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

  // todo: delete mock data from components props during relevant Routing or RTKQuery task.
  return (
    <Page>
      <FlexContainer fd={'column'} gap={'24px'} jc={'space-between'} pd={'0 20px'}>
        <Button as={Link} className={cn.goBack} to={PATH.DECK_LIST} variant={'link'}>
          <ArrowBackOutline className={cn.icon} />
          Back to Decks List
        </Button>
        {Object.keys(deck).length ? (
          <>
            <FlexContainer ai={'start'} jc={'start'}>
              <DeckTitle
                cover={deck.cover}
                onDelete={deleteDeckHandler}
                onEdit={editDeckHandler}
                title={deck.name}
              />

              <FlexContainer fd={'column'} gap={'20px'}>
                <Button as={Link} className={cn.cardControl} to={PATH.CARD}>
                  Learn Deck
                </Button>
                {/* todo: add check if current Deck Author is me then show Button*/}
                <Button className={cn.cardControl} onClick={createCardHandler}>
                  Add New Card
                </Button>
              </FlexContainer>
            </FlexContainer>
            <TextField
              label={'Find question'}
              onChange={searchCardHandler}
              placeholder={'Find card'}
              value={search}
              variant={'search'}
            />
            <DeckTable
              cards={cards}
              onDelete={deleteCardHandler}
              onEdit={updateCardHandler}
              onSort={() => console.log('onSort invoked!')}
            />
            <Pagination
              className={cn.pagination}
              currentPage={currentPage}
              onPageChange={paginationCurrentPageHandler}
              onPageSizeChange={paginationPageSizeHandler}
              pageSize={itemsPerPage}
              totalCount={pagination.totalItems}
            />
          </>
        ) : (
          <EmptyDeck createCardHandler={createCardHandler} />
        )}
        {/* todo: change mock deckId later*/}
        <AddNewCardDialogForm
          deckId={'cly7c2vqa0drxpb015rp9sbi7'}
          onOpenChange={createCardHandler}
          onSubmit={createCardHandler}
          open={showCreateNewCardDialogForm}
        />
        <AddNewCardDialogForm
          action={'UPDATE'}
          deckId={'cly7c2vqa0drxpb015rp9sbi7'}
          onOpenChange={updateCardHandler}
          onSubmit={() => console.log('onSubmit')}
          open={showUpdateCardDialogForm}
        />
        <AddNewDeckDialogForm
          onOpenChange={setShowAddNewDeckDialogForm}
          onSubmit={() => console.log('onSubmit')}
          open={showAddNewDeckDialogForm}
        />
        <DeleteDialogForm
          entity={'Card'}
          id={'15'}
          name={'Some name'}
          onOpenChange={deleteCardHandler}
          onSubmit={() => console.log('onSubmit')}
          open={showDeleteCardDialogForm}
        />
        <DeleteDialogForm
          entity={'Deck'}
          id={'15'}
          name={'Some name'}
          onOpenChange={deleteDeckHandler}
          onSubmit={() => console.log('onSubmit')}
          open={showDeleteDeckDialogForm}
        />
      </FlexContainer>
    </Page>
  )
}
