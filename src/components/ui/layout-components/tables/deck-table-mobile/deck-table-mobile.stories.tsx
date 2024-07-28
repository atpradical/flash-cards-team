import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { CardListExample } from '@/components/ui/layout-components/tables/deck-table/deck-table.mock'
import { store } from '@/services'
import { Meta, StoryObj } from '@storybook/react'

import { DeckTableMobile as DeckTableMobileComponent } from './deck-table-mobile'

const meta = {
  argTypes: {},
  component: DeckTableMobileComponent,
  title: 'Layout Components/Tables/Deck Table Mobile',
} satisfies Meta<typeof DeckTableMobileComponent>

type Story = StoryObj<typeof meta>
export default meta

export const DeckTableMobile: Story = {
  args: {
    cards: CardListExample,
    isAuthor: true,
  },
  render: args => (
    <MemoryRouter>
      <Provider store={store}>
        <DeckTableMobileComponent {...args} />
      </Provider>
    </MemoryRouter>
  ),
}
