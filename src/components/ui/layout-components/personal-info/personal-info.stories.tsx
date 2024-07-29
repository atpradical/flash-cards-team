import { PersonalInfo as PersonalInfoComponent } from '@/components/ui/layout-components'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: PersonalInfoComponent,
  title: 'Layout Components/PersonalInfo',
} satisfies Meta<typeof PersonalInfoComponent>

export default meta
type Story = StoryObj<typeof meta>

export const PersonalInfo: Story = {
  args: {
    avatar: mockUser.avatar ?? '',
    email: mockUser.email,
    name: mockUser.name,
    onDelete: action('onDelete action invoked!'),
    onEdit: action('onEdit action invoked!'),
    onLogout: action('onLogout action invoked!'),
    onUpdate: action('onUpdate action invoked!'),
  },
}
