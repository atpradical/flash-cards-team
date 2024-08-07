import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { ExpiredLink as ExpiredLinkComponent } from './expired-link'

const meta = {
  argTypes: {},
  component: ExpiredLinkComponent,
  title: 'Layout Components',
} satisfies Meta<typeof ExpiredLinkComponent>

export default meta
type Story = StoryObj<typeof meta>

export const ExpiredLink: Story = {
  render: () => (
    <MemoryRouter>
      <ExpiredLinkComponent />
    </MemoryRouter>
  ),
}
