import { Grade } from '@/components/ui/grade/grade'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    stars: { control: 'inline-radio' },
  },
  component: Grade,
  tags: ['autodocs'],
  title: 'Components/Grade',
} satisfies Meta<typeof Grade>

export default meta
type Story = StoryObj<typeof meta>

export const GradeZeroStars: Story = {
  args: {},
}

export const GradeThreeStars: Story = {
  args: {
    stars: 3,
  },
}

export const GradeAllStars: Story = {
  args: {
    stars: 5,
  },
}
