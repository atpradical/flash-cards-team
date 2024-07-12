import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { action } from '@storybook/addon-actions'

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
    onSort: action('onSort action invoked!'),
  },
  render: () => (
    <MemoryRouter>
      <DeckTableComponent {...DeckTable.args} />
    </MemoryRouter>
  ),
}
