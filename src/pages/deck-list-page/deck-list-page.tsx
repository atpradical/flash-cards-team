import { DeckDialogForm } from '@/components/forms'
import {
  DeckListTable,
  DeckListTableMobile,
  TableFilterBar,
} from '@/components/ui/layout-components'
import { Button, Pagination, Typography } from '@/components/ui/primitives'
import { SCREEN_SIZE } from '@/shared/enums'
import { useCurrentScreenWidth, useDeckListPageData } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const DeckListPage = () => {
  const {
    clearFiltersHandler,
    currentPage,
    decks,
    isFetching,
    isFetchingMin,
    itemsPerPage,
    minMax,
    search,
    setShowAddDeckDialog,
    showAddDeckDialog,
    sliderRangeChangeHandler,
    sliderState,
    sliderValueCommitHandler,
    user,
  } = useDeckListPageData()

  const currentScreenWidth = useCurrentScreenWidth()
  const breakpoint = SCREEN_SIZE.TABLET_TINY
  const isTinyScreen = currentScreenWidth <= breakpoint

  if (!decks || !user) {
    return <Page />
  }

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
          <TableFilterBar
            max={minMax?.max}
            min={minMax?.min}
            onClearFilters={clearFiltersHandler}
            onSliderChange={sliderRangeChangeHandler}
            onSliderCommit={sliderValueCommitHandler}
            search={search}
            sliderRange={sliderState}
          />
          {isTinyScreen ? (
            <DeckListTableMobile decks={decks.items} user={user} />
          ) : (
            <DeckListTable decks={decks.items} user={user} />
          )}
          <Pagination
            currentPage={currentPage}
            pageSize={itemsPerPage}
            totalCount={decks.pagination.totalItems}
          />
          <DeckDialogForm
            clearFilters={clearFiltersHandler}
            onOpenChange={setShowAddDeckDialog}
            open={showAddDeckDialog}
          />
        </FlexContainer>
      )}
    </Page>
  )
}
