import type { Meta, StoryObj } from '@storybook/react'

import Logo from '@/assets/components/svgIcons/Logo'
import avatarDefault from '@/assets/webp/avatar-default.webp'
import { Avatar } from '@/components/ui/avatar'

import { FlexContainer } from '../flex-container'
import { Header } from './header'

const meta = {
  argTypes: {},
  component: Header,
  tags: ['autodocs'],
  title: 'Layout/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderEmpty: Story = {
  render: () => <Header />,
}

export const HeaderWithLogoAndAvatar: Story = {
  render: () => (
    <Header>
      <FlexContainer jc={'space-between'}>
        <Logo />
        <Avatar size={'s'} src={avatarDefault} title={'JD'} />
      </FlexContainer>
    </Header>
  ),
}
