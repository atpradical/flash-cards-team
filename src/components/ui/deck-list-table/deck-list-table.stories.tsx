import type { Meta, StoryObj } from '@storybook/react'

import { DeckListExample } from '@/components/ui/deck-list-table/deck-list-table.mock'
import { DecksListTable } from '@/components/ui/deck-list-table/decks-list-table'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: DecksListTable,
  title: 'Components/DecksListTable',
} satisfies Meta<typeof DecksListTable>

type Story = StoryObj<typeof meta>
export default meta

export const Example: Story = {
  args: {
    deckList: DeckListExample,
    onSort: action('onSort action invoked!'),
  },
}
