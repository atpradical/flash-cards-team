import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { CheckEmail } from '@/components/ui/layout-components/check-email/check-email'
import { store } from '@/services'
import { Meta, StoryObj } from '@storybook/react'

import { mockUser } from '../../primitives/dropdown/dropdown.mock'

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
    name: mockUser.name,
  },
  render: () => (
    <MemoryRouter>
      <Provider store={store}>
        <CheckEmail {...CheckEmailExample.args} />
      </Provider>
    </MemoryRouter>
  ),
}
