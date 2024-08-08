import type { Meta, StoryObj } from '@storybook/react'

import avatarDefault from '@/assets/webp/avatar-default.webp'

import { Avatar } from './avatar'

const meta = {
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['s', 'm', 'l'],
    },
  },
  component: Avatar,
  tags: ['autodocs'],
  title: 'Primitives/Avatar',
} satisfies Meta<typeof Avatar>

type Story = StoryObj<typeof meta>
export default meta

export const All: Story = {
  render: () => <AllAvatars />,
}

export const Small: Story = {
  args: {
    size: 's',
    src: avatarDefault,
  },
}

export const Medium: Story = {
  args: {
    src: avatarDefault,
  },
}

export const Large: Story = {
  args: {
    size: 'l',
    src: avatarDefault,
  },
}

export const Fallback: Story = {}

function AllAvatars() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar size={'s'} />
      <Avatar size={'s'} src={avatarDefault} />
      <Avatar />
      <Avatar src={avatarDefault} />
      <Avatar size={'l'} />
      <Avatar size={'l'} src={avatarDefault} />
    </div>
  )
}
