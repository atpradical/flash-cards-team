import { Meta, StoryObj } from '@storybook/react'

import { Grade } from './grade'

const meta = {
  argTypes: {
    stars: { control: 'inline-radio' },
  },
  component: Grade,
  tags: ['autodocs'],
  title: 'Primitives/Grade',
} satisfies Meta<typeof Grade>

export default meta
type Story = StoryObj<typeof meta>

export const GradeZeroStars: Story = {
  args: {
    style: { margin: 0 },
  },
}

export const GradeThreeStars: Story = {
  args: {
    stars: 3,
    style: { margin: 0 },
  },
}

export const GradeAllStars: Story = {
  args: {
    stars: 5,
    style: { margin: 0 },
  },
}
