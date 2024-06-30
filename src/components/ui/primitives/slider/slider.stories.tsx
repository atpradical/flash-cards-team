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

const SliderWithHooks = ({
  onValueChange,
  value: initialValue,
}: {
  onValueChange: (value: number[]) => void
  value: number[]
}) => {
  const [value, setValue] = useState<number[]>(initialValue)

  const handleSliderValueChange = (newValue: number[]) => {
    setValue(newValue)
    onValueChange(newValue)
  }

  return <Slider onValueChange={handleSliderValueChange} value={value} />
}

export const SliderInteractive: Story = {
  args: {
    onValueChange: action('slider onValueChange callback invoked'),
    value: [0, 100],
  },
  render: args => <SliderWithHooks {...args} />,
}
