import { ChangeEvent, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { ArrowBackOutline } from '@/assets/icons'
import myImage from '@/assets/webp/react-logo.webp'
import { AddNewCardDialogForm, AddNewDeckDialogForm, DeleteDialogForm } from '@/components/forms'
import { DeckTable, DeckTitle } from '@/components/ui/layout-components'
import { Button, Progress, TextField } from '@/components/ui/primitives'
import { Pagination } from '@/components/ui/primitives/pagination'
import { PaginationModel } from '@/services/cards/cards.types'
import { useGetCardsQuery } from '@/services/flashcards-api'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'
import clsx from 'clsx'

import s from './deck-page.module.scss'

export const DeckPage = () => {
  const cn = {
    goBack: clsx(s.goBack),
    icon: clsx(s.icon),
    image: clsx(s.image),
    learnDeck: clsx(s.learnDeck),
    pagination: clsx(s.pagination),
  }

  const [showAddNewCardDialogForm, setShowAddNewCardDialogForm] = useState(false)
  const [showDeleteCardDialogForm, setShowDeleteCardDialogForm] = useState(false)
  const [showAddNewDeckDialogForm, setShowAddNewDeckDialogForm] = useState(false)
  const [showDeleteDeckDialogForm, setShowDeleteDeckDialogForm] = useState(false)

  const { deckId } = useParams()
  const [search, setSearch] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const { data, error, isLoading } = useGetCardsQuery({
    currentPage,
    id: deckId ?? '',
    itemsPerPage,
    question: search || undefined,
  })
  const { items: cards = [], pagination = {} as PaginationModel } = data ?? {}

  // todo: delete console.log with error during err handling task completion
  console.log(error)

  const editDeckHandler = () => {
    setShowAddNewDeckDialogForm(!showAddNewDeckDialogForm)
  }

  const deleteDeckHandler = () => {
    setShowDeleteDeckDialogForm(!showDeleteDeckDialogForm)
  }

  const editCardHandler = () => {
    setShowAddNewCardDialogForm(!showAddNewCardDialogForm)
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

  if (isLoading) {
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
        <FlexContainer ai={'start'} jc={'start'}>
          <DeckTitle
            image={myImage}
            onDelete={deleteDeckHandler}
            onEdit={editDeckHandler}
            title={"Fried's Deck"}
          />
          <Button as={Link} className={cn.learnDeck} to={PATH.CARD}>
            Learn Deck
          </Button>
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
          onEdit={editCardHandler}
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
        <AddNewCardDialogForm
          onOpenChange={editCardHandler}
          onSubmit={() => console.log('onSubmit')}
          open={showAddNewCardDialogForm}
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
