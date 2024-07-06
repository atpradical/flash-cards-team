import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AddNewDeckDialogForm, DeleteDialogForm } from '@/components/forms'
import { DeckListTable, TableFilterBar } from '@/components/ui/layout-components'
import { Button, Progress, Typography } from '@/components/ui/primitives'
import { Pagination } from '@/components/ui/primitives/pagination'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'
import { useGetDecksQuery } from '@/services/flashcards-api'
import { PaginationModel } from '@/services/decks/deck.types'

export const DeckListPage = () => {
  const [showAddDeckDialog, setShowAddDeckDialog] = useState(false)
  const [showEditDeckDialog, setEditDeckDialog] = useState(false)
  const [showDeleteDeckDialog, setDeleteDeckDialog] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [search, setSearch] = useState('')

  const { data, isLoading } = useGetDecksQuery(
    {
      currentPage,
      itemsPerPage: itemsPerPage,
      name: search,
    },
    { skip: search.trim() === '' && search !== '' }
  )

  const { items = [], pagination = {} as PaginationModel } = data ?? {}

  const navigate = useNavigate()

  const deleteDeckHandler = () => {
    setDeleteDeckDialog(!showDeleteDeckDialog)
  }

  const editDeckHandler = () => {
    setEditDeckDialog(!showEditDeckDialog)
  }
  const addNewDeckHandler = () => {
    setShowAddDeckDialog(!showAddDeckDialog)
  }

  const learnDeckHandler = () => {
    navigate('/deck')
  }

  const onPageChangeHandler = (page: number) => {
    setCurrentPage(page)
  }

  const onPageSizeChangeHandler = (value: string) => {
    setItemsPerPage(Number(value))
  }

  const searchDeckHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }

  if (isLoading) {
    return <Progress />
  }
  //todo: replace related mock data and functions during RTQuery tasks implementation
  return (
    <Page>
      <FlexContainer fd={'column'} gap={'24px'} pd={'0 20px'}>
        <FlexContainer jc={'space-between'}>
          <Typography as={'h1'} variant={'h1'}>
            {"Deck's list"}
          </Typography>
          <Button onClick={addNewDeckHandler}>Add New Deck</Button>
        </FlexContainer>
        <TableFilterBar
          onValueChange={() => console.log('number of cards is changed')}
          searchValue={search}
          value={[1, 100]}
          searchChangeValue={searchDeckHandler}
        />
        <DeckListTable
          deckList={items}
          onDelete={deleteDeckHandler}
          onEdit={editDeckHandler}
          onLearn={learnDeckHandler}
          onSort={() => console.log('onSort invoked!')}
        />
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChangeHandler}
          onPageSizeChange={onPageSizeChangeHandler}
          totalCount={pagination.totalItems}
          pageSize={itemsPerPage}
        />
        <AddNewDeckDialogForm
          onOpenChange={addNewDeckHandler}
          onSubmit={() => console.log('Form submit invoked!')}
          open={showAddDeckDialog}
        />
        <DeleteDialogForm
          entity={'Deck'}
          id={'12345'}
          name={"Some Deck's Name"}
          onOpenChange={deleteDeckHandler}
          onSubmit={() => console.log('delete dialog form submit invoked!')}
          open={showDeleteDeckDialog}
        />
        <AddNewDeckDialogForm
          onOpenChange={editDeckHandler}
          onSubmit={() => console.log('add dialog form submit invoked!')}
          open={showEditDeckDialog}
        />
      </FlexContainer>
    </Page>
  )
}

//типы сравнить в карточками
//белый active
