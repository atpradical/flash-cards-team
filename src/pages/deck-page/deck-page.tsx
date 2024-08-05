import { Link } from 'react-router-dom'

import { ArrowBackOutline } from '@/assets/icons'
import { CardDialogForm } from '@/components/forms'
import { DeckTable, DeckTableMobile, DeckTitle } from '@/components/ui/layout-components'
import { Button, Pagination, TextField } from '@/components/ui/primitives'
import { cn } from '@/pages/deck-page/deck-page.styles'
import { useDeckPageData } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

import { EmptyDeck } from './empty-deck'

export const DeckPage = () => {
  const {
    clearSearchHandler,
    currentData,
    currentPage,
    data,
    deck,
    goBackHandler,
    isAuthor,
    isLoad,
    isLoadingCards,
    isTinyScreen,
    itemsPerPage,
    learnDeckPath,
    search,
    searchHandler,
    setShowCreateNewCardDialogForm,
    showCreateNewCardDialogForm,
  } = useDeckPageData()

  if (!currentData || !data || !deck) {
    return null
  }

  const cards = currentData.items ?? data.items
  const pagination = currentData.pagination ?? data.pagination
  const isEmpty = cards.length === 0 && !search && !isLoadingCards

  return (
    <Page load={isLoad}>
      <FlexContainer fd={'column'} gap={'24px'} jc={'space-between'} pd={'0 20px'}>
        <Button as={Link} className={cn.goBack} onClick={goBackHandler} variant={'link'}>
          <ArrowBackOutline className={cn.icon} />
          Back to Decks List
        </Button>
        <FlexContainer ai={'start'} jc={'start'}>
          <DeckTitle deck={deck} isAuthor={isAuthor} learnDeckPath={learnDeckPath} />
          {!isEmpty && (
            <FlexContainer fd={'column'} gap={'20px'}>
              {isAuthor ? (
                <Button className={cn.cardControl} onClick={setShowCreateNewCardDialogForm}>
                  Add New Card
                </Button>
              ) : (
                <Button as={Link} className={cn.cardControl} to={learnDeckPath}>
                  Learn Deck
                </Button>
              )}
            </FlexContainer>
          )}
        </FlexContainer>
        {isEmpty && <EmptyDeck isAuthor={isAuthor} onClick={setShowCreateNewCardDialogForm} />}
        {!isEmpty && (
          <>
            <TextField
              label={'Find card by question'}
              onChange={searchHandler}
              placeholder={'Find card'}
              value={search}
              variant={'search'}
            />
            {isTinyScreen ? (
              <DeckTableMobile cards={cards} isAuthor={isAuthor} />
            ) : (
              <DeckTable cards={cards} isAuthor={isAuthor} />
            )}
            <Pagination
              className={cn.pagination}
              currentPage={currentPage}
              pageSize={itemsPerPage}
              totalCount={pagination.totalItems}
            />
          </>
        )}
        {showCreateNewCardDialogForm && (
          <CardDialogForm
            onOpenChange={setShowCreateNewCardDialogForm}
            onSearchClear={clearSearchHandler}
            open={showCreateNewCardDialogForm}
          />
        )}
      </FlexContainer>
    </Page>
  )
}
