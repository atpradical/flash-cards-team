import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { TableFilterBar } from '@/components/ui/layout-components'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: TableFilterBar,
  tags: ['autodocs'],
  title: 'Components/TableFilterBar',
} satisfies Meta<typeof TableFilterBar>

export default meta
type Story = StoryObj<typeof meta>

export const TableFilterBarBase: Story = {
  args: {
    onSearchChange: action('search callback invoked'),
    onSliderChange: action('slider onValueChange callback invoked'),
    search: '',
    sliderRange: [0, 100],
  },
  render: args => {
    const [sliderRange, setSliderRange] = useState(args.sliderRange)

    const sliderRangeHandler = (newRange: number[]) => {
      setSliderRange([...newRange])
      args.onSliderChange(newRange)
    }

    return (
      <TableFilterBar {...args} onSliderChange={sliderRangeHandler} sliderRange={sliderRange} />
    )
  },
}
