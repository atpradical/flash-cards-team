import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { DeckDialogForm } from '@/components/forms'
import { DeckListTable, TableFilterBar } from '@/components/ui/layout-components'
import { Button, Pagination, Typography } from '@/components/ui/primitives'
import { PaginationModel, useGetDecksQuery, useGetMinMaxQuery, useMeQuery } from '@/services'
import { useSearchParamUpdater } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const DeckListPage = () => {
  const [showAddDeckDialog, setShowAddDeckDialog] = useState(false)
  const [searchParams] = useSearchParams()
  const [skip, setSkip] = useState(true)

  const currentPage = Number(searchParams.get('currentPage') ?? 1)
  const itemsPerPage = Number(searchParams.get('itemsPerPage') ?? 10)
  const min = Number(searchParams.get('min'))
  const max = Number(searchParams.get('max'))
  const search = searchParams.get('search') ?? ''
  const orderBy = searchParams.get('orderBy') ?? ''
  const tab = searchParams.get('tab') ?? 'allDecks'

  const { data: me } = useMeQuery()
  const authorId = tab === 'myDecks' ? me?.id : undefined
  const favoritedBy = tab === 'favorites' ? me?.id : undefined

  const { data: minMax, isFetching: isFetchingMin } = useGetMinMaxQuery()

  const updateSearchParam = useSearchParamUpdater()

  useEffect(() => {
    if (minMax) {
      updateSearchParam({ max: minMax?.max, min: minMax.min })

      setSkip(false)
    }
    // 'updateSearchParam' mustn't be added to avoid cyclical dependence
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minMax])

  const { data, isFetching } = useGetDecksQuery(
    {
      authorId,
      currentPage,
      favoritedBy,
      itemsPerPage,
      maxCardsCount: max,
      minCardsCount: min,
      name: search || undefined,
      orderBy: orderBy || undefined,
    },
    { skip }
  )
  const { items: decks = [], pagination = {} as PaginationModel } = (data && data) ?? {}

  return (
    <Page load={isFetching}>
      {!isFetchingMin && (
        <FlexContainer fd={'column'} gap={'24px'} pd={'0 20px'}>
          <FlexContainer jc={'space-between'}>
            <Typography as={'h1'} variant={'h1'}>
              {"Deck's list"}
            </Typography>
            <Button onClick={setShowAddDeckDialog}>Add New Deck</Button>
          </FlexContainer>
          <TableFilterBar max={minMax?.max} min={minMax?.min} search={search} />
          <DeckListTable decks={decks} />
          <Pagination
            currentPage={currentPage}
            pageSize={itemsPerPage}
            totalCount={pagination.totalItems}
          />
          <DeckDialogForm onOpenChange={setShowAddDeckDialog} open={showAddDeckDialog} />
        </FlexContainer>
      )}
    </Page>
  )
}
