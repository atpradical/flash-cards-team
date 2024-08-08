import type { Meta, StoryObj } from '@storybook/react'

import { Slider as SliderComponent } from '@/components/ui/primitives/slider'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: SliderComponent,
  tags: ['autodocs'],
  title: 'Primitives/Slider',
} satisfies Meta<typeof SliderComponent>

type Story = StoryObj<typeof meta>
export default meta

export const Slider: Story = {
  args: {
    max: 37,
    min: 8,
    onCommit: action('slider commit actions!'),
    onRangeChange: action('slider actions!'),
    range: [0, 100],
  },
}
