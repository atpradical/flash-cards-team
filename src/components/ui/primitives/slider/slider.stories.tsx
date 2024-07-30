import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import { Slider as SliderComponent } from './slider'

const meta = {
  argTypes: {},
  component: SliderComponent,
  tags: ['autodocs'],
  title: 'Primitives/Slider',
} satisfies Meta<typeof SliderComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Slider: Story = {
  args: {
    max: 37,
    min: 8,
    onCommit: action('slider commit actions!'),
    onRangeChange: action('slider actions!'),
    range: [0, 100],
  },
}
