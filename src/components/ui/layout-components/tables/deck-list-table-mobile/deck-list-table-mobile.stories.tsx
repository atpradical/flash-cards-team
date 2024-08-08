import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { DeckListExample } from '@/components/ui/layout-components/tables/deck-list-table/deck-list-table.mock'
import { DeckListTableMobile as DeckListTableMobileComponent } from '@/components/ui/layout-components/tables/deck-list-table-mobile'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { store } from '@/services'

const meta = {
  argTypes: {},
  component: DeckListTableMobileComponent,
  title: 'Layout Components/Tables/Deck List Table Mobile',
} satisfies Meta<typeof DeckListTableMobileComponent>

type Story = StoryObj<typeof meta>
export default meta

export const DeckListTableMobile: Story = {
  args: {
    decks: DeckListExample,
    user: mockUser,
  },
  render: args => (
    <MemoryRouter>
      <Provider store={store}>
        <div style={{ width: '600px' }}>
          <DeckListTableMobileComponent {...args} />
        </div>
      </Provider>
    </MemoryRouter>
  ),
}
