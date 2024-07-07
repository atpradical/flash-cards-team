import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { action } from '@storybook/addon-actions'

import { Slider } from './slider'

const meta = {
  argTypes: {
    onValueChange: action('slider onValueChange callback invoked'),
    value: { control: 'object' },
  },
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderExample: Story = {
  args: {
    onRangeChange: action('slider onValueChange callback invoked'),
    range: [0, 100],
  },
  render: args => {
    const [sliderRange, setSliderRange] = useState([...args.range])

    const sliderHandler = (newRange: number[]) => {
      setSliderRange([...newRange])
    }

    return <Slider onRangeChange={sliderHandler} range={sliderRange} />
  },
}
