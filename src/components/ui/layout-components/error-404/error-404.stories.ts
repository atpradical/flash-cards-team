import type { Meta, StoryObj } from '@storybook/react'

import { Error404 as Error404Components } from '@/assets/icons'

const meta = {
  argTypes: {},
  component: Error404Components,
  title: 'Layout Components',
} satisfies Meta<typeof Error404Components>

type Story = StoryObj<typeof meta>
export default meta

export const Error404: Story = {
  args: {
    style: { height: '192px', width: '452px' },
  },
}
