import { ChangeEvent, useState } from 'react'

import { DeckDialogForm } from '@/components/forms'
import { DeckListTable, TableFilterBar } from '@/components/ui/layout-components'
import { Button, Typography } from '@/components/ui/primitives'
import { Pagination } from '@/components/ui/primitives/pagination'
import { PaginationModel } from '@/services/cards/cards.types'
import { useGetDecksQuery } from '@/services/flashcards-api'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const DeckListPage = () => {
  const [showAddDeckDialog, setShowAddDeckDialog] = useState(false)

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

  return (
    <Page load={isLoading}>
      <FlexContainer fd={'column'} gap={'24px'} pd={'0 20px'}>
        <FlexContainer jc={'space-between'}>
          <Typography as={'h1'} variant={'h1'}>
            {"Deck's list"}
          </Typography>
          <Button onClick={setShowAddDeckDialog}>Add New Deck</Button>
        </FlexContainer>
        <TableFilterBar
          onSearchChange={searchDeckHandler}
          onSliderChange={sliderRangeHandler}
          search={search}
          sliderRange={sliderRange}
        />
        {/*todo: replace mock function during sorting task*/}
        <DeckListTable decks={decks} onSort={() => {}} />
        <Pagination
          currentPage={currentPage}
          onPageChange={paginationCurrentPageHandler}
          onPageSizeChange={paginationPageSizeHandler}
          pageSize={itemsPerPage}
          totalCount={pagination.totalItems}
        />
        <DeckDialogForm onOpenChange={setShowAddDeckDialog} open={showAddDeckDialog} />
      </FlexContainer>
    </Page>
  )
}
