import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'

import { UserProfile as UserProfileComponent } from './user-profile'

const meta = {
  argTypes: {
    isAuth: { control: 'boolean' },
  },
  component: UserProfileComponent,
  title: 'Layout Components/Dropdowns/UserProfile',
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
      <UserProfileComponent {...args} />
    </MemoryRouter>
  ),
}
