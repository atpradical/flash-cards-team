import { MemoryRouter } from 'react-router-dom'

import { CheckEmail } from '@/components/ui/layout-components/check-email/check-email'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: CheckEmail,
  title: 'Components/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmailExample: Story = {
  args: {
    email: 'test@email.com',
  },
  render: () => (
    <MemoryRouter>
      <CheckEmail {...CheckEmailExample.args} />
    </MemoryRouter>
  ),
}
