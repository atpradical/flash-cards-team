import type { Meta, StoryObj } from '@storybook/react'

import { TableFilterBar } from '@/components/ui/layout-components'
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
    searchChangeValue: action('search callback invoked'),
    searchValue: 'Search example',
    value: [0, 100],
  },
}
