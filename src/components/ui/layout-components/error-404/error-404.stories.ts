import type { Meta, StoryObj } from '@storybook/react'

import { Error404 as Error404Component } from '@/assets/icons'

const meta = {
  argTypes: {},
  component: Error404Component,
  title: 'Layout Components',
} satisfies Meta<typeof Error404Component>

export default meta
type Story = StoryObj<typeof meta>

export const Error404: Story = {
  args: {
    style: { height: '192px', width: '452px' },
  },
}
