import type { Meta, StoryObj } from '@storybook/react'

import { DeckSettingsDropdown } from '@/components/layout/deckSettingsDropdown/deckSettingsDropdown'
import { UserDropdown } from '@/components/layout/userDropdown/userDropdown'
import { Dropdown } from '@/components/ui/dropdown/dropdown'

const meta = {
  argTypes: {
    defaultOpen: { type: 'boolean' },
  },
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const DropdownWithUserAvatar: Story = {
  render: () => {
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
        alt: 'UserPhoto',
        src: 'src/assets/img/userPhotoExample.png',
      },
    }

    return (
      <UserDropdown
        email={mockUser.email}
        name={mockUser.name}
        photo={mockUser.photo.src}
        photoDesc={mockUser.photo.alt}
        profilePageHref={'https://google.com'}
      />
    )
  },
} satisfies Story

export const DropdownWithSettings: Story = {
  render: () => {
    return <DeckSettingsDropdown />
  },
}
