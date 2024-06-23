import type { Meta, StoryObj } from '@storybook/react'

import { DecksListTable } from '@/components/ui/deck-list-table/decks-list-table'

const meta = {
  argTypes: {},
  component: DecksListTable,
  title: 'Components/DecksListTable',
} satisfies Meta<typeof DecksListTable>

type Story = StoryObj<typeof meta>
export default meta

export const Example: Story = {
  args: {},
}
