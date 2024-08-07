import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { DeckTitle as DeckTitleComponent } from '@/components/ui/layout-components'
import { store } from '@/services'
import { GetDeckResponse } from '@/services/decks/deck.types'

const meta = {
  argTypes: {},
  component: DeckTitleComponent,
  title: 'Layout Components',
} satisfies Meta<typeof DeckTitleComponent>

type Story = StoryObj<typeof meta>
export default meta

export const DeckTitle: Story = {
  args: {
    deck: { name: "Friend's Deck" } as GetDeckResponse,
    isAuthor: true,
    learnDeckPath: '',
  },
  render: args => {
    return (
      <MemoryRouter>
        <Provider store={store}>
          <div style={{ width: 'fit-content' }}>
            <DeckTitleComponent {...args} />
          </div>
        </Provider>
      </MemoryRouter>
    )
  },
}
