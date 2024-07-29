import { MemoryRouter } from 'react-router-dom'

import { Meta, StoryObj } from '@storybook/react'

import { ConfirmEmail as ConfirmEmailComponent } from './confirm-email'

const meta = {
  argTypes: {},
  component: ConfirmEmailComponent,
  title: 'Layout Components',
} satisfies Meta<typeof ConfirmEmailComponent>

export default meta
type Story = StoryObj<typeof meta>

export const ConfirmEmail: Story = {
  args: {},
  render: args => (
    <MemoryRouter>
      <ConfirmEmailComponent {...args} />
    </MemoryRouter>
  ),
}
