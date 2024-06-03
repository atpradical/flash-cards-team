import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from './slider'
import { useState } from 'react'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {
    defaultValue: { control: 'object' },
    onValueChange: action('changed'),
  },
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

const SliderWithHooks = (args: {
  defaultValue: number[]
  onValueChange: (value: number[]) => void
}) => {
  const [value, setValue] = useState<number[]>([0, 100])

  const handleOnChange = (newValue: number[]) => {
    setValue(newValue)
    args.onValueChange(newValue)
  }

  return <Slider onValueChange={handleOnChange} value={value} defaultValue={[0, 100]} />
}

export const SliderInteractive: Story = {
  args: {
    defaultValue: [] as number[],
    onValueChange: (_value: number[]) => {},
  },
  render: args => <SliderWithHooks {...args} />,
}
