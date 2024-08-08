import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { UserProfile as UserProfileComponent } from '@/components/ui/layout-components/user-profile'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { store } from '@/services'

const meta = {
  argTypes: {
    isAuth: { control: 'boolean' },
  },
  component: UserProfileComponent,
  title: 'Layout Components/Dropdowns/User  Profile',
} satisfies Meta<typeof UserProfileComponent>

type Story = StoryObj<typeof meta>
export default meta

export const UserProfile: Story = {
  args: {
    isAuth: true,
    userData: mockUser,
  },
  render: args => (
    <MemoryRouter>
      <Provider store={store}>
        <UserProfileComponent {...args} />
      </Provider>
    </MemoryRouter>
  ),
}
