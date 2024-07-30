import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { store } from '@/services'

import { DeckListTable as DeckListTableComponent } from './deck-list-table'
import { DeckListExample } from './deck-list-table.mock'

const meta = {
  argTypes: {},
  component: DeckListTableComponent,
  title: 'Layout Components/Tables',
} satisfies Meta<typeof DeckListTableComponent>

type Story = StoryObj<typeof meta>
export default meta

export const DeckListTable: Story = {
  args: {
    decks: DeckListExample,
    user: mockUser,
  },
  render: () => (
    <MemoryRouter>
      <Provider store={store}>
        <DeckListTableComponent {...DeckListTable.args} />
      </Provider>
    </MemoryRouter>
  ),
}
