import type { Meta } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import userDefault from '@/assets/webp/avatar-default.webp'
import { ProfileDropdown, SettingsDropdown } from '@/components/ui/layout-components'
import { action } from '@storybook/addon-actions'

import { Avatar } from '../avatar'
import { Dropdown } from './dropdown'

type User = {
  email: string
  name: string
  photo: {
    alt: string
    src: string
  }
}
const mockUser: User = {
  email: 'j&johnson@gmail.com',
  name: 'Ivan',
  photo: {
    alt: 'Avatar',
    src: userDefault,
  },
}

const meta = {
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta

export const DropdownWithUserAvatar = {
  render: () => {
    return (
      <ProfileDropdown
        email={mockUser.email}
        name={mockUser.name}
        photo={mockUser.photo.src}
        photoDesc={mockUser.photo.alt}
        trigger={<Avatar size={'s'} src={userDefault} />}
      />
    )
  },
}

export const DropdownWithSettings = {
  args: {
    onDelete: action('onDelete was invoked'),
    onEdit: action('onEdit was invoked'),
  },

  render: (args: any) => {
    return (
      <MemoryRouter>
        <SettingsDropdown onDelete={args.onDelete} onEdit={args.onEdit} />
      </MemoryRouter>
    )
  },
}
