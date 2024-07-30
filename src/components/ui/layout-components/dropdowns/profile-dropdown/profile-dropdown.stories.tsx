import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import dummyImage from '@/assets/webp/avatar-default.webp'
import { ProfileDropdown as ProfileDropdownComponent } from '@/components/ui/layout-components'
import { Avatar } from '@/components/ui/primitives'
import { store } from '@/services'

const meta = {
  argTypes: {},
  component: ProfileDropdownComponent,
  title: 'Layout Components/Dropdowns',
} satisfies Meta<typeof ProfileDropdownComponent>

export default meta
type Story = StoryObj<typeof meta>

export const ProfileDropdown: Story = {
  args: {
    avatar: dummyImage,
    email: 'test@test.com',
    name: 'User',
    trigger: <Avatar name={'User'} size={'s'} src={dummyImage} />,
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
