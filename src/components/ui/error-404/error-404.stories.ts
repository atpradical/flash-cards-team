import type { Meta, StoryObj } from '@storybook/react'

import { Error404 } from '@/assets/components/svgIcons'

const meta = {
  argTypes: {},
  component: Error404,
  tags: ['autodocs'],
  title: 'Components/Error404',
} satisfies Meta<typeof Error404>

export default meta
type Story = StoryObj<typeof meta>

export const Error404Example: Story = {
  args: {
    style: { height: '192px', width: '452px' },
  },
}
