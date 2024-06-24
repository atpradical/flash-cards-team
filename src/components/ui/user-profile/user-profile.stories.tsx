import type { Meta, StoryObj } from '@storybook/react'

import Logo from '@/assets/components/svgIcons/Logo'
import avatarDefault from '@/assets/webp/avatar-default.webp'
import { UserProfile } from '@/components/ui/user-profile/user-profile'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Header } from '@/shared/ui/header'
import { User } from '@/types'

const meta = {
  argTypes: {
    isAuthorized: {
      control: 'boolean',
    },
    userData: {
      control: 'object',
    },
  },
  component: UserProfile,
  tags: ['autodocs'],
  title: 'Components/UserProfile',
} satisfies Meta<typeof UserProfile>

export default meta
type Story = StoryObj<typeof meta>

const mockUser: User = {
  email: 'j&johnson@gmail.com',
  name: 'Ivan',
  photo: {
    alt: 'Avatar',
    src: avatarDefault,
  },
}

export const UserIsLoggedIn: Story = {
  args: {
    isAuthorized: true,
    userData: mockUser,
  },
  render: args => (
    <Header>
      <FlexContainer jc={'space-between'}>
        <Logo />
        <UserProfile {...args} />
      </FlexContainer>
    </Header>
  ),
}

export const UserIsLoggedOut: Story = {
  args: {
    isAuthorized: false,
    userData: mockUser,
  },
  render: args => (
    <Header>
      <FlexContainer jc={'space-between'}>
        <Logo />
        <UserProfile {...args} />
      </FlexContainer>
    </Header>
  ),
}
