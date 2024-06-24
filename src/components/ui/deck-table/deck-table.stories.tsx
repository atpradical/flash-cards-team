import type { Meta, StoryObj } from '@storybook/react'

import { DeckTable } from '@/components/ui/deck-table'
import { CardListExample } from '@/components/ui/deck-table/deck-table.mock'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: DeckTable,
  title: 'Components/DeckTable',
} satisfies Meta<typeof DeckTable>

type Story = StoryObj<typeof meta>
export default meta

export const Example: Story = {
  args: {
    cardList: CardListExample,
    onSort: action('onSort action invoked!'),
  },
}
