import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { store } from '@/services'

import { UserProfile as UserProfileComponent } from './user-profile'

const meta = {
  argTypes: {
    isAuth: { control: 'boolean' },
  },
  component: UserProfileComponent,
  title: 'Layout Components/Dropdowns',
} satisfies Meta<typeof UserProfileComponent>

export default meta
type Story = StoryObj<typeof meta>

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
