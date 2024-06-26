import { Error404 } from '@/components/ui/error-404/error-404'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Error404,
  tags: ['autodocs'],
  title: 'Components/Error404',
} satisfies Meta<typeof Error404>

export default meta
type Story = StoryObj<typeof meta>

export const Error404Example: Story = {}
