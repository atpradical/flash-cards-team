import { Button } from '@/components/ui/button'
import { DeckListTable } from '@/components/ui/deck-list-table'
import { DeckListExample } from '@/components/ui/deck-list-table/deck-list-table.mock'
import { Pagination } from '@/components/ui/pagination'
import { TableFilterBar } from '@/components/ui/table-filter-bar'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const DeckListPage = () => {
  const dummyNumberOfCards = [2, 90]

  return (
    <Page>
      <FlexContainer jc={'space-between'}>
        <Typography as={'h1'} variant={'h1'}>
          {`Deck's list`}
        </Typography>
        <Button as={'a'} href={''}>
          Add New Deck
        </Button>
      </FlexContainer>
      <FlexContainer fd={'column'} gap={'24px'}>
        <TableFilterBar
          onValueChange={() => console.log('number of cards is changed')}
          value={dummyNumberOfCards}
        />
        <DeckListTable deckList={DeckListExample} onSort={() => console.log('onSort invoked!')} />
        <FlexContainer jc={'left'}>
          <Pagination currentPage={1} onPageChange={() => {}} totalCount={100} />
        </FlexContainer>
      </FlexContainer>
    </Page>
  )
}
