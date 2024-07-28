import type { Meta, StoryObj } from '@storybook/react'

import { ExpiredLink as ExpiredLinkComponent } from './expired-link'

const meta = {
  argTypes: {},
  component: ExpiredLinkComponent,
  title: 'Layout Components/ExpiredLink',
} satisfies Meta<typeof ExpiredLinkComponent>

export default meta
type Story = StoryObj<typeof meta>

export const ExpiredLink: Story = {}
