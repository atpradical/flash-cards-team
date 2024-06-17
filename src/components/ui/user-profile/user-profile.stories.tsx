import type { Meta, StoryObj } from '@storybook/react'

import Logo from '@/assets/components/svgIcons/Logo'
import avatarDefault from '@/assets/webp/avatar-default.webp'
import { UserProfile } from '@/components/ui/user-profile/user-profile'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Header } from '@/shared/ui/header'

const meta = {
  args: {
    isAuthorized: true,
    src: avatarDefault,
    userName: 'Ivan',
  },
  component: UserProfile,
  tags: ['autodocs'],
  title: 'Components/UserProfile',
} satisfies Meta<typeof UserProfile>

export default meta
type Story = StoryObj<typeof meta>

export const UserIsLoggedIn: Story = {
  render: () => (
    <Header>
      <FlexContainer jc={'space-between'}>
        <Logo />
        <UserProfile isAuthorized src={avatarDefault} userName={'Ivan'} />
      </FlexContainer>
    </Header>
  ),
}

export const UserIsLoggedOut: Story = {
  render: () => (
    <Header>
      <FlexContainer jc={'space-between'}>
        <Logo />
        <UserProfile isAuthorized={false} />
      </FlexContainer>
    </Header>
  ),
}
