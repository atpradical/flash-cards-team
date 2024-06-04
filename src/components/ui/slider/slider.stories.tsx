import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { action } from '@storybook/addon-actions'

import { Slider } from './slider'

const meta = {
  argTypes: {
    max: { control: 'number' },
    min: { control: 'number' },
    onValueChange: action('changed'),
  },
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

const SliderWithHooks: React.FC<{
  max?: number
  min?: number
  onValueChange: (value: number[]) => void
}> = ({ max = 100, min = 0, onValueChange }) => {
  const [value, setValue] = useState<number[]>([min, max])

  const handleOnChange = (newValue: number[]) => {
    setValue(newValue)
    onValueChange(newValue)
  }

  return <Slider max={max} min={min} onValueChange={handleOnChange} value={value} />
}

export const SliderInteractive: Story = {
  args: {
    max: 100,
    min: 0,
    onValueChange: (_value: number[]) => {},
  },
  render: args => <SliderWithHooks {...args} />,
}
