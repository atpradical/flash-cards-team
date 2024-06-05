import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { action } from '@storybook/addon-actions'

import { Slider } from './slider'

const meta = {
  argTypes: {
    value: { control: 'object' },
    onValueChange: action('slider onValueChange callback invoked'),
  },
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

const SliderWithHooks = ({
  value: initialValue,
  onValueChange,
}: {
  value: number[]
  onValueChange: (value: number[]) => void
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
    value: [0, 100],
    onValueChange: action('slider onValueChange callback invoked'),
  },
  render: args => <SliderWithHooks {...args} />,
}
