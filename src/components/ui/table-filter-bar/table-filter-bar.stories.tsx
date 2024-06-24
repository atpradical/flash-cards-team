import type { Meta, StoryObj } from '@storybook/react'

import { TableFilterBar } from '@/components/ui/table-filter-bar/table-filter-bar'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {
    onValueChange: action('slider onValueChange callback invoked'),
    value: { control: 'object' },
  },
  component: TableFilterBar,
  tags: ['autodocs'],
  title: 'Components/TableFilterBar',
} satisfies Meta<typeof TableFilterBar>

export default meta
type Story = StoryObj<typeof meta>

export const TableFilterBarBase: Story = {
  args: {
    onValueChange: action('slider onValueChange callback invoked'),
    value: [0, 10],
  },
}
