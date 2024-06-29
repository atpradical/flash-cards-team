import type { Meta } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import userDefault from '@/assets/webp/avatar-default.webp'
import { DropdownSettings } from '@/components/layout/deckSettingsDropdown/dropdownSettings'
import { DropdownProfile } from '@/components/layout/userDropdown/dropdownProfile'
import { Avatar } from '@/components/ui/avatar'
import { Dropdown } from '@/components/ui/dropdown/dropdown'
import { action } from '@storybook/addon-actions'

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
      <DropdownProfile
        email={mockUser.email}
        name={mockUser.name}
        photo={mockUser.photo.src}
        photoDesc={mockUser.photo.alt}
        profilePageHref={'https://google.com'}
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
        <DropdownSettings onDelete={args.onDelete} onEdit={args.onEdit} />
      </MemoryRouter>
    )
  },
}
