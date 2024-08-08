import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { DeckTable as DeckTableComponent } from '@/components/ui/layout-components/tables/deck-table'
import { CardListExample } from '@/components/ui/layout-components/tables/deck-table/deck-table.mock'
import { store } from '@/services'

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
  render: args => (
    <MemoryRouter>
      <Provider store={store}>
        <DeckTableComponent {...args} />
      </Provider>
    </MemoryRouter>
  ),
}
