import { MemoryRouter } from 'react-router-dom'

import { CheckEmail as CheckEmailComponent } from '@/components/ui/layout-components/check-email/check-email'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: CheckEmailComponent,
  title: 'layout Components',
} satisfies Meta<typeof CheckEmailComponent>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmail: Story = {
  args: {
    email: 'test@email.com',
  },
  render: args => (
    <MemoryRouter>
      <CheckEmailComponent {...args} />
    </MemoryRouter>
  ),
}
