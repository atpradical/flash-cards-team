import { ChangeEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { DeckDialogForm } from '@/components/forms'
import { DeckListTable, TableFilterBar } from '@/components/ui/layout-components'
import { Button, Pagination, Typography } from '@/components/ui/primitives'
import { PaginationModel, useGetDecksQuery, useMeQuery } from '@/services'
import { useSearchParamUpdater } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const DeckListPage = () => {
  const [showAddDeckDialog, setShowAddDeckDialog] = useState(false)

  const [searchParams] = useSearchParams()
  const updateSearchParam = useSearchParamUpdater()

  const currentPage = Number(searchParams.get('currentPage') ?? 1)
  const itemsPerPage = Number(searchParams.get('itemsPerPage') ?? 10)
  const min = Number(searchParams.get('min') ?? 0)
  const max = Number(searchParams.get('max') ?? 100)
  const search = searchParams.get('search') ?? ''
  const orderBy = searchParams.get('orderBy') ?? ''
  const tab = searchParams.get('tab') ?? 'allDecks'

  const { data: me } = useMeQuery()
  const authorId = tab === 'myDecks' ? me?.id : undefined
  const favoritedBy = tab === 'favorites' ? me?.id : undefined

  const { data, isFetching } = useGetDecksQuery({
    authorId,
    currentPage,
    favoritedBy,
    itemsPerPage,
    maxCardsCount: max,
    minCardsCount: min,
    name: search || undefined,
    orderBy: orderBy || undefined,
  })
  const { items: decks = [], pagination = {} as PaginationModel } = data ?? {}

  const tabHandler = (tab: string) => {
    updateSearchParam({ currentPage: 1, tab })
  }

  const paginationCurrentPageHandler = (currentPage: number) => {
    updateSearchParam({ currentPage })
  }

  const paginationPageSizeHandler = (itemsPerPage: string) => {
    updateSearchParam({ currentPage: 1, itemsPerPage })
  }

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearchParam({ currentPage: 1, search: e.currentTarget.value })
  }

  const sliderHandler = (range: number[]) => {
    const [min, max] = range

    updateSearchParam({ currentPage: 1, max, min })
  }

  const tableSortHandler = (orderBy: string) => {
    updateSearchParam({ currentPage: 1, orderBy })
  }

  const clearFiltersHandler = () => {
    updateSearchParam({
      authorId: '',
      currentPage: 1,
      itemsPerPage: 10,
      max: 100,
      min: 0,
      orderBy: '',
      search: '',
      tab: 'allDecks',
    })
  }

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
          max={max}
          min={min}
          onClearFilters={clearFiltersHandler}
          onSearchChange={searchHandler}
          onSliderChange={sliderHandler}
          onTabChange={tabHandler}
          search={search}
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
