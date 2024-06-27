import type { Meta, StoryObj } from '@storybook/react'

import { DeckListExample } from '@/components/ui/deck-list-table/deck-list-table.mock'
import { action } from '@storybook/addon-actions'

import { DeckListTable } from './deck-list-table'

const meta = {
  argTypes: {},
  component: DeckListTable,
  title: 'Components/DeckListTable',
} satisfies Meta<typeof DeckListTable>

type Story = StoryObj<typeof meta>
export default meta

export const Example: Story = {
  args: {
    deckList: DeckListExample,
    onDelete: action('on learn action invoked!'),
    onEdit: action('on learn action invoked!'),
    onLearn: action('on learn action invoked!'),
    onSort: action('onSort action invoked!'),
  },
}
