import type { Meta, StoryObj } from '@storybook/react'

import { TableFilterBar as TableFilterBarCmponent } from '@/components/ui/layout-components'
import { fn } from '@storybook/test'

const meta = {
  argTypes: {},
  component: TableFilterBarCmponent,
  title: 'Layout Components/TableFilterBar',
} satisfies Meta<typeof TableFilterBarCmponent>

export default meta
type Story = StoryObj<typeof meta>

export const TableFilterBar: Story = {
  args: {
    max: 100,
    min: 0,
    onSearchChange: fn(),
    onSliderChange: fn(),
    onTabChange: fn(),
    search: '',
  },
}
