import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { DeckTable } from '@/components/ui/layout-components'
import { CardListExample } from '@/components/ui/layout-components/deck-table/deck-table.mock'
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
    cards: CardListExample,
    onDelete: action('onDelete action invoked!'),
    onEdit: action('onEdit action invoked!'),
    onSort: action('onSort action invoked!'),
  },
  render: () => (
    <MemoryRouter>
      <DeckTable {...Example.args} />
    </MemoryRouter>
  ),
}
