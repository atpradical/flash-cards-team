import { Grade } from '@/components/ui/primitives/grade'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    stars: { control: 'inline-radio' },
  },
  component: Grade,
  tags: ['autodocs'],
  title: 'Primitives/Grade',
} satisfies Meta<typeof Grade>

type Story = StoryObj<typeof meta>
export default meta

export const ZeroStars: Story = {}

export const ThreeStars: Story = {
  args: {
    stars: 3,
  },
}

export const AllStars: Story = {
  args: {
    stars: 5,
  },
}
