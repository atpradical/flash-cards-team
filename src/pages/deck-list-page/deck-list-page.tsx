import { ChangeEvent, useMemo, useState } from 'react'

import { DeckDialogForm } from '@/components/forms'
import { DeckListTable, TableFilterBar } from '@/components/ui/layout-components'
import { Button, Pagination, Typography } from '@/components/ui/primitives'
import { PaginationModel, useGetDecksQuery, useMeQuery } from '@/services'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const DeckListPage = () => {
  const [showAddDeckDialog, setShowAddDeckDialog] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [search, setSearch] = useState('')
  const [sliderRange, setSliderRange] = useState<number[]>([0, 100])
  const [orderBy, setOrderBy] = useState('')
  const { data: me } = useMeQuery()
  const [currentFilterTab, setCurrentFilterTab] = useState('allDecks')
  const authorIdFilter = currentFilterTab === 'myDecks' ? me?.id : undefined
  const favoritedByFilter = currentFilterTab === 'favorites' ? me?.id : undefined

  const { data, isFetching } = useGetDecksQuery({
      authorId: authorIdFilter,
    currentPage,
      favoritedBy: favoritedByFilter,
    itemsPerPage: itemsPerPage,
    maxCardsCount: sliderRange[1],
    minCardsCount: sliderRange[0],
    name: search || undefined,
      orderBy: orderBy || undefined,
  })
  const { items: decks = [], pagination = {} as PaginationModel } = data ?? {}

  const filterTabHandler = (value: string) => {
    setCurrentFilterTab(value)
    setCurrentPage(1)
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
    setCurrentPage(1)
    setSliderRange([...sliderRange])
  }

  // todo: check with Andrey: why without useMemo don't work.
  const tableSortHandler = useMemo(
    () => (orderBy: string) => {
      setOrderBy(orderBy)
      setCurrentPage(1)
    },
    []
  )
  // const tableSortHandler = (orderBy: string) => {
  //   // setOrderBy(orderBy)
  //   setCurrentPage(1)
  // }

  return (
    <Page load={isFetching}>
      <FlexContainer fd={'column'} gap={'24px'} pd={'0 20px'}>
        <FlexContainer jc={'space-between'}>
          <Typography as={'h1'} variant={'h1'}>
            {"Deck's list"}
          </Typography>
          <Button onClick={setShowAddDeckDialog}>Add New Deck</Button>
        </FlexContainer>
        <TableFilterBar
          onFilterTabChange={filterTabHandler}
          onSearchChange={searchDeckHandler}
          onSliderChange={sliderRangeHandler}
          search={search}
          sliderRange={sliderRange}
        />
        <DeckListTable decks={decks} onSort={tableSortHandler} />
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
