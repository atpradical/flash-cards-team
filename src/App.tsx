import { DecksListTable } from '@/components/ui/deck-list-table'
import { DeckListExample } from '@/components/ui/deck-list-table/deck-list-table.mock'
import { DeckTable } from '@/components/ui/deck-table'
import { CardListExample } from '@/components/ui/deck-table/deck-table.mock'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Header } from '@/shared/ui/header'
import { Layout } from '@/shared/ui/layout'
import { Page } from '@/shared/ui/page'

export function App() {
  return (
    <Layout>
      <Header />
      <Page>
        <FlexContainer fd={'column'} gap={'20px'} jc={'center'}>
          <DecksListTable
            deckList={DeckListExample}
            onSort={() => console.log('onSort invoked!')}
          />
          <DeckTable cardList={CardListExample} onSort={() => console.log('onSort invoked!')} />
        </FlexContainer>
      </Page>
    </Layout>
  )
}
