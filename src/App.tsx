import { DeckDataItem, DecksListTable } from '@/components/ui/deck-list-table'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Header } from '@/shared/ui/header'
import { Layout } from '@/shared/ui/layout'
import { Page } from '@/shared/ui/page'

export const DeckListExample: DeckDataItem[] = [
  {
    author: {
      id: '4454eb10-0e63-4b82-8df4-954d284eaf7f',
      name: 'sem',
    },
    cardsCount: 1,
    cover:
      'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/0f06e447-5443-4561-96d9-123b38de4494_2016-02-16 20.44.JPG',
    created: '2024-06-23T09:31:41.409Z',
    id: 'clxrcnhsx08ldpb01y5368v1f',
    isFavorite: false,
    isPrivate: false,
    name: 'New technologies',
    updated: '2024-06-23T09:31:41.409Z',
    userId: '4454eb10-0e63-4b82-8df4-954d284eaf7f',
  },
  {
    author: {
      id: '4454eb10-0e63-4b82-8df4-954d284eafsdf',
      name: 'sem',
    },
    cardsCount: 1,
    cover: null,
    created: '2024-06-23T09:31:41.409Z',
    id: 'clxrcnhsx08ldpb01y5368v1fsdfsd',
    isFavorite: false,
    isPrivate: false,
    name: 'New technologies',
    updated: '2024-06-23T09:31:41.409Z',
    userId: '4454eb10-0e63-4b82-8df4-954d284eaf7f',
  },
  {
    author: {
      id: '4454eb10-0e63-4b82-8df4-954d284eaf7f',
      name: 'sem',
    },
    cardsCount: 1,
    cover: null,
    created: '2024-06-23T09:31:41.409Z',
    id: 'clxrcnhsx08ldpb01y5368v1fvxc',
    isFavorite: false,
    isPrivate: false,
    name: 'New technologies',
    updated: '2024-06-23T09:31:41.409Z',
    userId: '4454eb10-0e63-4b82-8df4-954d284eaf7f',
  },
  {
    author: {
      id: '4454eb10-0e63-4b82-8df4-954d284eaf7f',
      name: 'sem',
    },
    cardsCount: 1,
    cover: null,
    created: '2024-06-23T09:31:41.409Z',
    id: 'clxrcnhsx08ldpb01y5368v1fkmk',
    isFavorite: false,
    isPrivate: false,
    name: 'New technologies',
    updated: '2024-06-23T09:31:41.409Z',
    userId: '4454eb10-0e63-4b82-8df4-954d284eaf7f',
  },
  {
    author: {
      id: '4454eb10-0e63-4b82-8df4-954d284eaf7f',
      name: 'sem',
    },
    cardsCount: 1,
    cover: null,
    created: '2024-06-23T09:31:41.409Z',
    id: 'clxrcnhsx08ldpb01y5368v1fpoipoi',
    isFavorite: false,
    isPrivate: false,
    name: 'New technologies',
    updated: '2024-06-23T09:31:41.409Z',
    userId: '4454eb10-0e63-4b82-8df4-954d284eaf7f',
  },
]

import { Button } from './components/ui/button'
import { CardsHeader } from './components/ui/cards-header'

export function App() {
  return (
    <Layout>
      <CardsHeader isAuthorized />
      <Page>
        <FlexContainer gap={'10px'} jc={'center'}>
          <DecksListTable
            deckList={DeckListExample}
            onSort={() => console.log('onSort invoked!')}
          />
        </FlexContainer>
      </Page>
    </Layout>
  )
}
