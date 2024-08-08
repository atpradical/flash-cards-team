import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { DeckListTable as DeckListTableComponent } from '@/components/ui/layout-components/tables/deck-list-table'
import { DeckListExample } from '@/components/ui/layout-components/tables/deck-list-table/deck-list-table.mock'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { store } from '@/services'

const meta = {
  argTypes: {},
  component: DeckListTableComponent,
  title: 'Layout Components/Tables/Deck List Table',
} satisfies Meta<typeof DeckListTableComponent>

type Story = StoryObj<typeof meta>
export default meta

export const DeckListTable: Story = {
  args: {
    decks: DeckListExample,
    user: mockUser,
  },
  render: args => (
    <MemoryRouter>
      <Provider store={store}>
        <DeckListTableComponent {...args} />
      </Provider>
    </MemoryRouter>
  ),
}
