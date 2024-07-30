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

export default meta
type Story = StoryObj<typeof meta>

export const All: Story = {
  render: () => <AllAvatars />,
}

export const Small: Story = {
  args: {
    name: 'Ivan',
    size: 's',
    src: avatarDefault,
  },
}

export const Medium: Story = {
  args: {
    name: 'Ivan',
    size: 'm',
    src: avatarDefault,
  },
}

export const Large: Story = {
  args: {
    name: 'Ivan',
    size: 'm',
    src: avatarDefault,
  },
}

export const Fallback: Story = {
  args: {
    name: 'Ivan',
  },
}

function AllAvatars() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar name={'Ivan'} size={'s'} />
      <Avatar name={'Ivan'} size={'s'} src={avatarDefault} />
      <Avatar name={'Ivan'} />
      <Avatar name={'Ivan'} src={avatarDefault} />
      <Avatar name={'Ivan'} size={'l'} />
      <Avatar name={'Ivan'} size={'l'} src={avatarDefault} />
    </div>
  )
}
