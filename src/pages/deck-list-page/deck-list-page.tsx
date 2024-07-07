import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AddNewDeckDialogForm, DeleteDialogForm } from '@/components/forms'
import { DeckListTable, TableFilterBar } from '@/components/ui/layout-components'
import { Button, Progress, Typography } from '@/components/ui/primitives'
import { Pagination } from '@/components/ui/primitives/pagination'
import { PaginationModel } from '@/services/cards/cards.types'
import { useGetDecksQuery } from '@/services/flashcards-api'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const DeckListPage = () => {
  const [showAddDeckDialog, setShowAddDeckDialog] = useState(false)
  const [showEditDeckDialog, setEditDeckDialog] = useState(false)
  const [showDeleteDeckDialog, setDeleteDeckDialog] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [search, setSearch] = useState('')
  const [sliderRange, setSliderRange] = useState<number[]>([0, 100])

  const { data, isLoading } = useGetDecksQuery({
    currentPage,
    itemsPerPage: itemsPerPage,
    maxCardsCount: sliderRange[1],
    minCardsCount: sliderRange[0],
    name: search || undefined,
  })

  const { items: decks = [], pagination = {} as PaginationModel } = data ?? {}

  // const { data } = useGetMinMaxCardsQuery()

  // const { max, min } = data ?? { max: 100, min: 0 }

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

  const paginationCurrentPageHandler = (currentPage: number) => {
    setCurrentPage(currentPage)
  }

  const paginationPageSizeHandler = (pageSize: string) => {
    setCurrentPage(1)
    setItemsPerPage(Number(pageSize))
  }

  const searchDeckHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }

  const sliderRangeHandler = (sliderRange: number[]) => {
    setSliderRange([...sliderRange])
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
          onSearchChange={searchDeckHandler}
          onSliderChange={sliderRangeHandler}
          search={search}
          sliderRange={sliderRange}
        />
        <DeckListTable
          deckList={decks}
          onDelete={deleteDeckHandler}
          onEdit={editDeckHandler}
          onLearn={learnDeckHandler}
          onSort={() => console.log('onSort invoked!')}
        />
        <Pagination
          currentPage={currentPage}
          onPageChange={paginationCurrentPageHandler}
          onPageSizeChange={paginationPageSizeHandler}
          pageSize={itemsPerPage}
          totalCount={pagination.totalItems}
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
