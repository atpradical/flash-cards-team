import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import dummyImage from '@/assets/webp/avatar-default.webp'
import { ProfileDropdown as ProfileDropdownComponent } from '@/components/ui/layout-components'
import { Avatar } from '@/components/ui/primitives'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { store } from '@/services'

const meta = {
  argTypes: {},
  component: ProfileDropdownComponent,
  title: 'Layout Components/Dropdowns/Profile Dropdown',
} satisfies Meta<typeof ProfileDropdownComponent>

export default meta
type Story = StoryObj<typeof meta>

export const ProfileDropdown: Story = {
  args: {
    avatar: dummyImage,
    email: mockUser.email,
    name: mockUser.name,
    trigger: <Avatar name={'User'} size={'s'} src={mockUser.avatar || dummyImage} />,
  },
  render: args => {
    return (
      <MemoryRouter>
        <Provider store={store}>
          <ProfileDropdownComponent {...args} />
        </Provider>
      </MemoryRouter>
    )
  },
}
