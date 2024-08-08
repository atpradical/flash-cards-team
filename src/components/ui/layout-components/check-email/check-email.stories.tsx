import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { CheckEmail as CheckEmailComponent } from '@/components/ui/layout-components/check-email'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { store } from '@/services'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: CheckEmailComponent,
  title: 'Layout Components',
} satisfies Meta<typeof CheckEmailComponent>

type Story = StoryObj<typeof meta>
export default meta

export const CheckEmail: Story = {
  args: {
    email: mockUser.email,
    name: mockUser.name,
  },
  render: args => {
    return (
      <MemoryRouter>
        <Provider store={store}>
          <CheckEmailComponent {...args} />
        </Provider>
      </MemoryRouter>
    )
  },
}
