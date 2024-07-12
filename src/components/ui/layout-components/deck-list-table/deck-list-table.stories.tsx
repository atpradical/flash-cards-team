import type { Meta, StoryObj } from '@storybook/react'

import { DeckListTable } from '@/components/ui/layout-components'
import { DeckListExample } from '@/components/ui/layout-components/deck-list-table/deck-list-table.mock'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: DeckListTable,
  title: 'Components/DeckListTable',
} satisfies Meta<typeof DeckListTable>

type Story = StoryObj<typeof meta>
export default meta

export const Example: Story = {
  args: {
    decks: DeckListExample,
    onSort: action('onSort action invoked!'),
  },
}
