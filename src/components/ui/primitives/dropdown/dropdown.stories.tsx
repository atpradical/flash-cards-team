import type { Meta } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { ProfileDropdown, SettingsDropdown } from '@/components/ui/layout-components'
import { DropdownMenu } from '@/components/ui/primitives/dropdown/dropdown'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { FlexContainer } from '@/shared/ui/flex-container'
import { action } from '@storybook/addon-actions'

import { Avatar } from '../avatar'

const meta = {
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof DropdownMenu>

export default meta

export const DropdownWithUserAvatar = {
  render: () => {
    return (
      <MemoryRouter>
        <ProfileDropdown
          email={mockUser.email}
          name={mockUser.name}
          photo={mockUser.photo}
          trigger={<Avatar size={'s'} src={mockUser.photo.src} title={mockUser.photo.alt} />}
        />
      </MemoryRouter>
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

export const DropdownWithUserAvatarLeftBottomSided = {
  render: () => {
    return (
      <MemoryRouter>
        <FlexContainer jc={'end'} mt={'800px'}>
          <ProfileDropdown
            email={mockUser.email}
            name={mockUser.name}
            photo={mockUser.photo}
            trigger={<Avatar size={'s'} src={mockUser.photo.src} />}
          />
        </FlexContainer>
      </MemoryRouter>
    )
  },
}
