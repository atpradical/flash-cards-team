import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { DeckListTable } from '@/components/ui/deck-list-table'
import { DeckListExample } from '@/components/ui/deck-list-table/deck-list-table.mock'
import { DeckTable } from '@/components/ui/deck-table'
import { CardListExample } from '@/components/ui/deck-table/deck-table.mock'
import { Toaster } from '@/components/ui/toast'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Layout } from '@/shared/ui/layout'
import { Page } from '@/shared/ui/page'

import { CardsHeader } from './components/ui/cards-header'

export function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
  }

  return (
    <Layout>
      <CardsHeader isAuthorized />
      <Page>
        <FlexContainer fd={'column'} gap={'20px'} jc={'center'}>
          <Button onClick={() => setIsOpen(!isOpen)}>Show Toast</Button>
          <DeckListTable deckList={DeckListExample} onSort={() => console.log('onSort invoked!')} />
          <DeckTable cardList={CardListExample} onSort={() => console.log('onSort invoked!')} />
        </FlexContainer>

        <Toaster onOpenChange={handleOpenChange} open={isOpen} title={'Title success'} />
      </Page>
    </Layout>
  )
}
