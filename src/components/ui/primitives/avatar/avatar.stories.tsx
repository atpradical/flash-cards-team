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
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const All: Story = {
  render: () => <AllAvatars />,
}

export const Small: Story = {
  args: {
    size: 's',
    src: avatarDefault,
    title: 'JD',
  },
}

export const Medium: Story = {
  args: {
    size: 'm',
    src: avatarDefault,
    title: 'JD',
  },
}

export const Large: Story = {
  args: {
    size: 'm',
    src: avatarDefault,
    title: 'JD',
  },
}

export const Fallback: Story = {
  args: {
    title: 'JD',
  },
}

function AllAvatars() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar size={'s'} title={'JD'} />
      <Avatar size={'s'} src={avatarDefault} title={'JD'} />
      <Avatar title={'JD'} />
      <Avatar src={avatarDefault} title={'JD'} />
      <Avatar size={'l'} title={'JD'} />
      <Avatar size={'l'} src={avatarDefault} title={'JD'} />
    </div>
  )
}
