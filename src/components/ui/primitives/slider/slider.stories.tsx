import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import { Slider as SliderComponent } from './slider'

const meta = {
  argTypes: {
    onValueChange: action('slider onValueChange callback invoked'),
    value: { control: 'object' },
  },
  component: SliderComponent,
  title: 'Primitives Components/Slider',
} satisfies Meta<typeof SliderComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Slider: Story = {
  args: {
    max: 37,
    min: 8,
    onRangeChange: action('slider actions!'),
    range: [0, 100],
  },
}
