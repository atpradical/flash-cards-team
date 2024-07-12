import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import { DeckListTable as DeckListTableComponent } from './deck-list-table'
import { DeckListExample } from './deck-list-table.mock'

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
    onSort: action('onSort action invoked!'),
  },
}
