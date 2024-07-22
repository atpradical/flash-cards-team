import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { store } from '@/services'

import { DeckTable as DeckTableComponent } from './deck-table'
import { CardListExample } from './deck-table.mock'

const meta = {
  argTypes: {},
  component: DeckTableComponent,
  title: 'Layout Components/Tables/Deck Table',
} satisfies Meta<typeof DeckTableComponent>

type Story = StoryObj<typeof meta>
export default meta

export const DeckTable: Story = {
  args: {
    cards: CardListExample,
    isAuthor: true,
  },
  render: () => (
    <MemoryRouter>
      <Provider store={store}>
        <DeckTableComponent {...DeckTable.args} />
      </Provider>
    </MemoryRouter>
  ),
}
