import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { store } from '@/services'

import { DeckListExample } from '../deck-list-table/deck-list-table.mock'
import { DeckListTableMobile as DeckListTableMobileComponent } from './deck-list-table-mobile'

const meta = {
  argTypes: {},
  component: DeckListTableMobileComponent,
  title: 'Layout Components/Tables/Deck List Table Mobile',
} satisfies Meta<typeof DeckListTableMobileComponent>

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
        <DeckListTableMobileComponent {...args} />
      </Provider>
    </MemoryRouter>
  ),
}
