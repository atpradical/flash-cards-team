import type { Meta, StoryObj } from '@storybook/react'

import { ChangeEvent, useState } from 'react'

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
    onSliderChange: action('slider onValueChange callback invoked'),
    search: '',
    searchChangeValue: action('search callback invoked'),
    sliderRange: [0, 100],
  },
  render: args => {
    const [sliderRange, setSliderRange] = useState(args.sliderRange)
    const [search, setSearch] = useState(args.search)

    const sliderRangeHandler = (newRange: number[]) => {
      setSliderRange([...newRange])
      args.onSliderChange(newRange)
    }

    const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.currentTarget.value)
      args.searchChangeValue(e)
    }

    return (
      <TableFilterBar
        onSliderChange={sliderRangeHandler}
        search={search}
        searchChangeValue={searchChangeHandler}
        sliderRange={sliderRange}
      />
    )
  },
}
